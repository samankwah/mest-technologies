import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0()
  const location = useLocation()

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

  if (!isAuthenticated) {
    return <Navigate
      to={`/auth?returnTo=${encodeURIComponent(location.pathname)}`}
      state={{ message: "Please login to continue with checkout" }}
    />
  }

  return children
}

export default ProtectedRoute
