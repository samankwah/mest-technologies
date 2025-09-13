import React from "react";
import { Breadcrumb, SEO } from "../components";
import { Link } from "react-router-dom";
import { pageMetadata } from "../utils/pageMetadata";

const Features = () => {
  const coreFeatures = [
    {
      id: 1,
      title: "Weather Monitoring",
      description: "Real-time climate data and forecasting for optimal farming decisions.",
      icon: "🌤️",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Soil Analysis",
      description: "Comprehensive soil testing for pH, nutrients, and health optimization.",
      icon: "🌱",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Plant Health Monitoring",
      description: "AI-powered disease detection and crop health assessment systems.",
      icon: "🔬",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Technical Support",
      description: "Local Ghana support team with agricultural expertise and training.",
      icon: "📞",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const stats = [
    { value: "500+", label: "Equipment Deployed" },
    { value: "98%", label: "Uptime Reliability" },
    { value: "24/7", label: "Support Available" }
  ];


  const CoreFeatures = () => (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-5 xl:px-28">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Agricultural Equipment Solutions
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Professional monitoring technology for Ghana's farming community
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {coreFeatures.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white rounded-xl border border-gray-200 p-6 text-center transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:scale-105"
            >
              <div className="mb-4 relative">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-16 h-16 object-cover rounded-xl mx-auto shadow-lg"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );


  const SimpleStats = () => (
    <section 
      className="py-16 relative bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
      }}
    >
      <div className="container mx-auto px-5 xl:px-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by Ghana's Agricultural Community
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const SimpleCTA = () => (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-5 xl:px-28 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover our agricultural equipment solutions for Ghana's farming community.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
        >
          Browse Equipment
        </Link>
      </div>
    </section>
  );

  return (
    <>
      <SEO
        title={pageMetadata.features.title}
        description={pageMetadata.features.description}
      />
      <main>
        <Breadcrumb title="Features" />
        <CoreFeatures />
        <SimpleStats />
        <SimpleCTA />
      </main>
    </>
  );
};

export default Features;
