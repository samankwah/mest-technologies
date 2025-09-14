import React from "react";
import { Link } from "react-router-dom";
import Blog_01 from "../assets/Blog1.webp";
import Blog_02 from "../assets/Blog2.webp";
import Blog_03 from "../assets/Blog3.webp";
import { BsTelephone, BsBuilding, BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import {
  AiOutlineInstagram,
} from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { FiMail } from "react-icons/fi";

const blog_data = [
  {
    id: 1,
    title: "Precision Agriculture with Smart Sensors",
    date: "October 20, 2024",
    image: Blog_01,
  },
  {
    id: 2,
    title: "Weather Monitoring for Better Crop Yields",
    date: "November 03, 2024",
    image: Blog_02,
  },
  {
    id: 3,
    title: "Soil Health Management Techniques",
    date: "December 15, 2024",
    image: Blog_03,
  },
];

const Footer = () => {
  return (
    <>
      <footer className="container mx-auto mt-28 grid grid-cols-1 space-y-10 bg-primary px-5 py-8 tracking-wider text-white md:mt-28 md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-4 lg:gap-6 xl:px-28 xl:py-20">
        {/* Mest Technologies */}
        <section className="space-y-4 md:col-span-2 lg:col-span-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider">
            Mest Technologies
          </h1>
          <p className="w-full md:w-3/4 lg:w-2/3 text-sm font-light leading-relaxed">
            Advanced agricultural monitoring equipment for weather, soil, water,
            plant health, and laboratory applications across Ghana.
          </p>
        </section>

        {/* Contact us */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="uppercase ">Contact us</h2>
            <div className="w-1/6 border-t"></div>
          </div>
          <div className="space-y-4 text-sm font-light">
            <p className="flex items-center space-x-1">
              <span>
                {" "}
                <BsTelephone />{" "}
              </span>
              <span> (+233) 24 123 4567</span>
            </p>
            <p className="flex items-center space-x-1">
              <span>
                {" "}
                <FiMail />{" "}
              </span>
              <span> info@mest-technologies.gh</span>
            </p>
            <p className="flex items-center space-x-1">
              <span>
                {" "}
                <BsBuilding />{" "}
              </span>
              <span>East Legon, Accra, Ghana</span>
            </p>
            <div className="flex space-x-6 pt-2">
              <a
                href="https://facebook.com/mesttechnologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-white/80 transition-colors"
              >
                <BsFacebook className="h-6 w-6 md:h-5 md:w-5" />
              </a>
              <a
                href="https://twitter.com/mesttechnologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter X"
                className="hover:text-white/80 transition-colors"
              >
                <RiTwitterXLine className="h-6 w-6 md:h-5 md:w-5" />
              </a>
              <a
                href="https://linkedin.com/company/mesttechnologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white/80 transition-colors"
              >
                <BsLinkedin className="h-6 w-6 md:h-5 md:w-5" />
              </a>
              <a
                href="https://instagram.com/mesttechnologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-white/80 transition-colors"
              >
                <AiOutlineInstagram className="h-6 w-6 md:h-5 md:w-5" />
              </a>
              <a
                href="https://youtube.com/mesttechnologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-white/80 transition-colors"
              >
                <BsYoutube className="h-6 w-6 md:h-5 md:w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Useful links */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="uppercase ">Userful links</h2>
            <div className="w-1/6 border-t"></div>
          </div>
          <div className="flex flex-col space-y-4 text-sm font-light">
            <a href="#" className="hover:text-white/80">
              About Mest Technologies Limited
            </a>
            <Link to="/contact" className="hover:text-white/80">
              Contact us
            </Link>
            <a href="#" className="hover:text-white/80">
              FAQ
            </a>
            <a href="#" className="hover:text-white/80">
              Supports
            </a>
            <a href="#" className="hover:text-white/80">
              Blog
            </a>
            <a href="#" className="hover:text-white/80">
              Privacy Policy
            </a>
          </div>
        </section>

        {/* Latest section */}
        <section className="space-y-6 md:col-span-2 lg:col-span-1">
          <div className="space-y-1">
            <h2 className="uppercase">Latest news</h2>
            <div className="w-1/6 border-t"></div>
          </div>
          <div className="flex flex-col space-y-4 font-light">
            {blog_data.map((item) => {
              const { id, title, image, date } = item;
              return (
                <article
                  key={id}
                  className="flex items-start space-x-3 group"
                >
                  <img
                    width={300}
                    height={200}
                    src={image}
                    alt={title}
                    className="h-12 w-16 md:h-14 md:w-20 object-cover object-center rounded flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <a href="#" className="text-sm hover:text-white/80 transition-colors line-clamp-2 block">
                      {title}
                    </a>
                    <p className="text-xs text-gray-200 mt-1">{date}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
