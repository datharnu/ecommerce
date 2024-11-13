import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bitcoin } from "lucide-react";

interface CryptoPaymentProps {
  price: number;
  productId: string;
  onSuccess: () => void;
  onError: (error: string) => void;
}

interface CryptoPaymentDetails {
  address: string;
  amount: number;
  currency: string;
  paymentId: string;
}

const CryptoPayment = ({
  price,
  productId,
  onSuccess,
  onError,
}: CryptoPaymentProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentDetails, setPaymentDetails] =
    useState<CryptoPaymentDetails | null>(null);

  const initiateCryptoPayment = async (currency: "BTC" | "USDT") => {
    try {
      setIsProcessing(true);
      const response = await fetch("/api/crypto/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: price,
          currency,
          productId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create crypto payment");
      }

      const paymentDetails = await response.json();
      setPaymentDetails(paymentDetails);
      startPaymentStatusCheck(paymentDetails.paymentId);
    } catch (error) {
      onError("Failed to initiate crypto payment");
    } finally {
      setIsProcessing(false);
    }
  };

  const startPaymentStatusCheck = (paymentId: string) => {
    const checkInterval = setInterval(async () => {
      try {
        const response = await fetch(`/api/crypto/payment-status/${paymentId}`);
        const { paid } = await response.json();

        if (paid) {
          clearInterval(checkInterval);
          onSuccess();
        }
      } catch (error) {
        console.error("Failed to check payment status:", error);
      }
    }, 5000);

    // Clear interval after 30 minutes
    setTimeout(() => {
      clearInterval(checkInterval);
      if (!paymentDetails) {
        onError("Payment timeout. Please try again.");
      }
    }, 30 * 60 * 1000);
  };

  return (
    <div className="mt-4">
      {paymentDetails ? (
        <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-indigo-50 rounded-lg border border-indigo-100">
          <p className="font-bold mb-2 text-indigo-900">Send exactly:</p>
          <p className="text-2xl mb-3 text-indigo-700 font-semibold">
            {paymentDetails.amount} {paymentDetails.currency}
          </p>
          <p className="font-bold mb-2 text-indigo-900">To address:</p>
          <p className="break-all bg-white p-4 rounded-lg shadow-sm border border-indigo-100 font-mono text-sm">
            {paymentDetails.address}
          </p>
          <p className="mt-4 text-sm text-indigo-600">
            Payment will be automatically detected. Please do not close this
            window.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <Button
            className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white transition-all duration-200"
            onClick={() => initiateCryptoPayment("BTC")}
            disabled={isProcessing}
          >
            <Bitcoin className="w-5 h-5 mr-2" />
            Pay with Bitcoin
          </Button>
          <Button
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white transition-all duration-200"
            onClick={() => initiateCryptoPayment("USDT")}
            disabled={isProcessing}
          >
            Pay with USDT
          </Button>
        </div>
      )}
    </div>
  );
};

export default CryptoPayment;
