import dotenv from "dotenv"
dotenv.config()

import Airtable from "airtable-node"


const airtable = new Airtable({ 
  apiKey: process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN || process.env.AIRTABLE_API_KEY 
})
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE)

exports.handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters
  
  // Hardcoded agricultural equipment data
  const hardcodedProducts = {
    1: {
      id: "1",
      name: "IPM Plant Disease Detection System",
      price: 850000,
      description: "Advanced plant disease detection and identification system perfect for Ghanaian crop monitoring. Features high-resolution imaging, AI-powered disease recognition, and field-portable design.",
      images: [
        { url: "/api/placeholder/400/400" },
        { url: "/api/placeholder/400/400" },
        { url: "/api/placeholder/400/400" }
      ],
      category: "Plant Health",
      stock: 5,
      reviews: 23,
      stars: 4.5,
      colors: ["black", "white", "gray", "green"],
      material: "Weather-resistant ABS plastic",
      shipping: true,
      featured: true
    },
    2: {
      id: "2", 
      name: "Watchdog 2550 Wind Station",
      price: 1250000,
      description: "Professional-grade weather station designed for Ghanaian agricultural conditions. Monitors wind speed, direction, temperature, humidity, and rainfall with cellular connectivity.",
      images: [
        { url: "/api/placeholder/400/400" },
        { url: "/api/placeholder/400/400" }
      ],
      category: "Weather Monitoring",
      stock: 3,
      reviews: 15,
      stars: 4.2,
      colors: ["black", "white", "gray", "green"],
      material: "Anodized aluminum with UV coating",
      shipping: true,
      featured: false
    },
    3: {
      id: "3",
      name: "SoilMaster Pro pH Kit", 
      price: 180000,
      description: "Comprehensive soil analysis system for precision agriculture in Ghana. Measures pH, nutrient levels, organic matter, and soil conductivity with GPS logging.",
      images: [
        { url: "/api/placeholder/400/400" },
        { url: "/api/placeholder/400/400" },
        { url: "/api/placeholder/400/400" }
      ],
      category: "Soil & Water",
      stock: 8,
      reviews: 32,
      stars: 4.8,
      colors: ["black", "white", "gray", "green"],
      material: "Ruggedized plastic with seals",
      shipping: true,
      featured: true
    },
    4: {
      id: "4",
      name: "AquaSense Water Monitor",
      price: 320000,
      description: "Professional water quality monitoring system for irrigation and aquaculture. Measures pH, dissolved oxygen, turbidity, temperature, and conductivity.",
      images: [
        { url: "/api/placeholder/400/400" },
        { url: "/api/placeholder/400/400" }
      ],
      category: "Soil & Water", 
      stock: 5,
      reviews: 18,
      stars: 4.8,
      colors: ["black", "white", "gray", "green"],
      material: "Titanium sensors with ABS housing",
      shipping: true,
      featured: true
    },
    5: {
      id: "5",
      name: "NutriTrack NPK Analyzer",
      price: 95000,
      description: "Portable nutrient analyzer for real-time NPK testing in field conditions. Features rapid analysis, digital readout, and calibration for Ghanaian soil types.",
      images: [
        { url: "/api/placeholder/400/400" }
      ],
      category: "Nutrient Management",
      stock: 12,
      reviews: 9,
      stars: 4.3,
      colors: ["black", "white", "gray", "green"],
      material: "Impact-resistant polycarbonate",
      shipping: true,
      featured: false
    },
    6: {
      id: "6", 
      name: "LabPro Precision Scale",
      price: 240000,
      description: "Professional analytical balance for laboratory applications and field research. Features 0.1mg precision, internal calibration, and environmental controls.",
      images: [
        { url: "/api/placeholder/400/400" },
        { url: "/api/placeholder/400/400" }
      ],
      category: "Lab Equipment",
      stock: 3,
      reviews: 31,
      stars: 4.6,
      colors: ["black", "white", "gray", "green"],
      material: "Stainless steel with anti-vibration",
      shipping: true,
      featured: false
    },
    7: {
      id: "7",
      name: "PlantVision Health Scanner", 
      price: 680000,
      description: "Advanced crop health monitoring system with AI-powered disease detection. Features multispectral imaging, GPS mapping, and automated reporting for Ghana agriculture.",
      images: [
        { url: "/api/placeholder/400/400" },
        { url: "/api/placeholder/400/400" }
      ],
      category: "Plant Health",
      stock: 4,
      reviews: 22,
      stars: 4.7,
      colors: ["black", "white", "gray", "green"],
      material: "Carbon fiber with protective housing",
      shipping: true,
      featured: true
    },
    8: {
      id: "8",
      name: "Test Strip Consumables Kit",
      price: 15000,
      description: "Comprehensive test strip kit for soil and water analysis. Includes pH strips, nitrate tests, phosphorus indicators, and potassium measurement tools.",
      images: [
        { url: "/api/placeholder/400/400" }
      ],
      category: "Consumables",
      stock: 15,
      reviews: 8,
      stars: 4.1,
      colors: ["black", "white", "gray", "green"],
      material: "Chemical-resistant paper strips",
      shipping: true,
      featured: false
    }
  }

  if (id) {
    try {
      const product = hardcodedProducts[id]
      if (!product) {
        return {
          statusCode: 404,
          body: `No product with id: ${id}`,
        }
      }
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: `Server Error`,
      }
    }
  }
  return {
    statusCode: 400,
    body: "Please provide product id",
  }
}
