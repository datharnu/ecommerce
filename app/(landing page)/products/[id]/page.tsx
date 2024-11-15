"use client";
import React, { useEffect, useState } from "react";
import { Star, Info, ShoppingCart } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import {
  AllProductDatas,
  LimitedDatas,
  MusicalDatas,
} from "@/app/utils/ProductData";
// import PaymentIcons from "./components/PaymentIcons";
import { useCart } from "@/app/context/cart-context";
import bitcoin from "../../../../public/bitcoin.png";
import binance from "../../../../public/binance.png";
import ethereum from "../../../../public/ethereum.png";
import solana from "../../../../public/solana.png";
import usdt from "../../../../public/money.png";
import cardImage from "../../../../public/s-l960.webp";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

import { AlertDialogTitle } from "@radix-ui/react-alert-dialog";

import CardComponent from "@/components/shared/CardComponent";
import AuthBuyButton from "../../payment/components/AuthByButton";
import ProductList from "../../homepage/components/productList";

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
  quantity?: number; // Make quantity optional since it's not in the original product data
}

interface CartProps {
  productTitle: string;
  onClose: () => void;
  isOpen: boolean;
}

function getProduct(id: string): Product | undefined {
  return AllProductDatas.find((product) => product.id === parseInt(id));
}
interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<StaticImageData | null>(
    null
  );

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      const resolvedParams = await params;
      const fetchedProduct = getProduct(resolvedParams.id);

      setProduct(fetchedProduct);
      if (fetchedProduct) {
        setCurrentImage(fetchedProduct.image);
      }
      setIsLoading(false);
    };

    fetchProduct();
  }, [params]);

  const AddToCartPopup = ({ isOpen, onClose, productTitle }: CartProps) => {
    return (
      <AlertDialog open={isOpen} onOpenChange={onClose}>
        <AlertDialogContent className=" bg-white">
          <div className="flex items-center space-x-2 mb-4">
            <ShoppingCart className="h-6 w-6 text-green-500" />
            <AlertDialogTitle className="text-lg font-semibold ">
              Added to Cart
            </AlertDialogTitle>
          </div>
          <AlertDialogDescription className="mb-4">
            {productTitle} has been added to your cart!
          </AlertDialogDescription>
          <AlertDialogAction
            onClick={onClose}
            className="bg-yellow-400 text-black hover:text-white hover:bg-orange-600"
          >
            Continue Shopping
          </AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setIsPopupOpen(true);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!product) return <div>Product not found</div>;

  // Create a single-item array with the product and add quantity
  const productForPurchase = [
    {
      ...product,
      quantity: 1, // Set default quantity to 1 for direct purchase
    },
  ];

  return (
    <div className=" lg:py-10">
      <div className=" max-w-7xl  mx-auto px-4 py-10 flex flex-col md:flex-row">
        {/* Left column - Product Images */}
        <div className="md:w-1/3 pr-4 mx-auto">
          <div className="max-h-[400px]">
            <div className="w-full max-w-[400px] h-full flex items-center justify-center mt-10">
              <Image
                src={currentImage || product.image}
                alt={product.title}
                width={400}
                height={400}
                className="w-[400px] h-[400px] object-contain"
              />
            </div>
          </div>

          <div className="flex mt-5  max-w-[200px] h-full">
            {[product.image, ...product.additionalImages].map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                width={100}
                height={100}
                className="mr-2 cursor-pointer border-2 rounded-xl min-w-[40px] h-[40px] object-contain"
                onClick={() => setCurrentImage(img)}
              />
            ))}
          </div>
        </div>
        {/* Right column - Product Details */}
        <div className="md:w-1/2 mt-4 md:mt-0">
          <h1 className="lg:text-lg text-sm font-semibold ">{product.title}</h1>
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
            <p className="text-sm text-gray-600"></p>
          </div>
          <div className="mt-4">
            <h2 className="font-semibold">About this item</h2>
            <p className="mt-2 text-[14px] lg:text-base">
              {product.description}
            </p>
          </div>
          <div className="mt-4">
            <button
              className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            <AuthBuyButton products={productForPurchase} />
          </div>

          <div className="max-w-2xl mx-auto  rounded-lg mt-5">
            <div className="mb-6 flex gap-14">
              <h2 className="text-sm font-semibold mb-2">Shipping:</h2>
              <div className="w-1/2">
                <p className="text-sm text-gray-600 flex items-center">
                  International shipment of items may be subject to customs
                  processing and additional charges.
                  <Info className="w-4 h-4 ml-1" />
                </p>
                <p className="text-sm text-gray-600 mt-2"></p>
              </div>
            </div>

            <div className="mb-6 flex gap-14">
              <h2 className="text-sm font-semibold mb-2">Delivery:</h2>
              <div className="w-1/2">
                <p className="text-sm text-gray-600 ">
                  Includes <strong>3 business days</strong> handling time after
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

            <div className="flex gap-12 items-center">
              <h2 className="text-sm font-bold mb-2">Payments:</h2>
              <div className="flex gap-2 space-x-2 max-w-7">
                <Image src={bitcoin} alt="bitcoin" />
                <Image src={ethereum} alt="ethereum" />
                <Image src={binance} alt="binance" />
                <Image src={solana} alt="solana" />
                <Image src={usdt} alt="usdt" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 max-w-7xl mx-auto">
        <CardComponent
          title={"  The best Cards won't last long"}
          subTitle="Don't miss this chance to save with code TCGIFT24"
          offer="  Ends Dec 25.Min.spend $50. Max.$30 off.T&Cs."
          image={cardImage}
        />
      </div>
      {/* Product related */}
      <div className="my-5 max-w-7xl mx-auto">
        <div className="bg-white shadow-xl p-5 min-h-[45vh] rounded-[6px]">
          <h1 className="font-bold mb-2">Products related to this item</h1>
          <ProductList products={LimitedDatas} />
        </div>
      </div>

      <div className="my-5 max-w-7xl mx-auto">
        <div className="bg-white shadow-xl p-5 min-h-[45vh] rounded-[6px]">
          <h1 className="font-bold mb-2">Musical Gadgets</h1>
          <ProductList products={MusicalDatas} />
        </div>
      </div>
      <AddToCartPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        productTitle={product?.title}
      />
    </div>
  );
}
