import React from "react";

import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  subTitle: string;
  offer: string;
  image: StaticImageData;
}

export default function CardComponent({
  title,
  subTitle,
  offer,
  image,
}: CardProps) {
  return (
    <section>
      <div className="relative w-full bg-[#f58d08] lg:h-[37vh] h-[55vh] lg:rounded-2xl p-10 lg:p-16 lg:flex items-center ">
        <div className="w-full  text-[#481f08] flex flex-col lg:gap-10 gap-4 ">
          <span className="flex flex-col gap-3">
            <p className=" text-2xl lg:text-4xl font-bold">{title}</p>
            <span className="text-sm lg:text-base">{subTitle}</span>
          </span>

          <div className="max-w-52">
            <button className="bg-[#481f08]  px-7 py-4 font-bold text-sm rounded-full text-[#f58d08]">
              Grab your discount
            </button>
          </div>
        </div>

        <div className="lg:absolute bottom-3 mt-2 lg:mt-0 text-sm lg:text-base ">
          <p className="underline">{offer}</p>
        </div>

        {/* Image section */}

        <div className="w-full mt-5  ">
          <Image src={image} alt="image" />
        </div>
      </div>
    </section>
  );
}
