import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { navLinks } from "../utils/constants"
import { BsX } from "react-icons/bs"
import { Logo } from "../components"
import { useProductsContext } from "../context/product/products_context"

const Sidebar = () => {
  const { closeSidebar } = useProductsContext()
  const sidebarRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        closeSidebar()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  })

  return (
    <aside
      ref={sidebarRef}
      className="fixed top-0 right-0 left-0 z-30 h-screen w-2/3 md:w-1/2 lg:hidden bg-white shadow-xl flex flex-col"
    >
      {/* Fixed Header */}
      <div className="flex items-center justify-between py-4 px-5 border-b border-gray-200 flex-shrink-0">
        <Logo className="text-xl" />
        <button
          onClick={closeSidebar}
          className="p-1 border border-gray-300 rounded-md hover:border-primary hover:bg-primary hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <BsX className="h-6 w-6" />
        </button>
      </div>

      {/* Scrollable Navigation Content */}
      <div className="flex-1 overflow-y-auto px-5 py-4">
        <div className="text-sm uppercase space-y-2">
          {navLinks.map((link) => {
            const { id, title, url } = link
            return (
              <div key={id} className="rounded-md overflow-hidden">
                <Link
                  to={url}
                  className="block px-4 py-3 transition-all duration-300 ease-linear hover:bg-primary hover:text-white hover:translate-x-2 focus:outline-none focus:bg-primary focus:text-white"
                  onClick={closeSidebar}
                >
                  {title}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
