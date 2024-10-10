"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { ProductDatas } from "@/app/utils/ProductData";

const truncateTitle = (title: string, maxLength: number) => {
  if (title.length <= maxLength) return title;
  return title.slice(0, maxLength) + "...";
};

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-4 h-4 ${filled ? "text-yellow-300" : "text-gray-300"}`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 20"
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  </svg>
);

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((value) => (
        <StarIcon key={value} filled={value <= Math.round(rating)} />
      ))}
    </div>
  );
};

export default function ProductCard() {
  const router = useRouter();

  const handleProductClick = (productId: number) => {
    router.push(`/products/${productId}`);
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-6 pb-4" style={{ minWidth: "max-content" }}>
        {ProductDatas.map((product) => (
          <div
            key={product.id}
            className="w-[200px] flex-shrink-0 bg-white hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="h-[200px] flex items-center justify-center ">
              <Image
                src={product.image}
                alt={product.title}
                width={180}
                height={180}
                className="object-contain max-h-[180px] w-auto"
              />
            </div>
            <div className="p-4">
              <p
                className="text-sm font-medium h-10 overflow-hidden"
                title={product.title}
              >
                {truncateTitle(product.title, 40)}
              </p>
              <p className="font-bold mt-2">${product.price.toFixed(2)}</p>
              <div className="flex items-center mt-2">
                <RatingStars rating={product.rating.rate} />
                <span className="ml-1 text-xs text-gray-500">
                  ({product.rating.count})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
