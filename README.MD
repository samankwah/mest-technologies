![Logo](https://res.cloudinary.com/die12ywpb/image/upload/v1677599870/Minimalist_Brown_Music_Logo_Instagram_f_h0utlr.png)

# Mest Technologies - Agricultural Monitoring Equipment Platform

Mest Technologies is a specialized full-stack eCommerce platform designed to serve Ghana's agricultural sector with advanced monitoring equipment and laboratory instruments. The platform focuses on weather monitoring, soil analysis, water management, plant health, nutrient management, and laboratory equipment to support precision agriculture across Ghana.

Built with modern web technologies, the platform provides an engaging user interface and seamless shopping experience tailored for farmers, researchers, agricultural professionals, and institutions. The project features comprehensive documentation, progress tracking, and robust development environment optimized for agricultural equipment sales.

## Current Features

- 🌾 **Agricultural Equipment Focus** - Weather monitoring, soil analysis, water management, plant health systems
- 🏭 **Laboratory Instruments** - Precision scales, microscopes, analytical equipment for agricultural research
- 💳 **Paystack Integration** - Native payment gateway with Mobile Money, Bank Transfer, Cards for equipment purchases
- 📱 **Technical Product Display** - Equipment specifications, accuracy ratings, IP certifications
- 🛒 **Professional Procurement** - Equipment browsing, technical comparisons, institutional pricing
- 📊 **Equipment Tracking** - Installation scheduling, calibration management, service support
- 🔧 **Technical Support** - Training included, local service network, equipment maintenance
- ⚡ **Performance Optimized** - Fast loading for technical documentation and equipment catalogs

## Tech Stack

**Frontend:** React 18, Context API, React Router v6, TailwindCSS, Vite

**Backend:** Netlify Serverless Functions

**Payment Gateway:** Paystack (Ghana Cedis - GHS) - Equipment & Institutional Sales

**Data Storage:** Agricultural Equipment Database + Technical Specifications

**Development Tools:** Mock Server, Equipment Catalog Management

**Build System:** Vite with PWA plugin for offline equipment catalogs

**Documentation:** Technical specifications, installation guides, calibration procedures

## Development Setup

### Quick Start

```bash
# Install dependencies
npm install

# Terminal 1 - Start mock server (recommended for development)
npm run dev:mock

# Terminal 2 - Start React development server
npm run dev
```

**Development URLs:**

- React App: `http://localhost:5173`
- Mock Server: `http://localhost:8888`

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy with Netlify
npm run start
```

## Project Structure

```
├── src/
│   ├── components/       # React components (30+ components)
│   ├── context/         # Context providers (auth, cart, filter, products)
│   ├── pages/           # Route components
│   ├── reducers/        # State management logic
│   ├── utils/           # Helper functions and constants
│   └── assets/          # Images and static assets
├── functions/           # Netlify serverless functions
├── docs/               # Comprehensive documentation system
├── scripts/            # Automation and utility scripts
└── progress_tracker.json # Project progress data
```

## Live Project

The project is configured for deployment at [Shoptik Ghana](https://shoptik.netlify.app)

## Screenshots

**Current Development State**

![App Screenshot](https://res.cloudinary.com/die12ywpb/image/upload/v1677599343/screencapture-shoptik-netlify-app-2023-02-28-21_14_57_io0yvv.png)

## Recent Development Highlights

- **Paystack Integration Success** - Migrated from Stripe to Paystack for Ghana market with native implementation
- **Ghana Market Localization** - Adapted content, currency (GHS), and payment methods for Ghanaian customers
- **Development Environment Enhancement** - Implemented mock server system for efficient local development
- **Progress Tracking System** - Built comprehensive documentation and project monitoring system
- **React 18 Compatibility** - Resolved dependency conflicts and upgraded to modern React patterns
- **Mobile Money Support** - Integrated MTN, Vodafone, AirtelTigo mobile money payments
- **Performance Optimization** - Implemented Vite build system and PWA capabilities
- **Component Architecture** - Structured modular component system with 30+ reusable components

## Key Technical Achievements

- **Native Paystack Integration** - Custom implementation without external dependencies
- **Fallback Data System** - Robust error handling with mock data when APIs are unavailable
- **Context-Based State Management** - Efficient state management using React Context and Reducers
- **Responsive Design System** - TailwindCSS implementation with mobile-first approach
- **Automated Documentation** - JSON-based progress tracking with automated reporting
- **Serverless Functions** - Netlify Functions for payment processing and data management
- **Development Workflow** - Parallel development with mock servers and hot reloading

## Available Scripts

```bash
# Development
npm run dev              # Start Vite development server
npm run dev:mock         # Start mock server for development
npm start               # Start Netlify dev server
npm run netlify         # Alternative Netlify dev command

# Production
npm run build           # Build for production
npm run preview         # Preview production build

# Utilities
npm run clean           # Clean install (remove node_modules and reinstall)
```

## Documentation System

This project includes a comprehensive documentation system:

- **Progress Tracking** - `progress_tracker.json` with automated updates
- **Project Planning** - `PROJECT_PLAN.md` with phases and milestones
- **Change Documentation** - `CHANGELOG.md` with detailed version history
- **Setup Guides** - Multiple setup and configuration guides
- **Templates** - `docs/TEMPLATES.md` for consistent documentation

### Quick Status Check

```bash
node scripts/check_status.js
```

## Payment Integration

### Paystack Features

- **Currency**: Ghana Cedis (GHS)
- **Payment Methods**: Cards, Bank Transfer, Mobile Money, USSD, QR Codes
- **Mobile Money**: MTN, Vodafone, AirtelTigo support
- **Live Integration**: Production-ready with configured keys

### Development vs Production

- Development: Uses mock server for API responses
- Production: Real Paystack API integration with live keys

## Acknowledgements

- [React 18](https://react.dev/)
- [Paystack](https://paystack.com/docs)
- [Airtable](https://airtable.com/developers/web/api/introduction)
- [Vite](https://vitejs.dev/)
- [React Router v6](https://reactrouter.com/en/main)
- [React Icons](https://react-icons.github.io/react-icons)
- [TailwindCSS](https://tailwindcss.com/)
- [Netlify](https://docs.netlify.com/)

## Project Status

**Current Version**: 2.0.0 (Ghana Localized)  
**Development Status**: Active Development  
**Overall Progress**: 25% Complete  
**Current Phase**: Phase 1 Complete, Planning Phase 2

### Phase Breakdown

- ✅ **Phase 1**: Initial Setup & Localization (100% complete)
- ⭕ **Phase 2**: Product & Content Management (0% - planned)
- ⭕ **Phase 3**: Enhanced Features (0% - planned)
- ⭕ **Phase 4**: Launch & Marketing (0% - planned)

### Component Status

- ✅ Frontend Setup (100%)
- ✅ Backend Functions (100%)
- ✅ Payment Integration (100%)
- ✅ Authentication Context (100%)
- 🟡 Testing Coverage (30%)
- ⭕ Product Management (0%)
- ⭕ UI/UX Enhancement (0%)
- ⭕ Production Deployment (0%)

## Contributing

This project uses a structured development approach:

1. **Check Project Status**: `node scripts/check_status.js`
2. **Follow Documentation Standards**: Use templates in `docs/TEMPLATES.md`
3. **Update Progress**: Modify `progress_tracker.json` for major changes
4. **Test Locally**: Use `npm run dev:mock` for development

## Design Inspiration

- [Behance](https://www.behance.net/gallery/85274215/Furniture-e-Commerce-Website-Landing-Page-Exploration)

## License

Mest Technologies is licensed under the MIT License. See the LICENSE file for more information.
[MIT](LICENSE)

## Support & Feedback

For technical issues, feature requests, or project collaboration:

- Create issues using templates in `docs/issues/`
- Follow documentation in `docs/README.md`
- Use progress tracking system for updates

---

**Last Updated**: August 2025  
**Next Milestone**: Phase 2 - Product & Content Management  
**Development Environment**: Ready for local development

#   m e s t - t e c h n o l o g i e s 
 
 
