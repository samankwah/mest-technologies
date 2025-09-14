import React from "react";
import { Breadcrumb, SEO } from "../components";
import { Link } from "react-router-dom";
import { pageMetadata } from "../utils/pageMetadata";

const Features = () => {
  const technologyFeatures = [
    {
      id: 1,
      title: "AI-Powered Analytics",
      description: "Machine learning algorithms for predictive farming and intelligent data analysis.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      details: ["Predictive crop modeling", "Disease outbreak prediction", "Yield optimization algorithms", "Automated pattern recognition"]
    },
    {
      id: 2,
      title: "IoT Connectivity",
      description: "Seamless real-time data streaming and remote monitoring capabilities.",
      icon: "🌐",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      details: ["Wireless sensor networks", "Real-time data transmission", "Edge computing integration", "5G connectivity support"]
    },
    {
      id: 3,
      title: "Cloud Data Platform",
      description: "Centralized data management with advanced analytics and reporting tools.",
      icon: "☁️",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      details: ["Secure data storage", "Advanced visualization", "Custom reporting", "Multi-site management"]
    },
    {
      id: 4,
      title: "Mobile Applications",
      description: "Field data collection and monitoring through intuitive mobile interfaces.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      details: ["iOS and Android apps", "Offline data collection", "GPS mapping integration", "Photo documentation"]
    },
    {
      id: 5,
      title: "Automated Alerts",
      description: "Smart notification systems for critical conditions and maintenance needs.",
      icon: "🔔",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      details: ["SMS and email alerts", "Customizable thresholds", "Escalation protocols", "Maintenance reminders"]
    },
    {
      id: 6,
      title: "Data Integration",
      description: "Seamless integration with existing farm management and ERP systems.",
      icon: "🔗",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      details: ["API integrations", "Data export formats", "Third-party compatibility", "Custom integrations"]
    }
  ];

  const advancedCapabilities = [
    {
      title: "Precision Agriculture",
      description: "GPS-guided monitoring and precision application systems",
      icon: "🎯",
      stats: "±2cm accuracy"
    },
    {
      title: "Satellite Integration",
      description: "Remote sensing and high-resolution imagery analysis",
      icon: "🛰️",
      stats: "10m resolution"
    },
    {
      title: "Weather Forecasting",
      description: "Advanced climate prediction models and microclimate analysis",
      icon: "🌦️",
      stats: "7-day forecasts"
    },
    {
      title: "Research Collaboration",
      description: "Partnerships with universities and agricultural research institutions",
      icon: "🎓",
      stats: "15+ partners"
    }
  ];

  const innovationShowcase = [
    {
      title: "Smart Irrigation Project",
      description: "AI-driven irrigation system reducing water usage by 40% while increasing yields by 25%.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "Live Deployment",
      impact: "40% water savings"
    },
    {
      title: "Disease Detection AI",
      description: "Computer vision system for early crop disease detection with 95% accuracy.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "Beta Testing",
      impact: "95% accuracy"
    },
    {
      title: "Climate Prediction Model",
      description: "Hyperlocal weather forecasting system for Ghana's diverse agricultural zones.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "R&D Phase",
      impact: "2km precision"
    }
  ];


  const TechnologyGrid = () => (
    <section className="py-20">
      <div className="container mx-auto px-5 xl:px-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Innovation Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced technology solutions that transform traditional farming into smart, data-driven agriculture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologyFeatures.map((feature) => (
            <div key={feature.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-4xl">{feature.icon}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 text-sm uppercase tracking-wide">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {feature.details.slice(0, 3).map((detail, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                    {feature.details.length > 3 && (
                      <li className="text-primary font-medium">
                        +{feature.details.length - 3} more features
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

  const AdvancedCapabilities = () => (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-5 xl:px-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technologies that set new standards in agricultural monitoring and analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advancedCapabilities.map((capability, index) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-6">{capability.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {capability.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {capability.description}
              </p>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                {capability.stats}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const InnovationShowcase = () => (
    <section className="py-20">
      <div className="container mx-auto px-5 xl:px-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Innovation Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Current projects and breakthrough innovations transforming agriculture in Ghana
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovationShowcase.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold text-lg">
                    {project.impact}
                  </span>
                  <Link
                    to="/contact"
                    className="text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ResearchPartnership = () => (
    <section
      className="py-20 relative bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
      }}
    >
      <div className="container mx-auto px-5 xl:px-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Research & Development
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Collaborating with leading universities and research institutions to pioneer the next generation of agricultural technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { value: "15+", label: "Research Partners" },
            { value: "$2M+", label: "R&D Investment" },
            { value: "50+", label: "Active Projects" }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
          >
            Join Our Research Network
          </Link>
        </div>
      </div>
    </section>
  );


  return (
    <>
      <SEO
        title={pageMetadata.features?.title || "Technology & Innovation - MEST Technologies"}
        description={pageMetadata.features?.description || "Pioneering agricultural technology through AI-powered analytics, IoT connectivity, and innovative solutions for modern farming in Ghana."}
      />
      <main>
        <Breadcrumb title="Technology & Innovation" />
        <TechnologyGrid />
        <AdvancedCapabilities />
        <InnovationShowcase />
        <ResearchPartnership />
      </main>
    </>
  );
};

export default Features;