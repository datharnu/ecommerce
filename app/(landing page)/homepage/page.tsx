import React from "react";
import CarouselDemo from "./components/carousel";
import AnnouncementBanner from "./components/anouncement";
import ExploreCategories from "./components/exploreCategories";
import SellingItems from "./components/sellingItems";
import CardComponent from "@/components/shared/CardComponent";
import cardImage from "../../../public/s-l960.webp";

export default function Homepage() {
  return (
    <div className="bg-[#fffbf9]">
      <div className="text-xl lg:mx-36 ">
        <AnnouncementBanner />
        <CarouselDemo />
        <ExploreCategories />
        <div className="my-10">
          <CardComponent
            title={"  The best Cards won't last long"}
            subTitle="Don't miss this chance to save with code TCGIFT24"
            offer="  Ends Dec 25.Min.spend $50. Max.$30 off.T&Cs."
            image={cardImage}
          />
        </div>
        <SellingItems />
      </div>
    </div>
  );
}
