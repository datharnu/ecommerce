import React from "react";

export default function ContactPage() {
  return (
    <section className="">
      <div className="flex flex-col items-center justify-cente mb-56">
        <div className="text-center text-[20px] font-bold mt-20 mb-10">
          <h1>Contact Us</h1>
        </div>
        <div className="text-center text-[15px] max-w-5xl flex flex-col gap-5 ">
          <div>
            <p>
              E-mail: service@adoredvintage.com or click on the chat bot icon on
              the bottom right corner of your screen to begin a conversation.{" "}
            </p>
          </div>
          <div>
            <p>
              Visit our Customer Support/F.A.Q. Page for detailed answers to our
              most frequently asked questions.
            </p>
          </div>
          We answer e-mails in the order we receive them during business hours,
          typically within 24-48 hours. Kindly note, multiple e-mails within a
          24 hour period will automatically flag your email as spam and we do
          not frequently check our spam folders. For e-mail inquiries about
          orders, returns, and store credit, please provide your Order Number,
          First and Last Name on your account, and the e-mail address associated
          with your account.
        </div>
      </div>
    </section>
  );
}
