#!/usr/bin/env node

/**
 * Simple Mock Server using only Node.js built-in modules
 * No external dependencies required
 */

import http from 'http';
import url from 'url';

const PORT = 8888;

// Mock agricultural equipment data
const mockProducts = [
  {
    id: "rec123",
    name: "IPM Plant Disease Detection System",
    price: 8500, // Price in GHS (Ghana Cedis)
    category: "Plant Health",
    description: "Advanced plant disease detection and identification system perfect for Ghanaian crop monitoring. Features high-resolution imaging, AI-powered disease recognition, and field-portable design.",
    image: "/src/assets/basketChair.webp",
    images: [{ url: "/src/assets/basketChair.webp" }],
    colors: ["black", "white", "gray", "green"],
    company: "Mest AgriTech Solutions",
    featured: true,
    shipping: true,
    stock: 5,
    stars: 4.5,
    reviews: 23,
    material: "Weather-resistant ABS plastic",
    designer: "Agricultural Engineering Team"
  },
  {
    id: "rec124", 
    name: "Watchdog 2550 Wind Station - Professional Weather Monitoring",
    price: 12500, // Price in GHS
    category: "Weather Monitoring",
    description: "Professional-grade weather station designed for Ghanaian agricultural conditions. Monitors wind speed, direction, temperature, humidity, and rainfall.",
    image: "/src/assets/light1.webp",
    images: [{ url: "/src/assets/light1.webp" }],
    colors: ["black", "white", "gray", "green"],
    company: "Precision Agri Accra Ltd",
    featured: false,
    shipping: true,
    stock: 3,
    stars: 4.2,
    reviews: 15,
    material: "Anodized aluminum with UV-resistant coating",
    designer: "Weather Systems Engineering"
  },
  {
    id: "rec125",
    name: "SoilMaster Pro pH Kit - Advanced Soil Analysis",
    price: 1800, // Price in GHS
    category: "Soil & Water", 
    description: "Comprehensive soil analysis system for precision agriculture in Ghana. Measures pH, nutrient levels, organic matter, and soil conductivity.",
    image: "/src/assets/light2.webp",
    images: [{ url: "/src/assets/light2.webp" }],
    colors: ["black", "white", "gray", "green"],
    company: "Kumasi Agricultural Instruments",
    featured: true,
    shipping: true,
    stock: 8,
    stars: 4.8,
    reviews: 32,
    material: "Ruggedized plastic with waterproof seals",
    designer: "Soil Science Laboratory"
  },
  {
    id: "rec126",
    name: "AquaSense Water Monitor - Multi-Parameter Testing",
    price: 3200,
    category: "Soil & Water",
    description: "Professional water quality monitoring system for irrigation and aquaculture applications. Measures pH, dissolved oxygen, turbidity, temperature, and conductivity.",
    image: "/api/placeholder/400/400",
    images: [{ url: "/api/placeholder/400/400" }],
    colors: ["black", "white", "gray", "green"],
    company: "Hydro Systems Ghana",
    featured: true,
    shipping: true,
    stock: 5,
    stars: 4.8,
    reviews: 18,
    material: "Titanium sensors with ABS housing",
    designer: "Water Quality Engineering"
  },
  {
    id: "rec127",
    name: "NutriTrack Fertilizer Analyzer - Rapid NPK Testing",
    price: 950,
    category: "Nutrient Management",
    description: "Portable nutrient analyzer for real-time NPK testing in field conditions. Features rapid analysis, digital readout, and calibration for Ghanaian soil types.",
    image: "/api/placeholder/400/400",
    images: [{ url: "/api/placeholder/400/400" }],
    colors: ["black", "white", "gray", "green"],
    company: "AgriNutrient Systems",
    featured: false,
    shipping: true,
    stock: 12,
    stars: 4.3,
    reviews: 9,
    material: "Impact-resistant polycarbonate",
    designer: "Nutrient Analysis Lab"
  },
  {
    id: "rec128",
    name: "LabPro Precision Scale - High-Accuracy Weighing",
    price: 2400,
    category: "Lab Equipment",
    description: "Professional analytical balance for laboratory applications and field research. Features 0.1mg precision, internal calibration, and environmental controls.",
    image: "/api/placeholder/400/400",
    images: [{ url: "/api/placeholder/400/400" }],
    colors: ["black", "white", "gray", "green"],
    company: "Laboratory Equipment Ghana",
    featured: true,
    shipping: true,
    stock: 3,
    stars: 4.6,
    reviews: 31,
    material: "Stainless steel with anti-vibration base",
    designer: "Precision Instruments Division"
  },
  {
    id: "rec129",
    name: "PlantVision Health Scanner - AI-Powered Crop Monitoring",
    price: 6800,
    category: "Plant Health",
    description: "Advanced crop health monitoring system with AI-powered disease detection. Features multispectral imaging, GPS mapping, and automated reporting.",
    image: "/api/placeholder/400/400",
    images: [{ url: "/api/placeholder/400/400" }],
    colors: ["black", "white", "gray", "green"],
    company: "Smart Agriculture Ghana",
    featured: true,
    shipping: true,
    stock: 4,
    stars: 4.7,
    reviews: 22,
    material: "Carbon fiber with protective housing",
    designer: "AI Agriculture Research Team"
  },
  {
    id: "rec130",
    name: "Test Strip Consumables Kit - Multi-Parameter Analysis",
    price: 150,
    category: "Consumables",
    description: "Comprehensive test strip kit for soil and water analysis. Includes pH strips, nitrate tests, phosphorus indicators, and potassium measurement tools.",
    image: "/api/placeholder/400/400",
    images: [{ url: "/api/placeholder/400/400" }],
    colors: ["black", "white", "gray", "green"],
    company: "Northern Ghana Lab Supplies",
    featured: false,
    shipping: true,
    stock: 6,
    stars: 4.1,
    reviews: 8,
    material: "Chemical-resistant paper strips",
    designer: "Laboratory Standards Division"
  }
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  console.log(`${method} ${path}`);

  // Handle mock Netlify functions
  if (path === '/.netlify/functions/products') {
    console.log('🟡 Mock: Serving products data');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(mockProducts));
    return;
  }

  if (path === '/.netlify/functions/single-product') {
    const { id } = parsedUrl.query;
    console.log(`🟡 Mock: Serving single product with id: ${id}`);
    
    const product = mockProducts.find(p => p.id === id);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    if (product) {
      res.end(JSON.stringify(product));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: `No product with id: ${id}` }));
    }
    return;
  }

  if (path === '/.netlify/functions/stripe-payment-intent' && method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        const { shipping_fee, total_amount } = JSON.parse(body);
        console.log('🟡 Mock: Creating Stripe payment intent for', { shipping_fee, total_amount });
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          clientSecret: 'pi_mock_1234567890_secret_abcdef_ghana'
        }));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
    return;
  }

  if (path === '/.netlify/functions/paystack-payment-intent' && method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        const { shipping_fee, total_amount, email, customer_name } = JSON.parse(body);
        console.log('🟡 Mock: Creating Paystack payment for', { 
          email, customer_name, shipping_fee, total_amount 
        });
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          data: {
            authorization_url: `https://checkout.paystack.com/mock_${Date.now()}`,
            access_code: `mock_access_code_${Date.now()}`,
            reference: `mest_tech_mock_${Date.now()}`
          }
        }));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
    return;
  }

  // For all other requests, return instructions
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <h1>🟡 Mest Technologies Mock Server Running</h1>
    <p><strong>This server provides mock Netlify functions for development.</strong></p>
    
    <h2>Available Endpoints:</h2>
    <ul>
      <li><a href="/.netlify/functions/products">GET /.netlify/functions/products</a> - Get all products</li>
      <li><a href="/.netlify/functions/single-product?id=rec123">GET /.netlify/functions/single-product?id=rec123</a> - Get single product</li>
      <li>POST /.netlify/functions/stripe-payment-intent - Create Stripe payment intent (Legacy)</li>
      <li>POST /.netlify/functions/paystack-payment-intent - Create Paystack payment (Ghana)</li>
    </ul>
    
    <h2>Next Steps:</h2>
    <ol>
      <li>Open another terminal</li>
      <li>Run: <code>npm run dev</code></li>
      <li>Open your React app at: <a href="http://localhost:5173">http://localhost:5173</a></li>
    </ol>
    
    <p><strong>Your React app will now be able to fetch data from these mock functions!</strong></p>
    
    <h2>Mock Data:</h2>
    <p>Using ${mockProducts.length} products with Ghana Cedis (GHS) pricing</p>
  `);
});

server.listen(PORT, () => {
  console.log(`
🚀 Simple Mock Server Running!

Mock Functions Server: http://localhost:${PORT}
Available endpoints:
- GET  /.netlify/functions/products
- GET  /.netlify/functions/single-product?id=rec123  
- POST /.netlify/functions/stripe-payment-intent (Legacy)
- POST /.netlify/functions/paystack-payment-intent (Ghana)

🟡 Using MOCK data with Ghana Cedis pricing
🟡 Next: Run 'npm run dev' in another terminal
🟡 Then open your React app at http://localhost:5173

The React app will fetch data from this mock server instead of real APIs.
  `);
});

process.on('SIGINT', () => {
  console.log('\n👋 Mock server stopped');
  process.exit(0);
});