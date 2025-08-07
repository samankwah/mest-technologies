import React, { useContext } from "react"
import { useReducer } from "react"
import reducer from "../../reducers/product/products_reducer"
import { products_url as url, single_product_url } from "../../utils/constants"
import { 
  fallbackProducts, 
  getFallbackProductById, 
  getFeaturedProducts, 
  getNewArrivalProducts, 
  getBestsellerProducts 
} from "../../utils/fallbackData"

// Import actions variable
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "../../actions/actions"
import axios from "axios"
import { useEffect } from "react"

const ProductsContext = React.createContext()

// Create initial state for userReducer function
const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  newArrival_products: [],
  bestSeller_products: [],
  single_product_loading: false,
  single_product_error: false,
  singleProduct: {},
}

export const ProductsProvider = ({ children }) => {
  // Create userReducer function
  const [state, dispatch] = useReducer(reducer, initialState)

  // Open sidebar
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  // Close sidebar
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  // Fetch all products
  const fetchAllProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN })
    try {
      const response = await axios.get(url)
      const products = response.data
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products })
    } catch (error) {
      console.log("API failed, using fallback data:", error.message)
      // Use fallback data when API fails
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: fallbackProducts })
    }
  }

  // Fetch single product
  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
    try {
      const response = await axios.get(url)
      const single_product = response.data
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: single_product })
    } catch (error) {
      console.log("Single product API failed, using fallback data:", error.message)
      // Extract ID from URL and use fallback data
      const urlParts = url.split('id=')
      const productId = urlParts.length > 1 ? urlParts[1] : null
      const fallbackProduct = getFallbackProductById(productId)
      
      if (fallbackProduct) {
        dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: fallbackProduct })
      } else {
        dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
      }
    }
  }

  useEffect(() => {
    fetchAllProducts(url)
    window.scrollTo(0, 0)
  }, [])

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

// Create custom hook
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
