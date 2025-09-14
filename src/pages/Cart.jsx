import React from "react"
import { Breadcrumb, CartItems, SEO } from "../components"
import { useCartContext } from "../context/cart/cart_context"
import { Empty_cart } from "../components"
import { pageMetadata } from "../utils/pageMetadata"

const Cart = () => {
  const { cart } = useCartContext()
  if (cart.length === 0) return <Empty_cart />
  return (
    <>
      <SEO
        title={pageMetadata.cart.title}
        description={pageMetadata.cart.description}
      />
      <Breadcrumb title="cart" />
      <CartItems />
    </>
  )
}

export default Cart
