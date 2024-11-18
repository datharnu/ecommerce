"use client";

import React from "react";
import { CartProvider } from "../context/cart-context";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import TawkChat from "../utils/Taw";

interface LandingPageLayoutProps {
  children: React.ReactNode;
}

const LandingPageLayout: React.FC<LandingPageLayoutProps> = ({ children }) => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="bg-[#fffbf9] pb-10">{children}</main>
        <div className="fixed bottom-10 right-10">
          <TawkChat />
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default LandingPageLayout;
