import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Callback = () => {
  const { isLoading, error, isAuthenticated, user } = useAuth0()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [debugInfo, setDebugInfo] = useState('')

  useEffect(() => {
    // Debug information
    const urlParams = {
      code: searchParams.get('code'),
      state: searchParams.get('state'),
      error: searchParams.get('error'),
      error_description: searchParams.get('error_description')
    }

    console.log('Callback Debug Info:', {
      isLoading,
      isAuthenticated,
      error,
      user,
      urlParams,
      currentURL: window.location.href
    })

    setDebugInfo(JSON.stringify(urlParams, null, 2))

    const handleAuth = async () => {
      try {
        // Check for Auth0 URL error parameters
        if (searchParams.get('error')) {
          console.error('Auth0 Error:', searchParams.get('error'), searchParams.get('error_description'))
          navigate('/auth?error=' + encodeURIComponent(searchParams.get('error_description') || 'Authentication failed'), { replace: true })
          return
        }

        // Wait for Auth0 to process the callback
        if (!isLoading) {
          if (isAuthenticated && user) {
            console.log('Authentication successful, redirecting...')
            navigate('/', { replace: true })
          } else if (!isAuthenticated && !error) {
            // Still processing or need to retry
            console.log('Still processing authentication...')
          }
        }
      } catch (err) {
        console.error('Callback processing error:', err)
        navigate('/auth?error=callback_failed', { replace: true })
      }
    }

    const timeout = setTimeout(handleAuth, 1000) // Give Auth0 time to process
    return () => clearTimeout(timeout)
  }, [isLoading, error, isAuthenticated, user, navigate, searchParams])

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Authentication Error</h2>
          <p className="text-gray-600 mb-4">{error.message}</p>
          {debugInfo && (
            <details className="mb-4 text-left">
              <summary className="text-sm text-gray-500 cursor-pointer">Debug Info</summary>
              <pre className="text-xs text-gray-400 mt-2 bg-gray-50 p-2 rounded overflow-x-auto">
                {debugInfo}
              </pre>
            </details>
          )}
          <button
            onClick={() => navigate('/auth', { replace: true })}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Completing Sign In</h2>
        <p className="text-gray-600">Please wait while we redirect you...</p>
      </div>
    </div>
  )
}

export default Callback