#!/usr/bin/env node

/**
 * Simple Mock Server using only Node.js built-in modules
 * No external dependencies required
 */

import http from 'http';
import url from 'url';

const PORT = 8888;

// Mock product data
const mockProducts = [
  {
    id: "rec123",
    name: "Modern Sofa - Ghana Edition",
    price: 1500, // Price in GHS (Ghana Cedis)
    category: "sofa",
    description: "A beautiful modern sofa perfect for Ghanaian homes",
    image: "/src/assets/basketChair.webp",
    images: [{ url: "/src/assets/basketChair.webp" }],
    colors: ["blue", "gray"],
    company: "Ghana Furniture Co",
    featured: true,
    shipping: true,
    stock: 5,
    stars: 4.5,
    reviews: 23,
    material: "fabric",
    designer: "Kwame Asante"
  },
  {
    id: "rec124", 
    name: "Dining Table - Ashanti Style",
    price: 1200, // Price in GHS
    category: "dining",
    description: "Elegant dining table inspired by Ashanti craftsmanship",
    image: "/src/assets/light1.webp",
    images: [{ url: "/src/assets/light1.webp" }],
    colors: ["brown", "oak"],
    company: "Accra Woodworks",
    featured: false,
    shipping: true,
    stock: 3,
    stars: 4.2,
    reviews: 15,
    material: "wood",
    designer: "Ama Osei"
  },
  {
    id: "rec125",
    name: "Traditional Chair - Kente Pattern",
    price: 800, // Price in GHS
    category: "chair", 
    description: "Beautiful chair with traditional Kente pattern design",
    image: "/src/assets/light2.webp",
    images: [{ url: "/src/assets/light2.webp" }],
    colors: ["red", "gold", "green"],
    company: "Kumasi Crafts",
    featured: true,
    shipping: true,
    stock: 8,
    stars: 4.8,
    reviews: 32,
    material: "wood",
    designer: "Kofi Mensah"
  },
  {
    id: "rec126",
    name: "Wooden Janus Table Lamp",
    price: 1100,
    category: "lighting",
    description: "Contemporary wooden table lamp with adjustable brightness. Features sustainable wood construction with modern LED technology.",
    image: "/api/placeholder/400/400",
    images: [{ url: "/api/placeholder/400/400" }],
    colors: ["Natural Wood", "Dark Oak"],
    company: "Accra Lighting Co",
    featured: true,
    shipping: true,
    stock: 5,
    stars: 4.8,
    reviews: 18,
    material: "Teak Wood",
    designer: "Nana Akoto"
  },
  {
    id: "rec127",
    name: "Table Lamp For Desk",
    price: 270,
    category: "lighting",
    description: "Modern wooden desk lamp with adjustable arm and LED bulb. Perfect for office or study use.",
    image: "/api/placeholder/400/400",
    images: [{ url: "/api/placeholder/400/400" }],
    colors: ["Natural Wood", "White Oak"],
    company: "Kumasi Designs",
    featured: false,
    shipping: true,
    stock: 12,
    stars: 4.3,
    reviews: 9,
    material: "Pine Wood",
    designer: "Efua Asante"
  },
  {
    id: "rec128",
    name: "Under Dressing Table Kit",
    price: 720,
    category: "furniture",
    description: "Complete wooden dressing table set with mirror and storage compartments. Crafted from premium hardwood.",
    image: "/api/placeholder/400/400",
    images: [{ url: "/api/placeholder/400/400" }],
    colors: ["Natural Wood", "Mahogany"],
    company: "Ghana Woodworks",
    featured: true,
    shipping: true,
    stock: 3,
    stars: 4.6,
    reviews: 31,
    material: "Mahogany Wood",
    designer: "Kwame Osei"
  },
  {
    id: "rec129",
    name: "Stage Floor Lamp",
    price: 330,
    category: "lighting",
    description: "Industrial-style wooden floor lamp with adjustable height. Perfect for living rooms and reading corners.",
    image: "/api/placeholder/400/400",
    images: [{ url: "/api/placeholder/400/400" }],
    colors: ["Black Wood", "Natural Wood"],
    company: "Accra Modern",
    featured: true,
    shipping: true,
    stock: 4,
    stars: 4.7,
    reviews: 22,
    material: "Ash Wood",
    designer: "Aba Mensah"
  },
  {
    id: "rec130",
    name: "Single Speaker Ring",
    price: 200,
    category: "decoration",
    description: "Wooden speaker enclosure with premium acoustic properties. Handcrafted design meets high-quality sound.",
    image: "/api/placeholder/400/400",
    images: [{ url: "/api/placeholder/400/400" }],
    colors: ["Natural Wood", "Dark Walnut"],
    company: "Tamale Audio",
    featured: false,
    shipping: true,
    stock: 6,
    stars: 4.1,
    reviews: 8,
    material: "Walnut Wood",
    designer: "Abdul Rahman"
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
            reference: `shoptik_mock_${Date.now()}`
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
    <h1>🟡 Shoptik Mock Server Running</h1>
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