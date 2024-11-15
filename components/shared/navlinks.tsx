import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { User, ChevronDown, HelpCircle, ShoppingCart } from "lucide-react";
import LoginButton from "@/app/(auth)/login/components/loginButton";
import { useCart } from "@/app/context/cart-context"; // Import useCart hook

interface User {
  name: string | undefined;
  email: string | undefined;
  picture?: string;
}

interface NavLinksProps {
  mobile?: boolean;
  activeDropdown: "account" | "help" | null;
  toggleDropdown: (dropdown: "account" | "help" | null) => void;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null | undefined;
  loginWithRedirect: () => void;
  logout: () => void;
}

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export const NavLinks: React.FC<NavLinksProps> = ({
  mobile = false,
  activeDropdown,
  toggleDropdown,
}) => {
  const { cartCount } = useCart(); // Access cartCount from the CartContext
  const linkClass = mobile
    ? "block text-gray-700 hover:text-orange-500 py-2"
    : "flex items-center text-gray-700 hover:text-orange-500";

  return (
    <>
      <div className="relative">
        <LoginButton />
      </div>

      <div className="relative">
        <button
          onClick={() => toggleDropdown("help")}
          className={`${linkClass} flex items-center gap-1 ${
            activeDropdown === "help" ? "text-orange-500" : ""
          }`}
        >
          <HelpCircle className="w-4 h-4 mr-1" />
          <div className="flex items-center">
            <span className="text-xs">Help</span>
            <ChevronDown
              className={`h-4 w-4 ml-1 transition-transform ${
                activeDropdown === "help" ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>
        <AnimatePresence>
          {activeDropdown === "help" && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.2 }}
              className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            >
              <div className="py-1">
                <Link
                  href="/faq"
                  className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                >
                  Contact Us
                </Link>
                <Link
                  href="/terms-of-service"
                  className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                >
                  Terms of Service
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Link href="/cart" className={linkClass}>
        <div className=" items-center gap-1 relative hidden  lg:flex">
          <ShoppingCart className="lg:h-5 lg:w-5 w-4 h-4 mr-1" />
          <span className="text-xs">Cart</span>
          {/* Cart Count Notification */}
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </Link>
    </>
  );
};

export default NavLinks;
