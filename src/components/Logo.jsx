import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ className }) => {
  return (
    <Link to="/">
      <h1
        className={`relative flex  pr-3 font-extrabold tracking-widest  text-black md:text-3xl ${className} `}
      >
        Mest Technologies
        <span className="absolute bottom-2 right-[5px] h-[6px] w-[6px] bg-primary "></span>
      </h1>
    </Link>
  );
};

export default Logo;
