"use client";
import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy on all items. If you're not satisfied with your purchase, you can return it for a full refund or exchange. Please refer to our Returns & Exchanges page for more details.",
    },
    {
      question: "How long does it take to process an order?",
      answer:
        "We process all orders within 1-2 business days. Shipping times vary depending on your location, but we strive to have all orders delivered within 5-7 business days.",
    },
    {
      question: "Do you offer gift wrapping?",
      answer:
        "Yes, we offer complimentary gift wrapping for all orders. Simply select the gift wrapping option at checkout and we'll take care of the rest.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express, Discover), as well as PayPal and Apple Pay.",
    },
    {
      question: "How can I track the status of my order?",
      answer:
        "You can track the status of your order by logging into your account on our website. You'll be able to see the current status of your order and any relevant tracking information.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl lg:text-center font-bold text-gray-800 mb-8">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 hover:bg-gray-50 focus:outline-none"
              >
                <h3 className="text-sm font-medium ">{faq.question}</h3>
                {activeIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-gray-500" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-500" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
