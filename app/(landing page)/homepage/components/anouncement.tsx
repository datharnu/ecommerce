"use client";
import React, { useState, useEffect } from "react";

const AnnouncementBanner = () => {
  const [visible, setVisible] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      const interval = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
          setAnimationKey((prev) => prev + 1);
          setVisible(true);
        }, 500);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isLargeScreen]);

  if (!visible && isLargeScreen) return null;

  return (
    <div className="bg-blue-600 text-white p-4 text-center text-xs lg:text-base relative overflow-hidden">
      {isLargeScreen ? (
        <span className="inline-block animate-slideIn " key={animationKey}>
          🎉 Special Offer! 20% off all items. Use code: SUMMER20 🛍️
        </span>
      ) : (
        <div className="whitespace-nowrap animate-scroll">
          <span className="inline-block px-4">
            🎉 Special Offer! 20% off all items. Use code: SUMMER20 🛍️
          </span>
          <span className="inline-block px-4">
            🎉 Special Offer! 20% off all items. Use code: SUMMER20 🛍️
          </span>
        </div>
      )}
    </div>
  );
};

export default AnnouncementBanner;
