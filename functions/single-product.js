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
  
  // Hardcoded products data
  const hardcodedProducts = {
    1: {
      id: "1",
      name: "Wooden Tool",
      price: 380000,
      description: "A beautifully crafted wooden stool made from sustainable materials. Perfect for modern homes seeking both functionality and style. Designed with comfort and durability in mind.",
      images: [
        { url: "/api/placeholder/400/400" },
        { url: "/api/placeholder/400/400" },
        { url: "/api/placeholder/400/400" }
      ],
      category: "FURNITURE",
      stock: 15,
      reviews: 24,
      stars: 4.5,
      colors: ["Natural Wood", "Dark Walnut"],
      material: "Solid Oak Wood",
      shipping: true,
      featured: true
    },
    2: {
      id: "2", 
      name: "Wooden Teapot",
      price: 80000,
      description: "Handcrafted wooden teapot with unique grain patterns. A perfect blend of traditional craftsmanship and modern design. Heat-resistant and food-safe finish.",
      images: [
        { url: "/api/placeholder/400/400" },
        { url: "/api/placeholder/400/400" }
      ],
      category: "DECORATION",
      stock: 8,
      reviews: 12,
      stars: 4.2,
      colors: ["Natural Wood", "Cherry Wood"],
      material: "Bamboo Wood",
      shipping: true,
      featured: false
    },
    3: {
      id: "3",
      name: "Wooden Janus Table Lamp", 
      price: 1100000,
      description: "Contemporary wooden table lamp with adjustable brightness. Features sustainable wood construction with modern LED technology. Perfect for reading and ambient lighting.",
      images: [
        { url: "/api/placeholder/400/400" },
        { url: "/api/placeholder/400/400" },
        { url: "/api/placeholder/400/400" }
      ],
      category: "LIGHTING",
      stock: 5,
      reviews: 18,
      stars: 4.8,
      colors: ["Natural Wood", "Dark Oak"],
      material: "Teak Wood",
      shipping: true,
      featured: true
    },
    4: {
      id: "4",
      name: "Under Dressing Table Kit",
      price: 720000,
      description: "Complete wooden dressing table set with mirror and storage compartments. Crafted from premium hardwood with elegant finishing. Includes adjustable mirror and multiple drawers.",
      images: [
        { url: "/api/placeholder/400/400" },
        { url: "/api/placeholder/400/400" }
      ],
      category: "FURNITURE", 
      stock: 3,
      reviews: 31,
      stars: 4.6,
      colors: ["Natural Wood", "Mahogany"],
      material: "Mahogany Wood",
      shipping: true,
      featured: true
    },
    5: {
      id: "5",
      name: "Table Lamp For Desk",
      price: 270000,
      description: "Modern wooden desk lamp with adjustable arm and LED bulb. Perfect for office or study use. Energy-efficient and eye-friendly lighting solution.",
      images: [
        { url: "/api/placeholder/400/400" }
      ],
      category: "LIGHTING",
      stock: 12,
      reviews: 9,
      stars: 4.3,
      colors: ["Natural Wood", "White Oak"],
      material: "Pine Wood",
      shipping: true,
      featured: false
    },
    6: {
      id: "6", 
      name: "Synnes Chair",
      price: 310000,
      description: "Ergonomic wooden chair with modern Scandinavian design. Comfortable seating with sustainable materials. Perfect for dining rooms and offices.",
      images: [
        { url: "/api/placeholder/400/400" },
        { url: "/api/placeholder/400/400" }
      ],
      category: "LOUNGE CHAIRS",
      stock: 7,
      reviews: 15,
      stars: 4.4,
      colors: ["Natural Wood", "Birch"],
      material: "Birch Wood",
      shipping: true,
      featured: false
    },
    7: {
      id: "7",
      name: "Stage Floor Lamp", 
      price: 330000,
      description: "Industrial-style wooden floor lamp with adjustable height. Perfect for living rooms and reading corners. Combines modern aesthetics with practical functionality.",
      images: [
        { url: "/api/placeholder/400/400" },
        { url: "/api/placeholder/400/400" }
      ],
      category: "LIGHTING",
      stock: 4,
      reviews: 22,
      stars: 4.7,
      colors: ["Black Wood", "Natural Wood"],
      material: "Ash Wood",
      shipping: true,
      featured: true
    },
    8: {
      id: "8",
      name: "Single Speaker Ring",
      price: 200000,
      description: "Wooden speaker enclosure with premium acoustic properties. Handcrafted design meets high-quality sound. Perfect for audiophiles who appreciate natural materials.",
      images: [
        { url: "/api/placeholder/400/400" }
      ],
      category: "DECORATION",
      stock: 6,
      reviews: 8,
      stars: 4.1,
      colors: ["Natural Wood", "Dark Walnut"],
      material: "Walnut Wood",
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
