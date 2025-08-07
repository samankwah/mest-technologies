import React from "react"
import Paystack_Checkout from "../components/Paystack_Checkout"

const Checkout = () => {
  return (
    <>
      <section className="container mx-auto flex justify-center px-5 py-10 md:px-28">
        <Paystack_Checkout />
      </section>
    </>
  )
}

export default Checkout
