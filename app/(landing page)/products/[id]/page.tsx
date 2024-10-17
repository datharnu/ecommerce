"use client";
import React, { useEffect, useState } from "react";
import { Star, MapPin, Info } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { ProductDatas } from "@/app/utils/ProductData";
import PaymentIcons from "./components/PaymentIcons";
import ProductCard from "../../homepage/components/productCard";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  brand: string;
  image: StaticImageData;
  additionalImages: StaticImageData[];
  rating: {
    rate: number;
    count: number;
  };
}

function getProduct(id: string): Product | undefined {
  return ProductDatas.find((product) => product.id === parseInt(id));
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [currentImage, setCurrentImage] = useState<StaticImageData | null>(
    null
  );

  useEffect(() => {
    const fetchedProduct = getProduct(params.id);
    setProduct(fetchedProduct);
    if (fetchedProduct) {
      setCurrentImage(fetchedProduct.image);
    }
  }, [params.id]);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="bg-slate-100   lg:py-10 ">
      <div className="bg-white  max-w-7xl shadow-xl mx-auto  px-4 py-10  flex flex-col md:flex-row ">
        {/* Left column - Product Images */}
        <div className="md:w-1/3 pr-4 mx-auto ">
          <div className="max-h-[400px]">
            <div className=" w-full max-w-[400px] h-[300px] lg:h-[400px] flex items-center justify-center mt-10  ">
              <Image
                src={currentImage || product.image}
                alt={product.title}
                width={400}
                height={400}
                className="w-full max-h-[400px] "
              />
            </div>
          </div>
          <div className="flex mt-5   ">
            {[product.image, ...product.additionalImages].map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className=" mr-2 cursor-pointer border-2  rounded-xl w-12 h-12"
                onClick={() => setCurrentImage(img)}
              />
            ))}
          </div>
        </div>
        {/* Right column - Product Details */}
        <div className="md:w-1/2 mt-4 md:mt-0">
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

          <div className="max-w-2xl mx-auto  bg-white  rounded-lg mt-5">
            <div className="mb-6 flex gap-14">
              <h2 className="text-sm font-semibold mb-2">Shipping:</h2>
              <div className="  w-1/2">
                <p className=" text-sm">
                  <span className="font-semibold"> US $185.00</span> Expedited
                  International Shipping.{" "}
                  <a href="#" className="text-blue-600 underline">
                    See details
                  </a>
                </p>
                <p className="text-sm text-gray-600 flex items-center">
                  International shipment of items may be subject to customs
                  processing and additional charges.
                  <Info className="w-4 h-4 ml-1" />
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Located in: Ota, Japan
                </p>
              </div>
            </div>

            <div className="mb-6 flex gap-14">
              <h2 className="text-sm font-semibold mb-2">Delivery:</h2>
              <div className="w-1/2">
                <p className="text-sm font-semibold flex items-center">
                  Estimated between Wed, Oct 30 and Mon, Nov 4 to 100211
                  <Info className="w-4 h-4 ml-1" />
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Includes <strong>5 business days</strong> handling time after
                  receipt of cleared payment.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Please allow additional time if international delivery is
                  subject to customs processing.
                </p>
              </div>
            </div>

            <div className="mb-6 flex gap-14">
              <h2 className="text-sm font-bold mb-2">Returns:</h2>
              <p className="text-sm">
                30 days returns. Buyer pays for return shipping.{" "}
                <a href="#" className="text-blue-600 underline">
                  See details
                </a>
              </p>
            </div>

            <div className="flex gap-12">
              <h2 className="text-sm font-bold mb-2">Payments:</h2>
              <div className=" flex gap-14 space-x-2">
                <PaymentIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product related */}
      <div className="my-5 max-w-7xl mx-auto">
        <div className="bg-white shadow-xl p-5 min-h-[45vh] rounded-[6px]">
          <h1 className="font-bold mb-2">Products related to this item</h1>

          <ProductCard />
        </div>
      </div>
    </div>
  );
}
