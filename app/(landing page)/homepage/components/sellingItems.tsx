import React from "react";
import ProductCard from "./productCard";

export default function sellingItems() {
  return (
    <div className="py-16 ">
      <div className="bg-white shadow-xl p-5 min-h-[45vh] rounded-[6px]">
        <h1 className="font-bold">Limited Stock Deals</h1>

        <ProductCard />
      </div>
    </div>
  );
}
