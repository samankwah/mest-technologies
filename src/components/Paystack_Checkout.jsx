import React, { useState, useEffect } from "react"
import { useCartContext } from "../context/cart/cart_context"
import { useNavigate } from "react-router-dom"
import { formatPrice } from "../utils/helper"
import { useAuth } from "../context/auth/auth_context"

const Paystack_Checkout = () => {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  // Pre-fill user data if logged in
  useEffect(() => {
    if (user) {
      setEmail(user.email || "")
      if (user.name) {
        const nameParts = user.name.split(" ")
        setFirstName(nameParts[0] || "")
        setLastName(nameParts.slice(1).join(" ") || "")
      }
    }
  }, [user])

  // Load Paystack script
  useEffect(() => {
    if (!window.PaystackPop) {
      const script = document.createElement('script')
      script.src = 'https://js.paystack.co/v1/inline.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  const handlePaystackPayment = () => {
    if (!window.PaystackPop) {
      alert("Paystack is loading, please try again in a moment")
      return
    }

    const totalInKobo = (total_amount + shipping_fee) * 100
    
    const handler = window.PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || "pk_live_c8cdfb75369ffc37b63b363f433522032ba1493e",
      email: email,
      amount: totalInKobo, // Amount in kobo (pesewas)
      currency: "GHS",
      ref: `shoptik_${Date.now()}`,
      metadata: {
        customer_name: `${firstName} ${lastName}`,
        phone: phone,
        order_items: cart.length,
        custom_fields: [
          {
            display_name: "Customer Name",
            variable_name: "customer_name",
            value: `${firstName} ${lastName}`
          },
          {
            display_name: "Phone",
            variable_name: "phone", 
            value: phone
          }
        ]
      },
      channels: ['card', 'bank', 'ussd', 'qr', 'mobile_money'],
      callback: function(response) {
        console.log("Payment successful:", response)
        // Clear the cart
        clearCart()
        // Navigate to success page
        navigate("/completion", { 
          state: { 
            paymentReference: response.reference,
            amount: formatPrice(total_amount + shipping_fee),
            paymentMethod: "Paystack"
          }
        })
        setIsProcessing(false)
      },
      onClose: function() {
        console.log("Payment dialog closed")
        setIsProcessing(false)
      }
    })
    
    handler.openIframe()
  }

  const handlePayment = (e) => {
    e.preventDefault()
    
    if (!email || !firstName || !lastName) {
      alert("Please fill in all required fields")
      return
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address")
      return
    }

    setIsProcessing(true)
    handlePaystackPayment()
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      {user && (
        <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center space-x-3">
            <img 
              src={user.picture} 
              alt={user.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm text-green-800 font-medium">Logged in as</p>
              <p className="text-green-600">{user.name}</p>
            </div>
          </div>
        </div>
      )}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Complete Your Order</h2>
        <p className="text-gray-600">
          Total: {formatPrice(total_amount + shipping_fee)}
        </p>
        <p className="text-sm text-gray-500">
          Including shipping: {formatPrice(shipping_fee)}
        </p>
      </div>

      <form onSubmit={handlePayment} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+233 XX XXX XXXX"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-gray-800 mb-2">Payment Options:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>💳 Credit/Debit Cards</li>
            <li>🏦 Bank Transfer</li>
            <li>📱 Mobile Money (MTN, Vodafone, AirtelTigo)</li>
            <li>🔢 USSD</li>
          </ul>
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className={`w-full font-bold py-3 px-4 rounded-md transition duration-200 ease-in-out transform ${
            isProcessing 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700 hover:scale-105 text-white'
          }`}
        >
          {isProcessing ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            `Pay ${formatPrice(total_amount + shipping_fee)} with Paystack`
          )}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          Secured by 🇬🇭 Paystack - Ghana's leading payment platform
        </p>
      </div>
    </section>
  )
}

export default Paystack_Checkout