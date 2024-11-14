import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../../public/parallel.jpg";
import { AllProductDatas, ProductDatas } from "@/app/utils/ProductData";
import { useAuth0 } from "@auth0/auth0-react";
import SearchResults from "./SearchResults";
import NavLinks from "./navlinks";

const Navbar: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("User:", user);
      console.log("isAuthenticated:", isAuthenticated);
      console.log("isLoading:", isLoading);
    } else {
      console.log("User not authenticated");
    }
  }, [isAuthenticated, user]);
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
    if (searchTerm.trim() === "") {
      setShowResults(false);
      return;
    }

    const results = AllProductDatas.filter(
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

  const handleResultClick = () => {
    setShowResults(false);
    setSearchTerm("");
  };

  const userForNavLinks = user
    ? {
        name: user.name || "Unknown",
        email: user.email || "No Email",
        picture: user.picture,
      }
    : null;

  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 lg:flex">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="lg:text-3xl font-bold text-orange-500 flex items-center"
          >
            MYSHOP
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              className="ml-2"
            />
          </Link>

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
        </div>

        <div className="hidden md:flex items-center gap-10 w-full">
          <div className="relative flex-grow mr-4">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search products, brands and categories"
                className="py-1 rounded-l-[7px] w-[70%] ml-10 px-2 pr-10 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              <div>
                <button
                  className="ml-0 bg-orange-500 text-white px-4 py-[8px] rounded-r-[7px]"
                  onClick={handleSearch}
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
            {showResults && (
              <SearchResults
                results={searchResults}
                searchTerm={searchTerm}
                onResultClick={handleResultClick}
              />
            )}
          </div>
          <NavLinks
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            isAuthenticated={isAuthenticated}
            user={userForNavLinks}
            isLoading={isLoading}
            loginWithRedirect={loginWithRedirect}
            logout={logout}
          />
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
              <div className="relative flex-grow mb-3">
                <input
                  type="text"
                  placeholder="Search products......"
                  className="w-full py-1 px-4 rounded-l-[7px] border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={handleInputChange}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
                <button
                  className="absolute right-0 top-0 bg-orange-500 text-white px-4 py-[7px] rounded-r-[7px]"
                  onClick={handleSearch}
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
              {showResults && (
                <SearchResults
                  results={searchResults}
                  searchTerm={searchTerm}
                  onResultClick={handleResultClick}
                />
              )}
              <NavLinks
                mobile
                activeDropdown={activeDropdown}
                toggleDropdown={toggleDropdown}
                isAuthenticated={isAuthenticated}
                user={userForNavLinks}
                isLoading={isLoading}
                loginWithRedirect={loginWithRedirect}
                logout={logout}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
