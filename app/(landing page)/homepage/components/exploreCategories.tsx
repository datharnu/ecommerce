"use client";
import React from "react";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import LuxuryBag from "../../../../public/Bag ecommerce.jpg";
import Refurblished from "../../../../public/refurblished ecommerce.jpg";
import Sneakers from "../../../../public/Sneakers ecommerce.jpg";
import Toys from "../../../../public/toys ecommerce.jpg";
import Wheel from "../../../../public/wheel ecommerce.jpg";
import Cards from "../../../../public/Cards ecommerce.jpg";

type CategoryIcon = typeof LuxuryBag | typeof ShoppingBag;

interface Category {
  name: string;
  icon: CategoryIcon;
}

const categories: Category[] = [
  { name: "Luxury", icon: LuxuryBag },
  { name: "Sneakers", icon: Sneakers },
  { name: "P&A", icon: Wheel },
  { name: "Refurbished", icon: Refurblished },
  { name: "Trading cards", icon: Cards },
  //   { name: "Pre-loved Luxury", icon: ShoppingBag },
  { name: "Toys", icon: Toys },
];

interface CategoryItemProps {
  name: string;
  icon: CategoryIcon;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, icon: Icon }) => (
  <div className="flex flex-col items-center min-w-[100px]  ">
    <div className=" flex items-center  justify-center bg-white  rounded-full mb-2">
      {typeof Icon === "function" ? (
        <Icon className="w-8 h-8" />
      ) : (
        <Image
          src={Icon}
          alt={name}
          className=" lg:w-[70%] w-[40%] rounded-full "
        />
      )}
    </div>
    <span className="text-sm font-medium">{name}</span>
  </div>
);

const ExploreCategories: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 my-10 bg-white rounded-[5px]">
      <h2 className="lg:text-2xl text-xl font-bold mb-6  lg:mb-14">
        Explore Popular Categories
      </h2>
      <div className=" overflow-x-auto ">
        <div className="flex space-x-4 pb-4">
          {categories.map((category) => (
            <CategoryItem key={category.name} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCategories;
