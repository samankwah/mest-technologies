export const pageMetadata = {
  home: {
    title: "Agricultural Equipment & Monitoring Systems Ghana",
    description: "Professional agricultural monitoring equipment for Ghana's farming sector. Weather stations, soil analysis tools, plant health systems, and laboratory instruments for precision agriculture."
  },
  shop: {
    title: "Agricultural Monitoring Equipment Shop",
    description: "Browse our comprehensive collection of agricultural monitoring equipment including weather stations, soil analysis tools, plant health monitors, and laboratory instruments."
  },
  cart: {
    title: "Shopping Cart",
    description: "Review your selected agricultural monitoring equipment and proceed to secure checkout with Mest Technologies."
  },
  checkout: {
    title: "Secure Checkout",
    description: "Complete your purchase of agricultural monitoring equipment with our secure checkout process. Multiple payment options available."
  },
  completion: {
    title: "Order Confirmation",
    description: "Thank you for your purchase! Your agricultural monitoring equipment order has been confirmed and is being processed."
  },
  services: {
    title: "Agricultural Monitoring Services",
    description: "Comprehensive agricultural monitoring services including weather tracking, soil analysis, plant health assessment, and laboratory testing across Ghana."
  },
  features: {
    title: "Advanced Agricultural Solutions",
    description: "Discover advanced agricultural monitoring features including precision sensors, IoT connectivity, real-time data analytics, and automated reporting systems."
  },
  news: {
    title: "Agricultural Technology News",
    description: "Stay updated with the latest agricultural technology news, farming innovations, and precision agriculture trends in Ghana and beyond."
  },
  auth: {
    title: "Login",
    description: "Access your Mest Technologies account to manage orders, track deliveries, and explore personalized agricultural monitoring solutions."
  },
  callback: {
    title: "Authentication",
    description: "Completing authentication process for your Mest Technologies account."
  },
  error: {
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist. Browse our agricultural monitoring equipment and services instead."
  }
}

export const getProductMetadata = (productName, productPrice, productCategory) => ({
  title: productName ? `${productName} - Agricultural Equipment` : "Product Details",
  description: productName
    ? `${productName} - Professional agricultural monitoring equipment from Mest Technologies. Price: ${productPrice}. Category: ${productCategory}. Advanced solutions for Ghana's farming sector.`
    : "Explore detailed specifications and features of our professional agricultural monitoring equipment."
})