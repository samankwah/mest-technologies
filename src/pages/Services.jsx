import React from "react";
import { Breadcrumb, SEO } from "../components";
import { Link } from "react-router-dom";
import { pageMetadata } from "../utils/pageMetadata";

const Services = () => {
  const coreServices = [
    {
      id: 1,
      title: "Equipment Installation",
      description: "Professional setup and calibration of agricultural monitoring equipment.",
      icon: "🔧",
      image: "https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Technical Training",
      description: "Equipment operation training for farmers and agricultural professionals.",
      icon: "📚",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Maintenance Support",
      description: "Ongoing technical support and repair services for optimal performance.",
      icon: "🛠️",
      image: "https://images.unsplash.com/photo-1581092786450-7ee84e3a89a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Customer Support",
      description: "Local Ghana support team with 24/7 assistance and troubleshooting.",
      icon: "📞",
      image: "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];


  const ServicesHero = () => (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-5 xl:px-28">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Agricultural Support Services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional installation, training, and support for Ghana's farming community.
          </p>
          <Link
            to="/shop"
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Browse Equipment
          </Link>
        </div>
      </div>
    </section>
  );

  const CoreServicesGrid = () => (
    <section className="py-20">
      <div className="container mx-auto px-5 xl:px-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreServices.map((service) => (
            <div key={service.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group text-center">
              <div className="mb-4 relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-16 h-16 object-cover rounded-xl mx-auto shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );


  const AboutCEO = () => (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-5 xl:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dr. Kwame Nkrumah Mensah - CEO"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our CEO
            </h2>
            
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Dr. Kwame Nkrumah Mensah
              </h3>
              <p className="text-primary font-medium mb-4">
                Chief Executive Officer & Founder
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Leading MEST Technologies with 15+ years experience in agricultural technology and Ghana's farming landscape.
              </p>
            </div>

            <blockquote className="bg-white p-6 border-l-4 border-primary rounded-r-lg">
              <p className="text-gray-700 italic mb-4">
                "Empowering every farmer in Ghana with the tools and knowledge they need to thrive in modern agriculture."
              </p>
              <cite className="text-primary font-semibold">Dr. Kwame Nkrumah Mensah</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );


  const ContactCTA = () => (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-5 xl:px-28 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Need Support?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Contact our Ghana support team for assistance with your agricultural equipment.
        </p>
        <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Contact Support
        </button>
      </div>
    </section>
  );

  return (
    <>
      <SEO
        title={pageMetadata.services.title}
        description={pageMetadata.services.description}
      />
      <main>
        <Breadcrumb title="Services" />
        <ServicesHero />
        <CoreServicesGrid />
        <AboutCEO />
        <ContactCTA />
      </main>
    </>
  );
};

export default Services;