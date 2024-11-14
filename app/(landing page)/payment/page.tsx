// "use client";
// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Bitcoin, Copy } from "lucide-react";
// import { useSearchParams, useRouter } from "next/navigation";
// import ETH from "@/components/icons/eth";
// import BNB from "@/components/icons/bnb";
// import Solana from "@/components/icons/solana";
// import {
//   AlertDialog,
//   AlertDialogContent,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "@/components/ui/alert-dialog";
// import Spinner from "@/components/shared/Spinner";
// import { toast } from "react-hot-toast";
// import ShippingForm from "./components/shipping-form";

// const PaymentPage = () => {
//   const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
//   const [walletAddress, setWalletAddress] = useState("");
//   const [showWalletAddress, setShowWalletAddress] = useState(false);
//   const [walletAddressTimeout, setWalletAddressTimeout] = useState<ReturnType<
//     typeof setTimeout
//   > | null>(null);
//   const [timeRemaining, setTimeRemaining] = useState(1200); // 20 minutes in seconds
//   const [isLoading, setIsLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const searchParams = useSearchParams();
//   const productTitle = searchParams.get("title");
//   const price = Number(searchParams.get("price"));
//   const router = useRouter();

//   const paymentOptions = [
//     {
//       id: "bitcoin",
//       title: "Bitcoin",
//       icon: <Bitcoin className="w-5 h-5" />,
//       description: "Pay with Bitcoin",
//       gradientColors: "from-orange-500 to-yellow-500",
//       hoverGradient: "hover:from-orange-600 hover:to-yellow-600",
//       walletAddress: "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
//     },
//     {
//       id: "cryptocur",
//       title: "Ethereum",
//       icon: <ETH className="w-5 h-5" />,
//       description: "Pay securely with your Ethereum wallet",
//       gradientColors: "from-purple-500 to-indigo-500",
//       hoverGradient: "hover:from-purple-600 hover:to-indigo-600",
//       walletAddress: "0x0123456789012345678901234567890123456789",
//     },
//     {
//       id: "binance",
//       title: "Binance",
//       icon: <BNB className="w-5 h-5" />,
//       description: "Pay with BNB",
//       gradientColors: "from-blue-500 to-blue-600",
//       hoverGradient: "hover:from-blue-600 hover:to-blue-700",
//       walletAddress: "bnb1xyz...abcd",
//     },
//     {
//       id: "solana",
//       title: "Solana",
//       icon: <Solana className="w-5 h-5" />,
//       description: "Pay with Solana",
//       gradientColors: "from-blue-500 to-blue-600",
//       hoverGradient: "hover:from-blue-600 hover:to-blue-700",
//       walletAddress: "solana1xyz...abcd",
//     },
//   ];

//   const handleCopyToClipboard = () => {
//     navigator.clipboard.writeText(walletAddress);
//     toast.success("Wallet address copied to clipboard!");
//   };

//   const successPayment = () => {
//     setSuccess(true);

//     setTimeout(() => {
//       setShowWalletAddress(false);
//     }, 3000);
//   };

//   const handlePaymentMethodSelection = (
//     option: (typeof paymentOptions)[number]
//   ) => {
//     setSelectedMethod(option.id);
//     setWalletAddress(option.walletAddress);
//     setIsLoading(true);

//     // Simulate loading for 5 seconds
//     setTimeout(() => {
//       setShowWalletAddress(true);
//       setIsLoading(false);

//       // Set a timeout to hide the wallet address after 20 minutes
//       setWalletAddressTimeout(
//         setTimeout(() => {
//           setShowWalletAddress(false);
//           router.push(`/wallet-address-expired?method=${option.id}`);
//         }, 1000 * 60 * 20)
//       );

//       // Start the countdown timer
//       const interval = setInterval(() => {
//         setTimeRemaining((prevTime) => prevTime - 1);
//       }, 1000);

//       // Clean up the interval when the component unmounts
//       return () => clearInterval(interval);
//     }, 2000);
//   };

//   useEffect(() => {
//     return () => {
//       // Clean up the wallet address timeout when the component unmounts
//       if (walletAddressTimeout) {
//         clearTimeout(walletAddressTimeout);
//       }
//     };
//   }, [walletAddressTimeout, router]);

//   return (
//     <div className="lg:flex ">
//       {/* ShippingForm component */}
//       <ShippingForm />
//       <div className="max-w-md mx-auto">
//         <div className="overflow-hidden">
//           <div className="px-6 py-8">
//             <h1 className="text-2xl font-bold text-center mb-8">
//               Choose Payment Method
//             </h1>

//             <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
//               <p className="text-sm text-gray-600 mb-2 font-bold">
//                 Product: <span className="font-normal">{productTitle}</span>
//               </p>
//               <p className="text-2xl font-bold text-[#f58d08]">
//                 ${price?.toFixed(2)}
//               </p>
//             </div>

