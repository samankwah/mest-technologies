import React from "react"
import { BsCart2, BsPersonPlus, BsPersonDash } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"
import { useCartContext } from "../context/cart/cart_context"
import { useAuth0 } from "@auth0/auth0-react"

const Cart_Button = () => {
  const { user, isAuthenticated, logout } = useAuth0()
  const { total_items, clearCart } = useCartContext()
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/auth')
  }

  const handleLogout = () => {
    clearCart()
    logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    })
  }

  return (
    <div className="flex space-x-8 md:space-x-8">
      <Link
        title="Cart"
        to="/cart"
        className="relative flex flex-row items-center justify-center"
      >
        <BsCart2 className="relative ml-1 h-6 w-6" />
        <span className="absolute -top-2 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white shadow-md">
          {total_items}
        </span>
      </Link>

      <div className="flex-col-reverse items-center justify-center md:flex md:flex-row">
        {isAuthenticated ? (
          <div className="flex items-center space-x-3">
            {user?.picture && (
              <img
                src={user.picture}
                alt={user.name || user.email}
                className="w-6 h-6 rounded-full"
                title={user.name || user.email}
              />
            )}
            <button
              title="Logout"
              className="flex hover:text-primary"
              onClick={handleLogout}
            >
              <BsPersonDash className="h-6 w-6" />
            </button>
          </div>
        ) : (
          <button
            title="Login"
            className="flex"
            onClick={handleLogin}
          >
            <BsPersonPlus className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  )
}

export default Cart_Button
