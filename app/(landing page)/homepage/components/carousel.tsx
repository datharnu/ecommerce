"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      3000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="flex  flex-col bg-bgImg bg-cover bg-center h-[70vh] lg:h-[100%] items-center py-8 px-4 md:flex-row md:gap-8 md:py-20 md:px-8">
      <div className="relative w-36 max-w-xs mb-8 md:mb-0 md:w-1/2 ">
        <div className="relative overflow-hidden rounded-full  aspect-square bg-white">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out flex items-center justify-center ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Carousel image ${index + 1}`}
                width={200}
                height={500}
                objectFit="contain"
                className="lg:w-[200px] w-20"
              />
            </div>
          ))}
        </div>
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full lg:w-6 lg:h-6 w-4 h-4 flex items-center justify-center text-2xl focus:outline-none"
        >
          &#8249;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full lg:w-6 lg:h-6 w-4 h-4 flex items-center justify-center text-2xl focus:outline-none"
        >
          &#8250;
        </button>
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                currentIndex === index ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="text-center md:text-left md:w-1/2 ">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Deal of the Week!</h2>
        </div>
        <p className="text-lg mb-2">
          Don&apos;t miss out on our amazing offer:
        </p>
        <p className="lg:text-4xl text-2xl font-extrabold mb-4 transition-all duration-300 ease-in-out">
          50% OFF
        </p>
        <button className="w-full max-w-xs mx-auto md:mx-0 bg-yellow-400 text-gray-800 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

// Example usage
export const CarouselDemo: React.FC = () => {
  const imageUrls: string[] = [
    "/ecommerce6.jpg",
    "/ecommerce7.webp",
    "/commerce3.jpg",
    "/commerce4.jpg",
  ];

  return <ImageCarousel images={imageUrls} />;
};

export default CarouselDemo;
