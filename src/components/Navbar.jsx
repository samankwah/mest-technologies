import React from "react"
import { Link, useLocation } from "react-router-dom"
import { navLinks } from "../utils/constants"
import { BsList } from "react-icons/bs"
import { Sidebar, Logo, Cart_Button } from "../components"
import { useProductsContext } from "../context/product/products_context"

const Navbar = () => {
  const { openSidebar, isSidebarOpen } = useProductsContext()
  const location = useLocation()
  return (
    <>
      <nav className="sticky top-0 z-40 py-4 bg-white md:bg-gray-100 xl:py-8 shadow-sm border-b border-gray-200">
        <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-2 px-5 md:flex-row md:justify-between xl:max-w-screen-xl xl:px-28  ">
          {/* Logo */}
          <Logo className=" text-3xl " />
          {/* Menu items */}
          <div className="hidden space-x-10 text-sm uppercase md:flex">
            {navLinks.map((menu) => {
              const { id, title, url } = menu
              const isActive = location.pathname === url
              return (
                <Link 
                  key={id} 
                  to={url}
                  className={`transition-colors duration-300 pb-1 ${
                    isActive 
                      ? 'text-primary font-semibold border-b-2 border-primary' 
                      : 'text-gray-700 hover:text-primary hover:border-b-2 hover:border-primary/50'
                  }`}
                >
                  {title}
                </Link>
              )
            })}
          </div>
          <div className=" hidden md:flex ">
            <Cart_Button />
          </div>

          {/* Mobile version */}
          <section className=" flex w-full items-center justify-between pt-5 pb-2 md:hidden  ">
            {/* Sidebar menu button */}
            <button
              type="button"
              aria-label="Open Sidebar"
              onClick={openSidebar}
              className=" border border-black p-1 hover:border-primary hover:bg-primary hover:text-white "
            >
              <BsList className="h-6 w-6" />
            </button>
            <Cart_Button />
          </section>
        </div>
      </nav>
      {isSidebarOpen ? <Sidebar /> : null}
    </>
  )
}

export default Navbar
