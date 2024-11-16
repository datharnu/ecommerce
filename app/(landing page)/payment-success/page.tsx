"use client";
import React, { useEffect, useState } from "react";
import { CheckCircle, Package, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function PaymentSuccess() {
  const [animate, setAnimate] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center p-4">
      <div
        className={`bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transform transition-all duration-1000 ${
          animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Success Icon */}
        <div className="flex justify-center">
          <div
            className={`rounded-full bg-orange-50 p-4 transform transition-all duration-1000 ${
              animate ? "scale-100 rotate-0" : "scale-0 rotate-180"
            }`}
          >
            <CheckCircle className="w-16 h-16 text-orange-500" />
          </div>
        </div>

        {/* Success Message */}
        <div
          className={`text-center mt-6 transform transition-all duration-1000 delay-300 ${
            animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600">
            Payment Successful!
          </h1>
          <p className="text-gray-600 mt-2">
            Thank you for your purchase. Your order is being processed.
          </p>
        </div>

        {/* Order Details Card */}
        <div
          className={`mt-8 bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-4 transform transition-all duration-1000 delay-500 ${
            animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >
          <div className="flex items-center space-x-3 text-gray-700">
            <Package className="w-5 h-5 text-orange-500" />
            <span>Order details have been sent to your email</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className={`mt-8 space-y-3 transform transition-all duration-1000 delay-700 ${
            animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Button
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white 
                     hover:from-orange-600 hover:to-orange-700 transition-all duration-300
                     shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            onClick={() => router.push("/orders")}
          >
            <span>View Order Details</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Button
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white
                     hover:from-blue-600 hover:to-blue-700 transition-all duration-300
                     shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            onClick={() => router.push("/")}
          >
            <Home className="w-4 h-4 mr-2" />
            <span>Return to Home</span>
          </Button>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 
                ${i === 0 ? "bg-orange-400 w-72 h-72" : ""}
                ${i === 1 ? "bg-blue-400 w-96 h-96" : ""}
                ${i === 2 ? "bg-orange-300 w-80 h-80" : ""}
                animate-float-${i + 1}
                transition-all duration-1000 delay-${i * 200}
              `}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float-${i + 1} ${10 + i * 2}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500 rounded-full opacity-10 animate-pulse" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-300 rounded-full opacity-10 animate-pulse" />
      </div>
    </div>
  );
}
