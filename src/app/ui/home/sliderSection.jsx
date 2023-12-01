import Image from "next/image";
import React from "react";

const SliderSection = () => {
  return (
    <aside className="flex flex-col gap-y-8">
      <picture className="w-full h-72 relative md:h-[536px]	brightness-110">
        <Image
          src="/images/furniture-01.jpeg"
          fill
          alt="Image portrait furniture 01"
          loading="eager"
          className="object-cover "
        />
      </picture>
      <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-6 md:items-center">
        <h1 className="text-[40px] font-medium text-neutral-07 leading-[44px] md:basis-3/5 lg:text-7xl md:text-6xl md:leading-[76px] tracking-[-2px]">
          Simply Unique<span className="text-neutral-04 ">/</span><br/>Simply Better <span className="text-neutral-04">.</span>
        </h1>
        <p className="text-sm font-normal text-neutral-04 md:basis-2/5 md:text-base">
          <span className="font-semibold text-neutral-05">3legant</span> is a
          gift & decorations store based in HCMC, Vietnam. Est since 2024
        </p>
      </div>
    </aside>
  );
};

export default SliderSection;
