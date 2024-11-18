"use client";

import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";
import logo from "../../../public/parallel.jpg";
import { useToast } from "@/hooks/use-toast";
import { login, signup } from "./actions/action";
import Image from "next/image";
import Link from "next/link";
export default function LoginPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleFormAction(
    formData: FormData,
    action: "login" | "signup"
  ) {
    try {
      setIsLoading(true);
      setError("");

      const result = await (action === "login"
        ? login(formData)
        : signup(formData));

      // If we get here, it means there was no redirect, so there might be an error
      if (result && "error" in result) {
        setError(result.error);
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        });
      } else if (action === "signup") {
        toast({
          title: "Success!",
          description: "Account created successfully. Redirecting...",
        });
        // Add delay before redirect
        await new Promise((resolve) => setTimeout(resolve, 8000));
      }
      // } catch (e) {
      //   const errorMessage =
      //     e instanceof Error ? e.message : "An unexpected error occurred";
      //   setError(errorMessage);
      //   toast({
      //     variant: "destructive",
      //     title: action === "login" ? "Login failed" : "Signup failed",
      //     description: errorMessage,
      //   });
      // } finally {
      //   setIsLoading(false);
      // }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="min-h-screen   bg-bgLogin bg-cover bg-no-repeat">
      <Link href="/">
        <div className="lg:text-3xl font-bold text-orange-500 flex items-center justify-center py-10 ">
          MYSHOP
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="ml-2"
          />
        </div>
      </Link>
      <div className=" py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-md flex flex-col gap-16">
          <div className="space-y-5 mx-5">
            <div>
              <CardTitle className="text-2xl font-bold text-center text-[#f58d08]">
                Welcome back
              </CardTitle>
              <CardDescription className="text-center">
                Enter your email to sign in to your account
              </CardDescription>
            </div>
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm ">
                {error}
              </div>
            )}
          </div>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="w-full bg-white border-gray-300"
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full bg-white border-gray-300"
                  disabled={isLoading}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Button
                  className="w-full bg-[#f58d08] hover:bg-orange-400 text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget.closest("form");
                    if (form) {
                      handleFormAction(new FormData(form), "login");
                    }
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? "Please wait..." : "Log in"}
                </Button>
                <Button
                  className="w-full text-white bg-[#f58d08] hover:bg-orange-400"
                  variant="outline"
                  onClick={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget.closest("form");
                    if (form) {
                      handleFormAction(new FormData(form), "signup");
                    }
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Sign up"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2 text-sm text-center text-gray-500">
            <a href="#" className="hover:text-gray-700  text-orange-500 ">
              Forgot your password?
            </a>
            <div className="flex items-center justify-center space-x-1">
              <span>Don&apos;t have an account?</span>
              <a href="#" className="text-[#f58d08] hover:text-blue-800">
                Sign up
              </a>
            </div>
          </CardFooter>
        </div>
      </div>
    </section>
  );
}
