import React from 'react';
import BasketImage from "../assets/basketChair.webp";

const Basket = () => {
  return (
    <section className="relative mx-auto max-w-7xl mt-20 mb-16 overflow-visible">
      {/* Gray container - much shorter height */}
      <div className="relative bg-gray-100 rounded-lg px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 overflow-visible">
        <div className="flex flex-col md:flex-row items-end justify-between">
          
          {/* Text Content Column */}
          <div className="w-full md:w-1/2 text-center md:text-left z-10 pb-4">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide leading-tight text-black">
                STYLISH MINIMAL CHAIR
              </h2>
              <div className="pt-2">
                <button className="font-medium uppercase tracking-widest py-1 border-b-2 border-black hover:opacity-70 transition-opacity text-sm">
                  VIEW NOW
                </button>
              </div>
            </div>
          </div>

          {/* Image positioned to overflow above container */}
          <div className="absolute top-0 right-8 transform -translate-y-16 lg:-translate-y-20">
            <img
              src={BasketImage}
              alt="Stylish woven minimal chair"
              className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Basket;