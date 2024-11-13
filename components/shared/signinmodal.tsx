import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UserPlus, LogIn } from "lucide-react"; // Using Lucide React icons
import Logo from "../../public/parallel.jpg";
import Image from "next/image";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: () => void;
  onSignUp: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  onClose,
  onSignIn,
  onSignUp,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white font-bold text-center">
            Welcome
          </DialogTitle>
          <DialogDescription className="text-center text-gray-500">
            Sign in to your account or create a new one.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-4 py-4">
          <Button
            onClick={onSignIn}
            className="w-full flex items-center justify-center space-x-2"
          >
            <LogIn className="w-5 h-5 mr-2" />
            <span>Sign In</span>
          </Button>
          <Button
            variant="outline"
            onClick={onSignUp}
            className="w-full flex items-center justify-center space-x-2"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            <span>Sign Up</span>
          </Button>
        </div>
        <DialogFooter className="sm:justify-center">
          {/* <Button
            variant="ghost"
            onClick={onClose}
            className="w-full sm:w-auto"
          >
            <X className="w-4 h-4 mr-2" />
            Close
          </Button> */}

          <div className="logo-container">
            <div className="logo-image">
              <Image src={Logo} alt="logo" width={12} height={10} />
            </div>
            <div className="logo-text">
              <h1>RentVille</h1>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
