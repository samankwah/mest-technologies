import React, { useState } from "react"
import { Link } from "react-router-dom"
import BasketChair from "../assets/basketChair.webp"
import Light1 from "../assets/light1.webp"
import Light2 from "../assets/light2.webp"
const HomeProduct = () => {
  const [activeCategory, setActiveCategory] = useState("ALL")

  // Agricultural equipment products for Ghana market
  const hardcodedProducts = [
    {
      id: "rec123",
      name: "IPM Plant Disease Detection System",
      price: "₵8,500.00",
      category: "PLANT HEALTH",
      badge: null,
      image: BasketChair
    },
    {
      id: "rec124",
      name: "Watchdog Wind Station - Weather Monitor",
      price: "₵12,500.00",
      category: "WEATHER MONITORING",
      badge: "NEW",
      image: Light1
    },
    {
      id: "rec125",
      name: "SoilMaster Pro pH Analysis Kit",
      price: "₵1,800.00",
      category: "SOIL & WATER",
      badge: "SALE",
      image: Light2
    },
    {
      id: "rec126",
      name: "AquaSense Water Quality Monitor",
      price: "₵3,200.00",
      category: "SOIL & WATER",
      badge: "NEW",
      image: "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "rec127",
      name: "NutriTrack NPK Fertilizer Analyzer",
      price: "₵950.00",
      category: "NUTRIENT MANAGEMENT",
      badge: null,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "rec128",
      name: "LabPro Precision Analytical Scale",
      price: "₵2,400.00",
      category: "LAB EQUIPMENT",
      badge: "SALE",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "rec129",
      name: "PlantVision AI Health Scanner",
      price: "₵6,800.00",
      category: "PLANT HEALTH",
      badge: "SALE",
      image: "https://images.unsplash.com/photo-1581093804475-577d72e38aa0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "rec130",
      name: "Multi-Parameter Test Strip Kit",
      price: "₵150.00",
      category: "CONSUMABLES",
      badge: null,
      image: "https://images.unsplash.com/photo-1582560469781-1965b9af903d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ]

  const categories = ["ALL", "WEATHER MONITORING", "SOIL & WATER", "PLANT HEALTH", "NUTRIENT MANAGEMENT", "LAB EQUIPMENT", "CONSUMABLES"]

  const filteredProducts = activeCategory === "ALL" 
    ? hardcodedProducts 
    : hardcodedProducts.filter(product => product.category.toUpperCase() === activeCategory)

  return (
    <>
      <section className="mt-20 md:mt-28 mb-8">
        <div className="container mx-auto px-5 xl:px-28">
          {/* Category Navigation Tabs */}
          <div className="mb-8 flex justify-center">
            <div className="flex gap-4 md:flex-wrap md:gap-6 text-sm md:text-base overflow-x-auto scrollbar-hide pb-2 max-w-full">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`font-medium uppercase tracking-wider transition-colors hover:text-teal-500 whitespace-nowrap px-2 py-1 flex-shrink-0 ${
                    activeCategory === category
                      ? "text-teal-500"
                      : "text-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 mb-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/shop/${product.id}`}>
                <article className="group relative cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
                  <div className="relative bg-gray-50 rounded-lg mb-4 overflow-hidden">
                    <div className="h-48 md:h-64 lg:h-72 w-full p-6 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                      />
                    </div>
                    {product.badge && (
                      <div className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white rounded ${
                        product.badge === "SALE" ? "bg-red-500" : "bg-green-500"
                      }`}>
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm md:text-base font-medium text-gray-900 group-hover:text-teal-500 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {product.price}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Go to Shop Button with Lines */}
          <div className="flex items-center justify-center gap-6 mb-0">
            <hr className="flex-1 border-t border-gray-300" />
            <Link
              to="/shop"
              className="inline-block border border-gray-300 px-8 py-3 text-sm font-medium uppercase tracking-wider text-gray-700 hover:bg-gray-50 transition-colors"
            >
              GO TO SHOP
            </Link>
            <hr className="flex-1 border-t border-gray-300" />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeProduct
