export const navLinks = [
  {
    id: 1,
    title: "home",
    url: "/",
  },
  {
    id: 2,
    title: "equipment",
    url: "/shop",
  },
  {
    id: 3,
    title: "features",
    url: "/features",
  },
  {
    id: 4,
    title: "services",
    url: "/services",
  },
  {
    id: 5,
    title: "resources",
    url: "/news",
  },
]

// API endpoints - will fallback to hardcoded data if these fail
export const products_url = "http://localhost:8888/.netlify/functions/products"
export const single_product_url = `http://localhost:8888/.netlify/functions/single-product?id=`
