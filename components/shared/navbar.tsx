import React, { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  HelpCircle,
  User,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../../public/parallel.jpg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<
    "account" | "help" | null
  >(null);

  const toggleDropdown = (dropdown: "account" | "help" | null) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="lg:text-3xl font-bold text-orange-500">
            <div className="flex items-center">
              MYSHOP
              <Image src={logo} alt="Logo" width={40} height={40} />
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 w-full">
            <div className="relative flex-grow mr-4">
              <input
                type="text"
                placeholder="Search products, brands and categories"
                className="py-1 rounded-[7px] w-[70%] ml-10 px-2 pr-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="ml-5 bg-orange-500 text-white px-4 py-1 rounded-[7px]">
                SEARCH
              </button>
            </div>
            <NavLinks
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div className="relative flex-grow mb-3">
                  <input
                    type="text"
                    placeholder="Search products......"
                    className="w-full py-1 px-4 rounded-[7px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <button className="absolute right-0 top-0 bg-orange-500 text-white px-4 py-1 rounded-[7px]">
                    SEARCH
                  </button>
                </div>
                <NavLinks
                  mobile
                  activeDropdown={activeDropdown}
                  toggleDropdown={toggleDropdown}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  activeDropdown: "account" | "help" | null;
  toggleDropdown: (dropdown: "account" | "help" | null) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({
  mobile = false,
  activeDropdown,
  toggleDropdown,
}) => {
  const linkClass = mobile
    ? "block text-gray-700 hover:text-orange-500 py-2"
    : "flex items-center text-gray-700 hover:text-orange-500";

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="relative">
        <button
          onClick={() => toggleDropdown("account")}
          className={`${linkClass} flex items-center ${
            activeDropdown === "account" ? "text-orange-500" : ""
          }`}
        >
          <User className="h-5 w-5 mr-1" />
          <span>Account</span>
          <ChevronDown
            className={`h-4 w-4 ml-1 transition-transform ${
              activeDropdown === "account" ? "rotate-180" : ""
            }`}
          />
        </button>
        <AnimatePresence>
          {activeDropdown === "account" && (
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
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Your Profile
                </Link>
                <Link
                  href="/orders"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Your Orders
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <Link
                  href="/logout"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative">
        <button
          onClick={() => toggleDropdown("help")}
          className={`${linkClass} flex items-center ${
            activeDropdown === "help" ? "text-orange-500" : ""
          }`}
        >
          <HelpCircle className="h-5 w-5 mr-1" />
          <span>Help</span>
          <ChevronDown
            className={`h-4 w-4 ml-1 transition-transform ${
              activeDropdown === "help" ? "rotate-180" : ""
            }`}
          />
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
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Contact Us
                </Link>
                <Link
                  href="/returns"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Returns & Refunds
                </Link>
                <Link
                  href="/shipping"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Shipping Info
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Link href="/cart" className={linkClass}>
        <div className="flex items-center">
          <ShoppingCart className="h-5 w-5 mr-1" />
          <span>Cart</span>
        </div>
      </Link>
    </>
  );
};

export default Navbar;
