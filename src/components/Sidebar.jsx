import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { navLinks } from "../utils/constants"
import { BsX, BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs"
import { RiTwitterXLine } from "react-icons/ri"
import { Logo } from "../components"
import { useProductsContext } from "../context/product/products_context"

const Sidebar = () => {
  const { closeSidebar } = useProductsContext()
  const sidebarRef = useRef(null)

  const socialLinks = [
    {
      id: 1,
      name: "Facebook",
      url: "https://facebook.com/mesttechnologies",
      icon: BsFacebook,
      color: "hover:text-blue-600"
    },
    {
      id: 2,
      name: "Twitter",
      url: "https://twitter.com/mesttechnologies",
      icon: RiTwitterXLine,
      color: "hover:text-gray-900"
    },
    {
      id: 3,
      name: "Instagram",
      url: "https://instagram.com/mesttechnologies",
      icon: BsInstagram,
      color: "hover:text-pink-500"
    },
    {
      id: 4,
      name: "LinkedIn",
      url: "https://linkedin.com/company/mesttechnologies",
      icon: BsLinkedin,
      color: "hover:text-blue-700"
    },
    {
      id: 5,
      name: "YouTube",
      url: "https://youtube.com/mesttechnologies",
      icon: BsYoutube,
      color: "hover:text-red-500"
    }
  ]

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

      {/* Social Media Icons Footer */}
      <div className="flex-shrink-0 px-5 py-4 border-t border-gray-200 bg-gray-50">
        <div className="text-center">
          <p className="text-xs text-gray-600 mb-3 font-medium">Follow Us</p>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full bg-white shadow-sm border border-gray-200 text-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-md ${social.color} focus:outline-none focus:ring-2 focus:ring-primary/20`}
                  aria-label={`Visit our ${social.name} page`}
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
