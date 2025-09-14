import React from "react"
import Paystack_Checkout from "../components/Paystack_Checkout"
import { SEO } from "../components"
import { pageMetadata } from "../utils/pageMetadata"

const Checkout = () => {
  return (
    <>
      <SEO
        title={pageMetadata.checkout.title}
        description={pageMetadata.checkout.description}
      />
      <section className="container mx-auto flex justify-center px-5 py-10 md:px-28">
        <Paystack_Checkout />
      </section>
    </>
  )
}

export default Checkout
