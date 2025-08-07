import React from "react"
import { Link } from "react-router-dom"
import { useProductsContext } from "../context/product/products_context"
import { formatPrice } from "../utils/helper"

const ProductGrid = () => {
  const { 
    featured_products, 
    newArrival_products, 
    bestSeller_products 
  } = useProductsContext()

  const ProductColumn = ({ title, products }) => (
    <div className="w-full">
      <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-black">
        {title}
      </h3>
      <hr className="border-t border-gray-300 mb-6" />
      <div className="space-y-6">
        {products && products.length > 0 ? (
          products.slice(0, 3).map((product) => (
            <Link key={product.id} to={`/shop/${product.id}`}>
              <div className="flex items-start gap-4 group cursor-pointer hover:bg-gray-50 rounded-lg p-2 -m-2 transition-all duration-200">
                <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <h4 className="font-medium text-gray-900 text-sm leading-snug group-hover:text-teal-500 transition-colors mb-1">
                    {product.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No products available</p>
        )}
      </div>
    </div>
  )

  return (
    <section className="container mx-auto mt-0 px-5 py-20 xl:px-28">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12 lg:gap-16">
        <ProductColumn title="BEST SELLER" products={bestSeller_products} />
        <ProductColumn title="NEW ARRIVAL" products={newArrival_products} />
        <ProductColumn title="FEATURED" products={featured_products} />
      </div>
    </section>
  )
}

export default ProductGrid
