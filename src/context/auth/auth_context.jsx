import React, { createContext, useContext, useReducer, useEffect } from "react"

const AuthContext = createContext()

const AUTH_ACTIONS = {
  SET_LOADING: "SET_LOADING",
  SET_USER: "SET_USER",
  LOGOUT: "LOGOUT"
}

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    case AUTH_ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isAuthenticated: !!action.payload
      }
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false
      }
    default:
      return state
  }
}

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = () => {
    const savedUser = localStorage.getItem("mest_tech_user")
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser)
        dispatch({ type: AUTH_ACTIONS.SET_USER, payload: user })
      } catch (error) {
        localStorage.removeItem("mest_tech_user")
        dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false })
      }
    } else {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false })
    }
  }

  const loginWithEmail = async (email, name = "") => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true })
    
    try {
      const user = {
        email: email,
        name: name || email.split("@")[0],
        id: Date.now().toString(),
        picture: `https://ui-avatars.com/api/?name=${encodeURIComponent(name || email.split("@")[0])}&background=059669&color=fff`,
        loginTime: new Date().toISOString()
      }
      
      localStorage.setItem("mest_tech_user", JSON.stringify(user))
      dispatch({ type: AUTH_ACTIONS.SET_USER, payload: user })
      return { success: true, user }
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false })
      return { success: false, error: error.message }
    }
  }

  const loginWithRedirect = () => {
    const email = prompt("Enter your email address:")
    if (email && email.includes("@")) {
      const name = prompt("Enter your name (optional):")
      loginWithEmail(email, name)
    }
  }

  const logout = (options = {}) => {
    localStorage.removeItem("mest_tech_user")
    dispatch({ type: AUTH_ACTIONS.LOGOUT })
    
    if (options.logoutParams?.returnTo) {
      window.location.href = options.logoutParams.returnTo
    }
  }

  const value = {
    ...state,
    loginWithEmail,
    loginWithRedirect,
    logout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}