//             {!selectedMethod ? (
//               <div className="space-y-3">
//                 {paymentOptions.map((option) => (
//                   <Button
//                     key={option.id}
//                     variant="outline"
//                     className={`w-full flex items-center justify-start space-x-3 py-8
//                       bg-gradient-to-r ${option.gradientColors} ${option.hoverGradient}
//                       text-white border-none transition-all duration-200
//                       hover:shadow-lg transform hover:-translate-y-0.5`}
//                     onClick={() => handlePaymentMethodSelection(option)}
//                   >
//                     <div className="bg-white/20 p-2 rounded-full">
//                       {option.icon}
//                     </div>
//                     <div className="flex-1 text-left">
//                       <p className="font-semibold">{option.title}</p>
//                       <p className="text-sm text-white/80">
//                         {option.description}
//                       </p>
//                     </div>
//                   </Button>
//                 ))}
//               </div>
//             ) : (
//               <AlertDialog open={showWalletAddress}>
//                 <AlertDialogContent className=" bg-white">
//                   <AlertDialogHeader>
//                     <AlertDialogTitle>Wallet Address</AlertDialogTitle>
//                   </AlertDialogHeader>
//                   {isLoading ? (
//                     <div className="flex items-center justify-center py-6">
//                       <Spinner />
//                       <p className="ml-2 text-gray-500">
//                         Loading wallet address...
//                       </p>
//                     </div>
//                   ) : (
//                     <div>
//                       <p className="text-sm text-gray-600 mb-2 font-bold">
//                         Payment will be automatically detected. Please do not
//                         close this window.
//                       </p>

//                       <div className="flex items-center gap-2">
//                         <p className="text-sm font-bold text-indigo-700">
//                           {walletAddress}
//                         </p>
//                         <button className="" onClick={handleCopyToClipboard}>
//                           <Copy className="w-3 h-3" />
//                         </button>
//                       </div>
//                       <p className="text-sm text-gray-500 mt-2">
//                         This wallet address will expire in{" "}
//                         {Math.floor(timeRemaining / 60)}m {timeRemaining % 60}s
//                       </p>
//                     </div>
//                   )}
//                   {success && (
//                     <div className="mt-4 text-green-500 font-semibold text-center">
//                       Payment confirmed successfully!
//                     </div>
//                   )}
//                   <AlertDialogFooter className="mt-3 flex-col gap-5">
//                     <Button
//                       className="bg-green-700 hover:bg-green-500 text-white"
//                       // onClick={() => setShowWalletAddress(false)}
//                       onClick={successPayment}
//                     >
//                       Confirm Payment
//                     </Button>

//                     <Button
//                       className="bg-red-700 hover:bg-red-500 text-white"
//                       onClick={() => window.location.reload()}
//                     >
//                       Cancel payment
//                     </Button>
//                   </AlertDialogFooter>
//                 </AlertDialogContent>
//               </AlertDialog>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;

"use client";
import React, { useState, useEffect, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Bitcoin, Copy } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import ETH from "@/components/icons/eth";
import BNB from "@/components/icons/bnb";
import Solana from "@/components/icons/solana";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Spinner from "@/components/shared/Spinner";
import { toast } from "react-hot-toast";
import ShippingForm from "./components/shipping-form";

