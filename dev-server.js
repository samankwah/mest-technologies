#!/usr/bin/env node

/**
 * Development Server with Mock Netlify Functions
 * This provides a fallback when Netlify CLI has issues
 */

import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8888;

// Middleware
app.use(express.json());

// Mock product data for development
const mockProducts = [
  {
    id: "rec123",
    name: "Modern Sofa",
    price: 1200,
    category: "sofa",
    description: "A beautiful modern sofa perfect for any living room",
    image: "https://res.cloudinary.com/die12ywpb/image/upload/v1677599870/sofa1.jpg",
    images: [
      { url: "https://res.cloudinary.com/die12ywpb/image/upload/v1677599870/sofa1.jpg" }
    ],
    colors: ["blue", "gray"],
    company: "Ghana Furniture Co",
    featured: true,
    shipping: true,
    stock: 5,
    stars: 4.5,
    reviews: 23
  },
  {
    id: "rec124", 
    name: "Dining Table",
    price: 800,
    category: "dining",
    description: "Elegant dining table for family gatherings",
    image: "https://res.cloudinary.com/die12ywpb/image/upload/v1677599870/table1.jpg",
    images: [
      { url: "https://res.cloudinary.com/die12ywpb/image/upload/v1677599870/table1.jpg" }
    ],
    colors: ["brown", "oak"],
    company: "Accra Woodworks",
    featured: false,
    shipping: true,
    stock: 3,
    stars: 4.2,
    reviews: 15
  }
];

// Mock Netlify Functions Routes
app.get('/.netlify/functions/products', (req, res) => {
  console.log('🟡 Mock: Serving products data');
  res.json(mockProducts);
});

app.get('/.netlify/functions/single-product', (req, res) => {
  const { id } = req.query;
  console.log(`🟡 Mock: Serving single product with id: ${id}`);
  
  const product = mockProducts.find(p => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: `No product with id: ${id}` });
  }
});

app.post('/.netlify/functions/stripe-payment-intent', (req, res) => {
  const { shipping_fee, total_amount } = req.body;
  console.log('🟡 Mock: Creating payment intent for', { shipping_fee, total_amount });
  
  // Mock Stripe response
  res.json({
    clientSecret: 'pi_mock_1234567890_secret_abcdef'
  });
});

// Proxy to Vite dev server for the React app
const viteProxy = createProxyMiddleware({
  target: 'http://localhost:5173',
  changeOrigin: true,
  ws: true, // proxy websockets for HMR
});

app.use('/', viteProxy);

// Start the mock server
app.listen(PORT, () => {
  console.log(`
🚀 Development server running!

Frontend (React): http://localhost:${PORT}
Mock Functions:   http://localhost:${PORT}/.netlify/functions/

Available endpoints:
- GET  /.netlify/functions/products
- GET  /.netlify/functions/single-product?id=rec123
- POST /.netlify/functions/stripe-payment-intent

🟡 Using MOCK data for development
🟡 Start Vite in another terminal: npm run dev

To use real Netlify functions, fix the Netlify CLI and use: npm run start
  `);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n👋 Development server stopped');
  process.exit(0);
});