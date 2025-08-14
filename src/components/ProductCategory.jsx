import React from "react"
import { useProductsContext } from "../context/product/products_context"
import { CategoryProducts } from "../components"
const ProductCategory = () => {
  const { products } = useProductsContext()

  const all_PlantHealth_products = products.filter(
    (product) => product.category === "Plant Health"
  )
  const all_LabEquipment_products = products.filter(
    (product) => product.category === "Lab Equipment"
  )

  return (
    <>
      <section className=" mt-20 md:mt-28">
        <div className="container mx-auto px-5 py-2 xl:px-28">
          <CategoryProducts
            products={all_PlantHealth_products}
            category_name="Plant Health"
          />
          <CategoryProducts
            products={all_LabEquipment_products}
            category_name="Lab Equipment"
          />
        </div>
      </section>
    </>
  )
}

export default ProductCategory
