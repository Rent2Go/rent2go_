import React, { useState, useEffect } from "react";
import { SlArrowUp } from "react-icons/sl";
import "./scrollToTop.css";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollY > 100); 
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <button
      title="Scroll to Top"
      className={`scroll-to-top-btn ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <SlArrowUp />
    </button>
  );
};

export default ScrollToTop;
