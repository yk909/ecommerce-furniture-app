import React from "react";
import { LinkButtonSolidBlack } from "../LinkButton";
import { Carousel } from "../../../../types/Carousel";
import Image from "next/image";

const StarIcon = () => {
  return (
    <Image
      src="/icons/star/star-icon.svg"
      alt="Start icon"
      width={16}
      height={16}
    />
  );
};

const CardRanking = ({
  title,
  star,
  price,
  lowerPrice,
  href,
  image,
  discount,
}: Carousel) => {
  return (
    <article className="flex flex-col justify-between	items-start	gap-y-3 h-full group">
      <div style={{backgroundImage: `url(${image})`}} className="flex flex-col justify-between p-3.5 bg-white-02 w-full h-full bg-contain bg-no-repeat bg-center bg-blend-multiply">
        <div className="relative font-bold">
          <p className="absolute left-0">
            <span className="px-3.5 py-1 bg-white-01 rounded mb-2 table">
              NEW
            </span>
            <span className="px-3.5 py-1 bg-green-01 rounded text-white-01">{`-${discount}%`}</span>
          </p>
          <picture className="bg-white-01 p-1.5 shadow-md rounded-full absolute right-0">
            <Image
              src="/icons/heart/line.svg"
              width={20}
              height={20}
              alt="Icon Heart"
            />
          </picture>
        </div>
        <div className="hidden group-hover:block">
          <LinkButtonSolidBlack href={href} title="Add to cart" />
        </div>
      </div>
      <div className="bg-white-01">
        <div className="flex flex-row">
          {[...Array(star)].map((x, index) => (
            <span key={index}>
              <StarIcon />
            </span>
          ))}
        </div>
        <span className="text-base font-semibold">{title}</span>
        <p className="text-sm font-semibold ">
          {`$${price}`}
          {lowerPrice && (
            <s className="ml-3 text-neutral-04 inline font-normal	">{`$${lowerPrice}`}</s>
          )}
        </p>
      </div>
    </article>
  );
};

export default CardRanking;
