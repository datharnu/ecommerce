"use client";
import React, { useRef, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { StaticImageData } from "next/image";
import ProductCard from "./productCard";

interface ProductListProps {
  products: {
    id: number;
    title: string;
    price: number;
    rating: { rate: number; count: number };
    image: string | StaticImageData;
  }[];
}

const ProductList = ({ products }: ProductListProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };
  return (
    <div className="relative w-full">
      <div
        className="w-full overflow-x-auto scrollbar-hide"
        ref={scrollContainerRef}
        onScroll={checkScrollability}
      >
        <div className="flex gap-6 pb-4" style={{ minWidth: "max-content" }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <button
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md ${
          canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300`}
        onClick={() => scroll("left")}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md ${
          canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300`}
        onClick={() => scroll("right")}
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ProductList;
