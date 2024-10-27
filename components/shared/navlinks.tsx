import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { User, ChevronDown, HelpCircle, ShoppingCart } from "lucide-react";
import AuthNav from "@/app/login/page";

interface User {
  name: string | undefined; // Now it can be undefined
  email: string | undefined; // Now it can be undefined
  picture?: string; // Optional field for the user's profile picture
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
  const linkClass = mobile
    ? "block text-gray-700 hover:text-orange-500 py-2"
    : "flex items-center text-gray-700 hover:text-orange-500";

  return (
    <>
      <div className="relative">
        {/* <button
          onClick={() => toggleDropdown("account")}
          className={`${linkClass} flex items-center ${
            activeDropdown === "account" ? "text-orange-500" : ""
          }`}
        >
          <User className="h-5 w-5 mr-1" />
          <span>{user ? user.name : "Account"}</span>
          <ChevronDown
            className={`h-4 w-4 ml-1 transition-transform ${
              activeDropdown === "account" ? "rotate-180" : ""
            }`}
          />
        </button> */}
        {/* <AnimatePresence>
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
                {isLoading ? (
                  <div className="px-4 py-2 text-sm text-gray-700">
                    Loading...
                  </div>
                ) : isAuthenticated ? (
                  <>
                    {user?.picture && (
                      <div className="px-4 py-2 border-b">
                        <img
                          src={user.picture}
                          alt={user.name || ""}
                          className="w-8 h-8 rounded-full mb-2"
                        />
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </div>
                    )}
                    <Link
                      href="/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Orders
                    </Link>
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={loginWithRedirect}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <LogIn className="h-4 w-4 mr-2" />
                      Log in
                    </button>
                    <button
                      onClick={loginWithRedirect}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <UserPlus className="h-4 w-4 mr-2" />
                      Sign up
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}
        <AuthNav />
      </div>

      <div className="relative">
        <button
          onClick={() => toggleDropdown("help")}
          className={`${linkClass} flex items-center gap-1 ${
            activeDropdown === "help" ? "text-orange-500" : ""
          }`}
        >
          <HelpCircle className="lg:h-5 lg:w-5 w-4 h-4 mr-1" />
          <div className="flex items-center">
            <span className="text-sm lg:text-base">Help</span>
            <ChevronDown
              className={`h-4 w-4  ml-1 transition-transform ${
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
        <div className="flex items-center gap-1">
          <ShoppingCart className="lg:h-5 lg:w-5 w-4 h-4 mr-1" />
          <span className="text-sm lg:text-base">Cart</span>
        </div>
      </Link>
    </>
  );
};

export default NavLinks;
