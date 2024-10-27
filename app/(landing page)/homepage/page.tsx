import React from "react";
import CarouselDemo from "./components/carousel";
import AnnouncementBanner from "./components/anouncement";
import ExploreCategories from "./components/exploreCategories";
import SellingItems from "./components/sellingItems";

export default function Homepage() {
  return (
    <div className="bg-slate-100">
      <div className="text-xl lg:mx-36 ">
        <AnnouncementBanner />
        <CarouselDemo />
        <ExploreCategories />
        <SellingItems />
      </div>
    </div>
  );
}
