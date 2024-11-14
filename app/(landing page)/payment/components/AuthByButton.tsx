// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { createClient } from "@/app/utils/superbase/client";
// import { User } from "@supabase/supabase-js";
// import { StaticImageData } from "next/image";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   brand: string;
//   image?: StaticImageData;
//   additionalImages?: StaticImageData[];
//   rating: {
//     rate: number;
//     count: number;
//   };
// }

// const AuthBuyButton = ({ product }: { product: Product }) => {
//   const [showAuthModal, setShowAuthModal] = useState(false);

//   // Explicitly set the type to User | null
//   const [user, setUser] = useState<User | null>(null);

//   const [loading, setLoading] = useState(true);
//   const router = useRouter();
//   const supabase = createClient();

//   useEffect(() => {
//     // Get initial session
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setUser(session?.user ?? null); // This is fine now since user is of type User | null
//       setLoading(false);
//     });

//     // Listen for auth changes
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setUser(session?.user ?? null); // Same here, setting user to User | null
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   const handleBuyClick = () => {
//     if (!user) {
//       setShowAuthModal(true);
//       return;
//     }

//     // If user is authenticated, proceed to payment
//     router.push(
//       `/payment?title=${encodeURIComponent(product.title)}&price=${
//         product.price
//       }&id=${product.id}`
//     );
//   };

//   if (loading) {
//     return (
//       <button
//         className="w-full bg-orange-400 text-black py-2 rounded mt-2 opacity-50 cursor-not-allowed"
//         disabled
//       >
//         Loading...
//       </button>
//     );
//   }

//   return (
//     <>
//       <button
//         className="w-full bg-orange-400 text-black py-2 rounded mt-2 hover:bg-orange-500"
//         onClick={handleBuyClick}
//       >
//         Buy Now
//       </button>

//       <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
//         <DialogContent className="bg-white">
//           <DialogHeader>
//             <DialogTitle>Authentication Required</DialogTitle>
//             <DialogDescription>
//               Please log in or create an account to complete your purchase.
//             </DialogDescription>
//           </DialogHeader>
//           <DialogFooter className="flex gap-2">
//             <Button asChild variant="outline">
//               <Link href="/login">Login</Link>
//             </Button>
//             <Button asChild>
//               <Link href="/signup">Sign Up</Link>
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default AuthBuyButton;

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { createClient } from "@/app/utils/superbase/client";
// import { User } from "@supabase/supabase-js";
// import { StaticImageData } from "next/image";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   // description?: string;
//   // category?: string;
//   // brand?: string;
//   image?: StaticImageData;
//   // additionalImages?: StaticImageData[];
//   // rating?: {
//   //   rate: number;
//   //   count: number;
//   // };
//   quantity: number;
// }

// interface CartItem extends Product {
//   quantity: number;
// }

// const AuthBuyButton = ({
//   products,
//   title,
// }: {
//   products: CartItem[];
//   title: string;
// }) => {
//   const [showAuthModal, setShowAuthModal] = useState(false);
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();
//   const supabase = createClient();

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setUser(session?.user ?? null);
//       setLoading(false);
//     });

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setUser(session?.user ?? null);
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   const handleBuyClick = () => {
//     if (!user) {
//       setShowAuthModal(true);
//       return;
//     }

//     // Create a query string with all products
//     const queryString = products
//       .map(
//         (product) =>
//           `products[]=${encodeURIComponent(
//             JSON.stringify({
//               id: product.id,
//               title: product.title,
//               price: product.price,
//               quantity: product.quantity,
//             })
//           )}`
//       )
//       .join("&");

//     // Navigate to payment page with all products
//     router.push(`/payment?${queryString}`);
//   };

//   if (loading) {
//     return (
//       <button
//         className="w-full bg-orange-400 text-black py-2 rounded mt-2 opacity-50 cursor-not-allowed"
//         disabled
//       >
//         Loading...
//       </button>
//     );
//   }

//   return (
//     <>
//       <button
//         className="w-full bg-orange-400 text-black py-2 rounded mt-2 hover:bg-orange-500"
//         onClick={handleBuyClick}
//       >
//         {title}
//       </button>

//       <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
//         <DialogContent className="bg-white">
//           <DialogHeader>
//             <DialogTitle>Authentication Required</DialogTitle>
//             <DialogDescription>
//               Please log in or create an account to complete your purchase.
//             </DialogDescription>
//           </DialogHeader>
//           <DialogFooter className="flex gap-2">
//             <Button asChild variant="outline">
//               <Link href="/login">Login</Link>
//             </Button>
//             <Button asChild>
//               <Link href="/login">Sign Up</Link>
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default AuthBuyButton;

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createClient } from "@/app/utils/superbase/client";
import { User } from "@supabase/supabase-js";
import { StaticImageData } from "next/image";

// Define the cart item interface to match your cart context
export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image?: string | StaticImageData;
  description?: string;
  category?: string;
  brand?: string;
  additionalImages?: StaticImageData[];
  rating?: {
    rate: number;
    count: number;
  };
}

interface AuthBuyButtonProps {
  products: CartItem[];
}

const AuthBuyButton: React.FC<AuthBuyButtonProps> = ({ products }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleBuyClick = () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    // Create a query string with all products
    const queryString = products
      .map(
        (product) =>
          `products[]=${encodeURIComponent(
            JSON.stringify({
              id: product.id,
              title: product.title,
              price: product.price,
              quantity: product.quantity,
            })
          )}`
      )
      .join("&");

    router.push(`/payment?${queryString}`);
  };

  if (loading) {
    return (
      <Button className="w-full" variant="secondary" disabled>
        Loading...
      </Button>
    );
  }

  return (
    <>
      <Button className="w-full" variant="default" onClick={handleBuyClick}>
        Proceed to Checkout
      </Button>

      <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Authentication Required</DialogTitle>
            <DialogDescription>
              Please log in or create an account to complete your purchase.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthBuyButton;
