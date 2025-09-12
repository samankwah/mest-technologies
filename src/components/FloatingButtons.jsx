import React, { useState, useEffect } from "react";
import { BsArrowUp, BsWhatsapp } from "react-icons/bs";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button when user scrolls down 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // WhatsApp contact function
  const openWhatsApp = () => {
    const phoneNumber = "+233241234567"; // Ghana business number
    const message = encodeURIComponent("Hello! I'm interested in MEST Technologies agricultural equipment and would like more information.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 hover:scale-110 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <BsArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:ring-offset-2"
        aria-label="Contact us on WhatsApp"
      >
        <BsWhatsapp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default FloatingButtons;