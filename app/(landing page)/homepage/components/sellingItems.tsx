import React from "react";
import ProductCard from "./productCard";

export default function sellingItems() {
  return (
    <div className="mb-10 ">
      <div className="bg-white shadow-xl p-5 min-h-[45vh] rounded-[6px]">
        <h1 className="font-bold mb-2">Limited Stock Deals</h1>

        <ProductCard />
      </div>
      <div className="bg-white shadow-xl p-5 min-h-[45vh] rounded-[6px] my-3">
        <h1 className="font-bold mb-2">Limited Stock Deals</h1>

        <ProductCard />
      </div>
      <div className="bg-white shadow-xl p-5 min-h-[45vh] rounded-[6px] my-3">
        <h1 className="font-bold mb-2">Limited Stock Deals</h1>

        <ProductCard />
      </div>
    </div>
  );
}
