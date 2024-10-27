import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { AlertCircle } from "lucide-react";

// Define the product interface
interface Product {
  id: string | number;
  title: string;
  price: number;
  image: StaticImageData;
  description?: string;
  brand?: string;
}

// Define the component props interface
interface SearchResultsProps {
  results: Product[];
  searchTerm: string;
  onResultClick?: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  searchTerm,
  onResultClick,
}) => {
  if (results.length === 0) {
    return (
      <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-md p-4 z-50">
        <div className="flex items-center justify-center text-gray-500">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span>No products found for {searchTerm}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-  lg:top-full left-0 w-full bg-white  shadow-md  rounded-b-md p-4 z-50 max-h-60 lg:max-h-96 overflow-y-auto">
      {results.map((product) => (
        <Link
          href={`/products/${product.id}`}
          key={product.id}
          onClick={onResultClick}
          className="block"
        >
          <div className="flex items-center gap-5 mb-4 p-2 hover:bg-gray-50 rounded-md transition-colors duration-200 cursor-pointer group">
            <div className="relative w-[70px] h-[50px]">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover rounded group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="font-semibold group-hover:text-orange-500 transition-colors duration-200 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
