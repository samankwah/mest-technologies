import React from "react";
import { Breadcrumb, SEO } from "../components";
import { Link } from "react-router-dom";
import { pageMetadata } from "../utils/pageMetadata";

const Equipment = () => {
  const equipmentCategories = [
    {
      id: 1,
      title: "Weather Monitoring Equipment",
      description: "Professional weather stations and climate monitoring systems for precise environmental data collection.",
      items: [
        "Automatic Weather Stations",
        "Temperature & Humidity Sensors",
        "Rain Gauges & Wind Meters",
        "Solar Radiation Monitors",
        "Data Loggers & Wireless Systems"
      ],
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: "🌤️"
    },
    {
      id: 2,
      title: "Soil & Water Analysis",
      description: "Comprehensive testing equipment for soil composition, water quality, and environmental monitoring.",
      items: [
        "Soil pH & EC Meters",
        "Water Quality Test Kits",
        "Nutrient Analysis Systems",
        "Moisture Sensors",
        "Sampling Equipment"
      ],
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: "🌊"
    },
    {
      id: 3,
      title: "Plant Health Monitoring",
      description: "Advanced diagnostic tools for plant disease detection and crop health assessment.",
      items: [
        "Disease Detection Sensors",
        "Growth Monitoring Systems",
        "NDVI Cameras",
        "Leaf Wetness Sensors",
        "Chlorophyll Meters"
      ],
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: "🔬"
    },
    {
      id: 4,
      title: "Nutrient Management Systems",
      description: "Precision tools for optimal fertilizer application and nutrient monitoring.",
      items: [
        "Precision Applicators",
        "Nutrient Testing Kits",
        "Fertilizer Calculators",
        "Injection Systems",
        "Variable Rate Controllers"
      ],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: "🌱"
    },
    {
      id: 5,
      title: "Laboratory Equipment",
      description: "Professional-grade laboratory instruments for research and analysis.",
      items: [
        "Microscopes & Magnifiers",
        "Spectrophotometers",
        "Analytical Balances",
        "Incubators & Chambers",
        "Sample Preparation Tools"
      ],
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: "🧪"
    },
    {
      id: 6,
      title: "Consumables & Supplies",
      description: "Essential consumables, test kits, and replacement parts for ongoing operations.",
      items: [
        "Test Reagents & Kits",
        "Calibration Solutions",
        "Replacement Sensors",
        "Sampling Containers",
        "Maintenance Supplies"
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: "📦"
    }
  ];

  const stats = [
    { value: "500+", label: "Equipment Models" },
    { value: "50+", label: "Partner Brands" },
    { value: "24/7", label: "Technical Support" },
    { value: "98%", label: "Customer Satisfaction" }
  ];


  const EquipmentGrid = () => (
    <section className="py-20">
      <div className="container mx-auto px-5 xl:px-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Equipment Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional equipment solutions for every aspect of modern agriculture and environmental monitoring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-3xl">{category.icon}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 text-sm uppercase tracking-wide">
                    Key Products:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {category.items.slice(0, 3).map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                    {category.items.length > 3 && (
                      <li className="text-primary font-medium">
                        +{category.items.length - 3} more items
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const StatsSection = () => (
    <section
      className="py-20 relative bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
      }}
    >
      <div className="container mx-auto px-5 xl:px-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted Equipment Partner
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Leading supplier of professional monitoring and analysis equipment across Ghana
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:bg-white transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const PartnersCarousel = () => {
    const partners = [
      {
        name: "Davis Instruments",
        logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80"
      },
      {
        name: "Campbell Scientific",
        logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80"
      },
      {
        name: "Hach Water Analysis",
        logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80"
      },
      {
        name: "Thermo Fisher",
        logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80"
      },
      {
        name: "Onset HOBO",
        logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80"
      },
      {
        name: "LI-COR Biosciences",
        logo: "https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80"
      },
      {
        name: "Spectrum Technologies",
        logo: "https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80"
      },
      {
        name: "YSI Water Quality",
        logo: "https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80"
      }
    ];

    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-5 xl:px-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Global Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted partnerships with leading manufacturers and technology providers worldwide
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll hover:pause-animation">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 min-w-[200px] h-[120px] flex items-center justify-center group"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 mx-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 min-w-[200px] h-[120px] flex items-center justify-center group"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              And many more industry-leading partners across agricultural monitoring, laboratory equipment, and environmental analysis
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }

          .hover\\:pause-animation:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    );
  };

  const ContactCTA = () => (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-5 xl:px-28 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Find the Right Equipment?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Our technical experts are ready to help you select the perfect equipment for your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Our Experts
          </Link>
          <Link
            to="/shop"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-block"
          >
            Browse Catalog
          </Link>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <SEO
        title={pageMetadata.equipment?.title || "Professional Equipment - MEST Technologies"}
        description={pageMetadata.equipment?.description || "Professional monitoring equipment for agriculture, research, and environmental analysis. Weather monitoring, soil analysis, laboratory equipment and more."}
      />
      <main>
        <Breadcrumb title="Equipment" />
        <EquipmentGrid />
        <StatsSection />
        <PartnersCarousel />
        <ContactCTA />
      </main>
    </>
  );
};

export default Equipment;