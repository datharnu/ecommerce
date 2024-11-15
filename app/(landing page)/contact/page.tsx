import React from "react";

export default function ContactPage() {
  return (
    <section className=" py-20">
      <div className="max-w-5xl mx-auto px-5 lg:px-0">
        <div className="text-center mb-10">
          <h1 className="lg:text-3xl text-2xl font-bold text-gray-800 ">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-2 text-sm lg:text-base">
            We're here to help! Get in touch with us for any inquiries.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 lg:p-12 text-sm lg:text-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Email Us
              </h2>
              <p className="text-gray-600">
                service@adoredvintage.com
                <br />
                or use the chat bot icon on the bottom right corner.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Customer Support
              </h2>
              <p className="text-gray-600">
                Visit our Customer Support/F.A.Q. Page for detailed answers to
                our most frequently asked questions.
              </p>
              <div className="mt-4">
                <p className="text-gray-600">
                  We answer emails in the order we receive them during business
                  hours, typically within 24-48 hours. Kindly note, multiple
                  emails within a 24 hour period will automatically flag your
                  email as spam and we do not frequently check our spam folders.
                  For email inquiries about orders, returns, and store credit,
                  please provide your Order Number, First and Last Name on your
                  account, and the email address associated with your account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
