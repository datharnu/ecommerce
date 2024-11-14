import React from "react";
import ProductList from "./productList";
import {
  MusicalDatas,
  ProductDatas,
  LimitedDatas,
} from "@/app/utils/ProductData";

export default function sellingItems() {
  return (
    <div className="mb-10 ">
      <div className="bg-white shadow-xl p-5 min-h-[45vh] rounded-[6px]">
        <h1 className="font-bold mb-2">Mixing Consoles</h1>

        <ProductList products={ProductDatas} />
      </div>

      <div className="bg-white shadow-xl p-5 min-h-[45vh] rounded-[6px] my-3">
        <h1 className="font-bold mb-2">Limited Stock Deals</h1>

        <ProductList products={LimitedDatas} />
      </div>

      <div className="bg-white shadow-xl p-5 min-h-[45vh] rounded-[6px] my-3">
        <h1 className="font-bold mb-2">Musical Gadgets</h1>

        <ProductList products={MusicalDatas} />
      </div>
    </div>
  );
}
