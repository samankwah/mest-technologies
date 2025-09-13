import React from "react";
import { Breadcrumb, SEO } from "../components";
import { Link } from "react-router-dom";
import { pageMetadata } from "../utils/pageMetadata";
import Blog1 from "../assets/Blog1.webp";
import Blog2 from "../assets/Blog2.webp";
import Blog3 from "../assets/Blog3.webp";

const News = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "Smart Soil Monitoring in Ghana",
      excerpt: "How precision agriculture is transforming crop yields across Ghana's farming regions.",
      image: Blog1,
      category: "Technology",
      date: "September 10, 2025"
    },
    {
      id: 2,
      title: "Weather Station Installation Guide",
      excerpt: "Step-by-step setup process for agricultural weather monitoring equipment.",
      image: Blog2,
      category: "Guide",
      date: "September 8, 2025"
    },
    {
      id: 3,
      title: "Successful Harvest with IoT Equipment",
      excerpt: "Case study of 30% yield improvement using modern agricultural monitoring systems.",
      image: Blog3,
      category: "Case Study",
      date: "September 5, 2025"
    }
  ];

  const resourceCategories = [
    {
      id: 1,
      title: "Installation Guides",
      description: "Equipment setup and calibration instructions",
      icon: "🔧",
      count: "12 guides"
    },
    {
      id: 2,
      title: "Research Reports",
      description: "Agricultural technology insights for Ghana",
      icon: "📊",
      count: "8 reports"
    },
    {
      id: 3,
      title: "Case Studies",
      description: "Real success stories from local farmers",
      icon: "🌾",
      count: "15 stories"
    },
    {
      id: 4,
      title: "Training Materials",
      description: "Educational content for equipment operation",
      icon: "📚",
      count: "20 resources"
    }
  ];

  const ResourcesHero = () => (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-5 xl:px-28">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Agricultural Resources & News
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Stay informed with the latest in agricultural technology, equipment guides, and success stories from Ghana's farming community.
          </p>
        </div>
      </div>
    </section>
  );

  const FeaturedArticles = () => (
    <section className="py-20">
      <div className="container mx-auto px-5 xl:px-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <article key={article.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );

  const ResourcesCategories = () => (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-5 xl:px-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resource Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access comprehensive resources to maximize your agricultural equipment investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resourceCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-3 leading-relaxed">
                {category.description}
              </p>
              <span className="text-primary font-medium text-sm">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const NewsletterCTA = () => (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-5 xl:px-28 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Get the latest agricultural technology news and equipment guides delivered to your inbox.
        </p>
        <div className="max-w-md mx-auto flex gap-3">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <SEO
        title={pageMetadata.news.title}
        description={pageMetadata.news.description}
      />
      <main>
        <Breadcrumb title="Resources" />
        <ResourcesHero />
        <FeaturedArticles />
        <ResourcesCategories />
        <NewsletterCTA />
      </main>
    </>
  );
};

export default News;
