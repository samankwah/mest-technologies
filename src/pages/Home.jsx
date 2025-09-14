import React, { Suspense, lazy } from "react"
import { Loading, SEO } from "../components"
import { pageMetadata } from "../utils/pageMetadata"
import Header from "../components/Header"
import HomeProduct from "../components/HomeProduct"
import BasketProduct from "../components/Basket"
import ProductCategory from "../components/ProductCategory"

const Instagram = lazy(() => import("../components/Instagram"))
const ProductGrid = lazy(() => import("../components/ProductGrid"))

const Home = () => {

  return (
    <>
      <SEO
        title={pageMetadata.home.title}
        description={pageMetadata.home.description}
      />
      <Header />
      <HomeProduct />
      <BasketProduct />
      <ProductCategory />
      <Suspense fallback={<Loading />}>
        <ProductGrid />
        <Instagram />
      </Suspense>
    </>
  )
}

export default Home