interface ProductData {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

// Separate component for the payment content
const PaymentContent = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [showWalletAddress, setShowWalletAddress] = useState(false);
  const [walletAddressTimeout, setWalletAddressTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(1200);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [products, setProducts] = useState<ProductData[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const searchParams = useSearchParams();
  const router = useRouter();

  // Parse products from URL parameters
  useEffect(() => {
    try {
      const productParams = searchParams.getAll("products[]");
      if (productParams.length > 0) {
        const parsedProducts = productParams.map((param) =>
          JSON.parse(decodeURIComponent(param))
        );
        setProducts(parsedProducts);

        // Calculate total price
        const total = parsedProducts.reduce((sum, product) => {
          return sum + product.price * product.quantity;
        }, 0);
        setTotalPrice(total);
      }
    } catch (error) {
      console.error("Error parsing products:", error);
      toast.error("Error loading product details");
    }
  }, [searchParams]);

  const paymentOptions = [
    {
      id: "bitcoin",
      title: "Bitcoin",
      icon: <Bitcoin className="w-5 h-5" />,
      description: "Pay with Bitcoin",
      gradientColors: "from-orange-500 to-yellow-500",
      hoverGradient: "hover:from-orange-600 hover:to-yellow-600",
      walletAddress: "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
    },
    {
      id: "cryptocur",
      title: "Ethereum",
      icon: <ETH className="w-5 h-5" />,
      description: "Pay securely with your Ethereum wallet",
      gradientColors: "from-purple-500 to-indigo-500",
      hoverGradient: "hover:from-purple-600 hover:to-indigo-600",
      walletAddress: "0x0123456789012345678901234567890123456789",
    },
    {
      id: "binance",
      title: "Binance",
      icon: <BNB className="w-5 h-5" />,
      description: "Pay with BNB",
      gradientColors: "from-blue-500 to-blue-600",
      hoverGradient: "hover:from-blue-600 hover:to-blue-700",
      walletAddress: "bnb1xyz...abcd",
    },
    {
      id: "solana",
      title: "Solana",
      icon: <Solana className="w-5 h-5" />,
      description: "Pay with Solana",
      gradientColors: "from-blue-500 to-blue-600",
      hoverGradient: "hover:from-blue-600 hover:to-blue-700",
      walletAddress: "solana1xyz...abcd",
    },
  ];

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    toast.success("Wallet address copied to clipboard!");
  };

  const successPayment = () => {
    setSuccess(true);
    setTimeout(() => {
      setShowWalletAddress(false);
    }, 3000);
  };

  const handlePaymentMethodSelection = (
    option: (typeof paymentOptions)[number]
  ) => {
    setSelectedMethod(option.id);
    setWalletAddress(option.walletAddress);
    setIsLoading(true);

    setTimeout(() => {
      setShowWalletAddress(true);
      setIsLoading(false);

      setWalletAddressTimeout(
        setTimeout(() => {
          setShowWalletAddress(false);
          router.push(`/wallet-address-expired?method=${option.id}`);
        }, 1200000) // 20 minutes
      );

      const interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (walletAddressTimeout) {
        clearTimeout(walletAddressTimeout);
      }
    };
  }, [walletAddressTimeout]);

  return (
    <div className="max-w-md mx-auto">
      <div className="overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-2xl font-bold text-center mb-8">
            Choose Payment Method
          </h1>

          <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
            {products.map((product, index) => (
              <div key={index} className="mb-2">
                <p className="text-sm text-gray-600 font-bold">
                  Product: <span className="font-normal">{product.title}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Quantity: {product.quantity} x ${product.price.toFixed(2)}
                </p>
              </div>
            ))}
            <p className="text-2xl font-bold text-[#f58d08] mt-2">
              Total: ${totalPrice.toFixed(2)}
            </p>
          </div>

          {!selectedMethod ? (
            <div className="space-y-3">
              {paymentOptions.map((option) => (
                <Button
                  key={option.id}
                  variant="outline"
                  className={`w-full flex items-center justify-start space-x-3 py-8 
                    bg-gradient-to-r ${option.gradientColors} ${option.hoverGradient} 
                    text-white border-none transition-all duration-200 
                    hover:shadow-lg transform hover:-translate-y-0.5`}
                  onClick={() => handlePaymentMethodSelection(option)}
                >
                  <div className="bg-white/20 p-2 rounded-full">
                    {option.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-semibold">{option.title}</p>
                    <p className="text-sm text-white/80">
                      {option.description}
                    </p>
                  </div>
                </Button>
              ))}
            </div>
          ) : (
            <AlertDialog open={showWalletAddress}>
              <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                  <AlertDialogTitle>Wallet Address</AlertDialogTitle>
                </AlertDialogHeader>
                {isLoading ? (
                  <div className="flex items-center justify-center py-6">
                    <Spinner />
                    <p className="ml-2 text-gray-500">
                      Loading wallet address...
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm text-gray-600 mb-2 font-bold">
                      Payment will be automatically detected. Please do not
                      close this window.
                    </p>

                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-indigo-700">
                        {walletAddress}
                      </p>
                      <button className="" onClick={handleCopyToClipboard}>
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      This wallet address will expire in{" "}
                      {Math.floor(timeRemaining / 60)}m {timeRemaining % 60}s
                    </p>
                  </div>
                )}
                {success && (
                  <div className="mt-4 text-green-500 font-semibold text-center">
                    Payment confirmed successfully!
                  </div>
                )}
                <AlertDialogFooter className="mt-3 flex-col gap-5">
                  <Button
                    className="bg-green-700 hover:bg-green-500 text-white"
                    onClick={successPayment}
                  >
                    Confirm Payment
                  </Button>

                  <Button
                    className="bg-red-700 hover:bg-red-500 text-white"
                    onClick={() => window.location.reload()}
                  >
                    Cancel payment
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </div>
    </div>
  );
};

const PaymentLoading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner />
      <p className="ml-2">Loading payment options...</p>
    </div>
  );
};

const PaymentPage = () => {
  return (
    <div className="lg:flex">
      <ShippingForm />
      <Suspense fallback={<PaymentLoading />}>
        <PaymentContent />
      </Suspense>
    </div>
  );
};

export default PaymentPage;
