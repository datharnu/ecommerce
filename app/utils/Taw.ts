// types/tawk.d.ts
interface TawkAPI {
  onLoad?: () => void;
  onStatusChange?: (status: string) => void;
  onChatMaximized?: () => void;
  onChatMinimized?: () => void;
  onChatHidden?: () => void;
  onChatStarted?: () => void;
  onChatEnded?: () => void;
  visitor?: {
    name?: string;
    email?: string;
    [key: string]: unknown;
  };
  maximize?: () => void;
  minimize?: () => void;
  hideWidget?: () => void;
  showWidget?: () => void;
  [key: string]: unknown;
}

declare global {
  interface Window {
    Tawk_API?: TawkAPI;
    Tawk_LoadStart?: Date;
  }
}

// components/TawkChat.tsx
import { FC, useEffect } from "react";

const TAWK_SCRIPT_URL =
  "https://embed.tawk.to/673b93184304e3196ae49b94/1id0bd6hs";

const TawkChat: FC = () => {
  useEffect(() => {
    try {
      // Initialize Tawk API
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      // Create and configure script element
      const script = document.createElement("script");
      script.async = true;
      script.src = TAWK_SCRIPT_URL;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");

      // Error handling
      script.onerror = (error) => {
        console.error("Error loading Tawk.to chat widget:", error);
      };

      // Add the script to document
      document.body.appendChild(script);

      // Cleanup function
      return () => {
        try {
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
        } catch (error) {
          console.error("Error removing Tawk.to script:", error);
        }
      };
    } catch (error) {
      console.error("Error initializing Tawk.to chat:", error);
    }
  }, []);

  // Component doesn't render anything visible
  return null;
};

export default TawkChat;
