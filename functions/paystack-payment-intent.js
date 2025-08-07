import dotenv from "dotenv"
dotenv.config()

// Paystack integration for Ghana Cedis payments
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || "sk_live_82313d9bb10a23839a829f81c0590f2cf364a010"

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  const { shipping_fee, total_amount, email, customer_name } = JSON.parse(event.body)
  
  const calculateOrderAmount = () => {
    // Amount in kobo (Ghana pesewas) - Paystack uses kobo (100 kobo = 1 GHS)
    return (shipping_fee + total_amount) * 100
  }

  try {
    // Initialize Paystack payment
    const paymentData = {
      email: email,
      amount: calculateOrderAmount(), // Amount in kobo/pesewas
      currency: "GHS", // Ghana Cedis
      reference: `shoptik_${Date.now()}`,
      callback_url: `${event.headers.origin}/completion`,
      metadata: {
        customer_name: customer_name,
        shipping_fee: shipping_fee,
        total_amount: total_amount,
        order_source: "Shoptik Ghana"
      },
      channels: ["card", "bank", "ussd", "qr", "mobile_money"]
    }


    // Production Paystack API call
    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData)
    })

    const responseData = await response.json()

    if (!response.ok) {
      throw new Error(responseData.message || 'Payment initialization failed')
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify(responseData)
    }

  } catch (error) {
    console.error('Paystack payment error:', error)
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ 
        error: error.message || 'Payment initialization failed',
        details: error.response?.data || null
      })
    }
  }
}