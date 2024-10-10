import React from "react";
import { Star, MapPin } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { ProductDatas } from "@/app/utils/ProductData";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  brand: string;
  image: StaticImageData;
  rating: {
    rate: number;
    count: number;
  };
}

async function getProduct(id: string): Promise<Product | undefined> {
  // In a real application, you'd fetch this data from an API
  // For now, we'll simulate this by finding the product in our static data
  return ProductDatas.find((product) => product.id === parseInt(id));
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="bg-slate-100 h-screen py-5 ">
      <div className="bg-white  max-w-7xl shadow-xl mx-auto  p-8 border-4 flex flex-col md:flex-row ">
        {/* Left column - Product Images */}
        <div className="md:w-1/3 pr-4">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="w-[300px] h-auto"
          />
          <div className="flex mt-5">
            {[1, 2, 3, 4].map((i) => (
              <Image
                key={i}
                src={product.image}
                alt={`Thumbnail ${i}`}
                width={80}
                height={80}
                className="w-10 h-10 mr-2 cursor-pointer"
              />
            ))}
          </div>
        </div>
        {/* Right column - Product Details */}
        <div className="md:w-1/2 mt-4 md:mt-0 border-4">
          <h1 className="text-lg font-semibold">{product.title}</h1>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400 flex">
              {[...Array(Math.floor(product.rating.rate))].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
              {product.rating.rate % 1 !== 0 && (
                <Star
                  size={16}
                  fill="currentColor"
                  className="fill-current text-gray-300"
                />
              )}
            </span>
            <span className="ml-2 text-sm text-blue-600">
              {product.rating.count} ratings |
              <span className="text-black"> Brand:</span> {product.brand}
            </span>
          </div>
          <hr className="my-2" />
          <div className="mt-4">
            <span className="text-xl font-bold">
              ${product.price.toFixed(2)}
            </span>
            <p className="text-sm text-gray-600">
              $214.70 Shipping & Import Fees Deposit to Nigeria
            </p>
          </div>
          <div className="mt-4">
            <h2 className="font-semibold">About this item</h2>
            <p className="mt-2">{product.description}</p>
          </div>
          <div className="mt-4">
            <button className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500">
              Add to Cart
            </button>
            <button className="w-full bg-orange-400 text-black py-2 rounded mt-2 hover:bg-orange-500">
              Buy Now
            </button>
          </div>
          <div className="mt-4 flex items-center">
            <MapPin size={16} />
            <span className="ml-2">Deliver to Nigeria</span>
          </div>
          <div className="mt-4">
            <p className="text-red-600 font-semibold">
              Only 2 left in stock - order soon.
            </p>
          </div>

          <div className="">
            <p className="uppercase my-3 text-sm ">Promotions</p>
            <div className="text-sm">
              <li>Call +17006000000 To Place Your Order</li>
              <li>
                Need extra money? Loan up to N500,000 on the JumiaPay Android
                app.
              </li>
              <li>
                Enjoy cheaper shipping fees when you select a PickUp Station at
                checkout.
              </li>
            </div>
          </div>
        </div>
      </div>
      {/* Delivery column */}
      {/* <div className="bg-white w-20 h-screen "></div> */}
    </div>
  );
}
