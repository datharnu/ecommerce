// import React from "react";
// import { Star, MapPin } from "lucide-react";
// import Image from "next/image";

// const ProductListing = ({ product }) => {
//   if (!product) return null;

//   return (
//     <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row">
//       {/* Left column - Product Images */}
//       <div className="md:w-1/2 pr-4">
//         <Image
//           src={product.image}
//           alt={product.title}
//           width={400}
//           height={400}
//           className="w-full h-auto"
//         />
//         <div className="flex mt-2">
//           {[1, 2, 3, 4].map((i) => (
//             <Image
//               key={i}
//               src={product.image}
//               alt={`Thumbnail ${i}`}
//               width={80}
//               height={80}
//               className="w-20 h-20 mr-2 cursor-pointer"
//             />
//           ))}
//         </div>
//       </div>
//       {/* Right column - Product Details */}
//       <div className="md:w-1/2 mt-4 md:mt-0">
//         <h1 className="text-2xl font-bold">{product.title}</h1>
//         <div className="flex items-center mt-2">
//           <span className="text-yellow-400 flex">
//             {[...Array(Math.floor(product.rating.rate))].map((_, i) => (
//               <Star key={i} size={16} fill="currentColor" />
//             ))}
//             {product.rating.rate % 1 !== 0 && (
//               <Star
//                 size={16}
//                 fill="currentColor"
//                 className="fill-current text-gray-300"
//               />
//             )}
//           </span>
//           <span className="ml-2 text-sm text-blue-600">
//             {product.rating.count} ratings
//           </span>
//         </div>
//         <div className="mt-4">
//           <span className="text-3xl font-bold">
//             ${product.price.toFixed(2)}
//           </span>
//           <p className="text-sm text-gray-600">
//             $214.70 Shipping & Import Fees Deposit to Nigeria
//           </p>
//         </div>
//         <div className="mt-4">
//           <h2 className="font-semibold">About this item</h2>
//           <p className="mt-2">{product.description}</p>
//         </div>
//         <div className="mt-4">
//           <button className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500">
//             Add to Cart
//           </button>
//           <button className="w-full bg-orange-400 text-black py-2 rounded mt-2 hover:bg-orange-500">
//             Buy Now
//           </button>
//         </div>
//         <div className="mt-4 flex items-center">
//           <MapPin size={16} />
//           <span className="ml-2">Deliver to Nigeria</span>
//         </div>
//         <div className="mt-4">
//           <p className="text-red-600 font-semibold">
//             Only 2 left in stock - order soon.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductListing;
