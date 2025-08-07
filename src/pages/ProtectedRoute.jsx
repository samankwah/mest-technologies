import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../context/auth/auth_context"

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth()
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }
  
  if (!user) {
    return <Navigate to="/cart" state={{ message: "Please login to continue with checkout" }} />
  }
  
  return children
}

export default ProtectedRoute
