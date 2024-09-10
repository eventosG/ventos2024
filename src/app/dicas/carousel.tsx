"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const TECarousel = dynamic(() =>
  import("tw-elements-react").then((res) => res.TECarousel)
);
const TECarouselItem = dynamic(() =>
  import("tw-elements-react").then((res) => res.TECarouselItem)
);

export default function Carousel() {
  return (
    <>
      <TECarousel showControls ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <Image
              height={400}
              width={900}
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <Image
              height={400}
              width={900}
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <Image
              height={400}
              width={900}
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}
