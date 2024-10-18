import React, { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  HelpCircle,
  User,
  Menu,
  X,
  ChevronDown,
  Search,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../../public/parallel.jpg";
import { ProductDatas } from "@/app/utils/ProductData";

// New component for search results
const SearchResults: React.FC<{
  results: typeof ProductDatas;
  searchTerm: string;
}> = ({ results, searchTerm }) => {
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
    <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-md p-4 z-50 max-h-96 overflow-y-auto">
      {results.map((product) => (
        <div key={product.id} className="flex items-center mb-4">
          <Image
            src={product.image}
            alt={product.title}
            width={50}
            height={50}
            className="object-cover rounded"
          />
          <div className="ml-4">
            <h3 className="font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<typeof ProductDatas>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<
    "account" | "help" | null
  >(null);

  const toggleDropdown = (dropdown: "account" | "help" | null) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleSearch = () => {
    const results = ProductDatas.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    setShowResults(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setShowResults(false);
    }
  };

  return (
    <nav className="bg-white shadow-md relative">
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
                className="py-1 rounded-l-[7px] w-[70%] ml-10 px-2 pr-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              <button
                className="ml-0 bg-orange-500 text-white px-4 py-1 rounded-r-[7px]"
                onClick={handleSearch}
              >
                <Search className="h-5 w-5" />
              </button>
              {showResults && (
                <SearchResults
                  results={searchResults}
                  searchTerm={searchTerm}
                />
              )}
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
                    className="w-full py-1 px-4 rounded-l-[7px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  />
                  <button
                    className="absolute right-0 top-0 bg-orange-500 text-white px-4 py-1 rounded-r-[7px]"
                    onClick={handleSearch}
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
                {showResults && (
                  <SearchResults
                    results={searchResults}
                    searchTerm={searchTerm}
                  />
                )}
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

// ... Rest of the code (NavLinks component) remains the same

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
              className="absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            >
              <div className="py-1">
                {/* <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Your Profile
                </Link> */}
                <Link
                  href="/orders"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Your Orders
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
              <div className="py-1 z-50">
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
