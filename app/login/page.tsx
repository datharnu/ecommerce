// "use client";
// import { useUser } from "@auth0/nextjs-auth0/client";
// import { Button } from "@/components/ui/button";
// import { Loader2 } from "lucide-react";

// export default function LoginPage() {
//   const { user, isLoading } = useUser();

//   if (isLoading) {
//     return (
//       <div className="">
//         <Button disabled>
//           <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//           Loading...
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <div className="">
//       {!user ? (
//         <Button asChild className="min-w-[100px]">
//           <a href="/api/auth/login">Login</a>
//         </Button>
//       ) : (
//         <div className="flex flex-col items-center gap-4">
//           <p className="text-sm text-gray-600">
//             Welcome, {user.name || user.email}!
//           </p>
//           <Button asChild variant="destructive" className="min-w-[100px]">
//             <a href="/api/auth/logout">Logout</a>
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Button } from "@/components/ui/button";
import { Loader2, User, ChevronDown, LogOut, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AuthNav = () => {
  const { user, isLoading } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Button disabled className="w-[100px]">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </Button>
      </div>
    );
  }

  return (
    <div className="relative z-50 ">
      {!user ? (
        <Button
          variant={"ghost"}
          asChild
          className="min-w-[100px] -ml-5 hover:text-orange-500"
        >
          <a href="/api/auth/login" className="flex items-center">
            <LogIn className="h-4 w-4 mr-2" />
            <span className="text-sm lg:text-base"> Login</span>
          </a>
        </Button>
      ) : (
        <>
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 -ml-4"
          >
            <User className="lg:h-5 lg:w-5 w-4 h-4" />
            <span className="max-w-[150px] truncate">
              {user.name || user.email}
            </span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </Button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.2 }}
                className="absolute  z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              >
                <div className="py-1">
                  {user.picture && (
                    <div className="px-4 py-2 border-b">
                      <img
                        src={user.picture}
                        alt={user.name || "Profile"}
                        className="w-8 h-8 rounded-full mb-2"
                      />
                      <p className="text-sm text-gray-600 truncate">
                        {user.email}
                      </p>
                    </div>
                  )}
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <a
                      href="/api/auth/logout"
                      className="flex items-center px-4 py-2"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </a>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default AuthNav;
