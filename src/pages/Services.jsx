import React from "react";
import { Breadcrumb, SEO } from "../components";
import { Link } from "react-router-dom";
import { pageMetadata } from "../utils/pageMetadata";

const Services = () => {
  const coreServices = [
    {
      id: 1,
      title: "Equipment Installation",
      description:
        "Professional setup and calibration of agricultural monitoring equipment.",
      icon: "🔧",
      image:
        "https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      title: "Technical Training",
      description:
        "Equipment operation training for farmers and agricultural professionals.",
      icon: "📚",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      title: "Maintenance Support",
      description:
        "Ongoing technical support and repair services for optimal performance.",
      icon: "🛠️",
      image:
        "https://images.unsplash.com/photo-1581092786450-7ee84e3a89a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      title: "Customer Support",
      description:
        "Local Ghana support team with 24/7 assistance and troubleshooting.",
      icon: "📞",
      image:
        "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      title: "Technical Consulting",
      description:
        "Expert agricultural technology consulting and strategic planning services.",
      icon: "💡",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      title: "Custom Solutions",
      description:
        "Tailored monitoring systems designed for specific agricultural requirements.",
      icon: "⚙️",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 7,
      title: "Data Analytics",
      description:
        "Advanced agricultural data analysis and reporting for informed decision-making.",
      icon: "📊",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 8,
      title: "Equipment Calibration",
      description:
        "Precision calibration services ensuring accurate measurements and performance.",
      icon: "⚖️",
      image:
        "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 9,
      title: "Field Testing",
      description:
        "On-site equipment testing and validation in real agricultural environments.",
      icon: "🔬",
      image:
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 10,
      title: "Warranty & Repairs",
      description:
        "Comprehensive warranty coverage and professional repair services.",
      icon: "🛡️",
      image:
        "https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const ServiceProcessFlow = () => {
    const processSteps = [
      {
        id: 1,
        title: "Initial Consultation",
        description:
          "We assess your specific agricultural needs and current setup",
        icon: "📞",
        duration: "1-2 Days",
      },
      {
        id: 2,
        title: "Site Assessment",
        description:
          "On-site evaluation of your farm and technical requirements",
        icon: "🔍",
        duration: "2-3 Days",
      },
      {
        id: 3,
        title: "Custom Planning",
        description: "Design tailored monitoring solutions for your operation",
        icon: "📋",
        duration: "3-5 Days",
      },
      {
        id: 4,
        title: "Implementation",
        description: "Professional installation and system configuration",
        icon: "🔧",
        duration: "5-10 Days",
      },
      {
        id: 5,
        title: "Training & Support",
        description: "Comprehensive training and ongoing technical support",
        icon: "🎓",
        duration: "Ongoing",
      },
    ];

    return (
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-5 xl:px-28">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Service Process
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              From consultation to ongoing support, our structured approach
              ensures successful implementation
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 hidden h-0.5 -translate-y-1/2 transform bg-gray-300 lg:block"></div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
              {processSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  <div className="group relative z-10 rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <div className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {step.id}
                    </div>
                    <h3 className="mb-2 font-semibold text-gray-900 transition-colors group-hover:text-primary">
                      {step.title}
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {step.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  const CoreServicesGrid = () => (
    <section className="py-20">
      <div className="container mx-auto px-5 xl:px-28">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Comprehensive agricultural technology services designed for Ghana's
            farming community
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {coreServices.map((service) => (
            <div
              key={service.id}
              className="group rounded-xl border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
            >
              <div className="relative mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="mx-auto h-16 w-16 rounded-xl object-cover shadow-lg"
                />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 transition-colors group-hover:text-primary">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const TestimonialsSection = () => {
    const testimonials = [
      {
        id: 1,
        name: "Akosua Mensah",
        role: "Farm Owner",
        location: "Kumasi Region",
        content:
          "MEST Technologies transformed our farm operations. The weather monitoring system helped us increase yield by 35% in just one season.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      },
      {
        id: 2,
        name: "Dr. Emmanuel Asante",
        role: "Agricultural Researcher",
        location: "University of Ghana",
        content:
          "Their data analytics service provided insights we never had before. The technical support team is exceptional and always available.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      },
      {
        id: 3,
        name: "Kwame Osei",
        role: "Agribusiness Manager",
        location: "Eastern Region",
        content:
          "The custom solution they designed for our cocoa plantation exceeded expectations. Professional installation and training were excellent.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      },
    ];

    const caseStudies = [
      {
        id: 1,
        title: "35% Yield Increase",
        farm: "Mensah Family Farm",
        description: "Weather monitoring and soil analysis implementation",
        beforeValue: "2.5 tons/hectare",
        afterValue: "3.4 tons/hectare",
        timeframe: "6 months",
        image:
          "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 2,
        title: "Water Usage Optimization",
        farm: "Green Valley Agriculture",
        description: "Smart irrigation and moisture monitoring system",
        beforeValue: "40% water waste",
        afterValue: "5% water waste",
        timeframe: "4 months",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
    ];

    return (
      <section className="py-20">
        <div className="container mx-auto px-5 xl:px-28">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Success Stories
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Real results from Ghanaian farmers and agricultural professionals
              using our services
            </p>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
              Client Testimonials
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="mb-4 flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="mr-4 h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-primary">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <div className="mb-3 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="italic text-gray-700">
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div>
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
              Case Studies
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-xl font-bold">{study.title}</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 font-semibold text-gray-900">
                      {study.farm}
                    </h5>
                    <p className="mb-4 text-gray-600">{study.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="rounded-lg bg-red-50 p-3">
                        <span className="font-medium text-red-600">
                          Before:
                        </span>
                        <p className="text-gray-700">{study.beforeValue}</p>
                      </div>
                      <div className="rounded-lg bg-green-50 p-3">
                        <span className="font-medium text-green-600">
                          After:
                        </span>
                        <p className="text-gray-700">{study.afterValue}</p>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        Timeframe: {study.timeframe}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  const AboutCEO = () => (
    <section className="py-12 sm:py-16 lg:py-16">
      <div className="container mx-auto px-4 sm:px-5 xl:px-28">
        <div className="overflow-hidden rounded-xl bg-white shadow-lg sm:rounded-2xl sm:shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dr. Kwame Nkrumah Mensah - CEO"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>

            <div className="flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-10">
              <h2 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl lg:text-3xl sm:mb-4">
                Message from Our CEO
              </h2>

              <div className="mb-4 sm:mb-6">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 sm:text-xl lg:text-xl sm:mb-2">
                  Dr. Kwame Nkrumah Mensah
                </h3>
                <p className="mb-3 text-sm font-medium text-primary sm:text-base sm:mb-4">
                  Chief Executive Officer & Founder
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base sm:mb-6">
                  "At MEST Technologies, we believe that every Ghanaian farmer
                  deserves access to modern agricultural technology. Our mission
                  goes beyond just selling equipment – we're building
                  partnerships that transform lives and communities."
                </p>
              </div>

              <blockquote className="rounded-r-lg border-l-4 border-primary bg-gray-50 p-3 sm:p-4 lg:p-5">
                <p className="mb-2 text-sm italic text-gray-700 sm:text-base sm:mb-4">
                  "Technology should serve humanity, not the other way around.
                  That's why every solution we provide is designed with the
                  Ghanaian farmer in mind."
                </p>
                <cite className="text-sm font-semibold text-primary sm:text-base">
                  Dr. Kwame Nkrumah Mensah
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ServicePricingTiers = () => {
    const pricingPlans = [
      {
        id: 1,
        name: "Basic Support",
        price: "GHC 500",
        period: "/month",
        description: "Essential support for small-scale farms",
        features: [
          "Equipment installation",
          "Basic training (2 hours)",
          "Email support",
          "Quarterly maintenance check",
          "Standard warranty coverage",
        ],
        popular: false,
        buttonText: "Get Started",
      },
      {
        id: 2,
        name: "Professional",
        price: "GHC 1,200",
        period: "/month",
        description: "Complete solution for commercial farms",
        features: [
          "Professional installation & setup",
          "Comprehensive training (8 hours)",
          "Priority phone & email support",
          "Monthly maintenance visits",
          "Data analytics dashboard",
          "Custom reporting",
          "Extended warranty",
        ],
        popular: true,
        buttonText: "Most Popular",
      },
      {
        id: 3,
        name: "Enterprise",
        price: "Custom",
        period: "pricing",
        description: "Tailored solutions for large operations",
        features: [
          "Custom system design",
          "On-site technical team",
          "24/7 dedicated support",
          "Weekly performance reviews",
          "Advanced analytics & AI insights",
          "Integration with existing systems",
          "Full warranty & insurance coverage",
          "Training programs for staff",
        ],
        popular: false,
        buttonText: "Contact Sales",
      },
    ];

    return (
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-5 xl:px-28">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Service Packages
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Choose the right service level for your agricultural operation
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border-2 bg-white p-4 md:p-6 lg:p-8 transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? "border-primary shadow-xl lg:scale-105"
                    : "border-gray-200 hover:border-primary/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                    <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white sm:px-6 sm:py-2 sm:text-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6 lg:mb-8 text-center">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl lg:text-2xl">
                    {plan.name}
                  </h3>
                  <p className="mb-3 text-sm text-gray-600 sm:text-base lg:mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-sm text-gray-500 sm:text-base">{plan.period}</span>
                  </div>
                </div>

                <ul className="mb-6 lg:mb-8 space-y-3 lg:space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-0.5 text-primary sm:mr-3 sm:mt-1">✓</span>
                      <span className="text-sm text-gray-700 sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full rounded-lg py-3 text-center text-sm font-semibold transition-colors sm:py-4 sm:text-base ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-gray-600">
              Need a custom solution? Our experts are ready to help.
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>
    );
  };

  const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = React.useState(null);

    const faqs = [
      {
        id: 1,
        question: "What areas of Ghana do you provide services?",
        answer:
          "We provide services across all 10 regions of Ghana with varying coverage levels. Our main office is in Greater Accra with regional branches in major cities. Contact us to check specific coverage in your area.",
      },
      {
        id: 2,
        question: "How long does equipment installation typically take?",
        answer:
          "Installation time varies by equipment type and complexity. Basic installations take 1-2 days, while comprehensive monitoring systems may require 5-10 days. We provide detailed timelines during consultation.",
      },
      {
        id: 3,
        question: "Do you offer training for equipment operation?",
        answer:
          "Yes, comprehensive training is included with all service packages. Training ranges from 2 hours for basic packages to 8+ hours for professional installations, with ongoing support available.",
      },
      {
        id: 4,
        question: "What warranty coverage do you provide?",
        answer:
          "All equipment comes with standard manufacturer warranty plus our service warranty. Professional and Enterprise packages include extended coverage and priority repair services.",
      },
      {
        id: 5,
        question: "Can you customize solutions for large farms?",
        answer:
          "Absolutely. Our Enterprise package specializes in custom system design for large operations. We assess your specific needs and design tailored monitoring solutions.",
      },
      {
        id: 6,
        question: "What kind of ongoing support do you provide?",
        answer:
          "Support varies by service package: Basic includes email support and quarterly checks, Professional includes priority phone support and monthly visits, Enterprise includes 24/7 dedicated support.",
      },
      {
        id: 7,
        question: "How do you handle equipment repairs and maintenance?",
        answer:
          "We provide scheduled maintenance visits and emergency repair services. Our field technicians are equipped to handle most repairs on-site, with replacement units available for critical equipment.",
      },
      {
        id: 8,
        question: "Do you provide data analysis and reporting services?",
        answer:
          "Yes, Professional and Enterprise packages include data analytics dashboards and custom reporting. We help you interpret data to make informed agricultural decisions.",
      },
    ];

    const toggleFAQ = (id) => {
      setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-5 xl:px-28">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Common questions about our services and support
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="rounded-xl border border-gray-200 bg-white shadow-sm"
                >
                  <button
                    className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <h3 className="pr-4 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <span
                      className={`text-xl text-primary transition-transform duration-200 ${
                        openFAQ === faq.id ? "rotate-180" : ""
                      }`}
                    >
                      ⌄
                    </span>
                  </button>
                  {openFAQ === faq.id && (
                    <div className="px-6 pb-6">
                      <p className="leading-relaxed text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-gray-600">
              Don't see your question? We're here to help!
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Contact Our Support Team
            </Link>
          </div>
        </div>
      </section>
    );
  };

  const ContactCTA = () => (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-5 text-center xl:px-28">
        <h2 className="mb-6 text-3xl font-bold text-white">
          Ready to Transform Your Farm?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
          Join hundreds of Ghanaian farmers who trust MEST Technologies for
          their agricultural monitoring needs.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-primary transition-colors hover:bg-gray-100"
          >
            Get Free Consultation
          </Link>
          <Link
            to="/equipment"
            className="inline-block rounded-lg border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
          >
            Browse Equipment
          </Link>
        </div>
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
        <CoreServicesGrid />
        <ServiceProcessFlow />
        <TestimonialsSection />
        <ServicePricingTiers />
        <AboutCEO />
        <FAQSection />
        <ContactCTA />
      </main>
    </>
  );
};

export default Services;
