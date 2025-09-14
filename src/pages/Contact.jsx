import React, { useState } from "react";
import { Breadcrumb, SEO } from "../components";
import { pageMetadata } from "../utils/pageMetadata";
import {
  BsCheckCircle,
  BsExclamationCircle,
  BsTelephone,
  BsBuilding,
  BsSend,
} from "react-icons/bs";
import { FiMail, FiUser, FiPhone, FiMessageSquare } from "react-icons/fi";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
      <SEO
        title="Contact Us - MEST Technologies"
        description="Get in touch with MEST Technologies for agricultural equipment support, technical assistance, and inquiries about our monitoring solutions in Ghana."
      />

      <main className="min-h-screen">
        <Breadcrumb title="Contact Us" />

        {/* Google Maps Section */}
        <section className="py-16">
          <div className="container mx-auto px-5 xl:px-28">
            <h2 className="mb-6 text-3xl font-bold text-gray-800 text-center">
              Our Location
            </h2>
            <div className="aspect-[21/9] w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126846.33913709324!2d-0.2418228!3d5.614818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1694701234567!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MEST Technologies Location - Accra, Ghana"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-5 xl:px-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

              {/* Left Column - Get In Touch */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Get In Touch</h2>

                {/* Address */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BsBuilding className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      No. 2, 2nd Nii Kokonya Road, East Legon, Accra - Ghana
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BsTelephone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone Number</h3>
                    <p className="text-gray-600 text-sm">+233 247 429 359</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 mb-8">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FiMail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">E-Mail</h3>
                    <p className="text-gray-600 text-sm">info@africon.ai</p>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">Follow Us:</h3>
                  <div className="flex space-x-3">
                    <a
                      href="https://www.facebook.com/mesttechnologies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                      aria-label="Facebook"
                    >
                      <AiOutlineFacebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://twitter.com/mesttechnologies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                      aria-label="Twitter X"
                    >
                      <RiTwitterXLine className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/mest-technologies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <AiOutlineLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/mesttechnologies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                      aria-label="Instagram"
                    >
                      <AiOutlineInstagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Send a Message Form */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Send a Message</h2>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="mb-6 flex items-center rounded-lg border border-green-200 bg-green-50 p-4">
                    <BsCheckCircle className="mr-3 h-5 w-5 text-green-600" />
                    <p className="text-green-800">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 flex items-center rounded-lg border border-red-200 bg-red-50 p-4">
                    <BsExclamationCircle className="mr-3 h-5 w-5 text-red-600" />
                    <p className="text-red-800">
                      Sorry, there was an error sending your message. Please try again.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First Name and Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                        FIRST NAME
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                          errors.firstName ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter first name"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                        LAST NAME
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                          errors.lastName ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter last name"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                      COMPANY
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                      MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-vertical ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Tell us about your AI needs"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
                    {!isSubmitting && <BsSend className="w-4 h-4" />}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
