import React from "react";
import { LinkButtonImageRightLineDown } from "../../shared/LinkButton";
import Image from "next/image";
import _carouselProducts from "../../../../data/data.carousel.json";
import { Carousel } from "../../../../types/Carousel";
import CardRanking from "../../shared/CardRanking";
import { BodyProductCarousel, MoreProducts, SectionCardRanking, TitleHeader } from "./twinStyle";

const carouselProducts = _carouselProducts as Carousel[];

const ProductCarousel = () => {
  return (
    <BodyProductCarousel >
      <TitleHeader>New Arrivals</TitleHeader>
      <SectionCardRanking>
        {carouselProducts.map((product) => (
          <li key={product.id} className="w-[231px] h-[392px] flex-none">
            <CardRanking {...product} />
          </li>
        ))}
      </SectionCardRanking>
      <MoreProducts>
        <LinkButtonImageRightLineDown
          title="More Products"
          href="#"
          style={{
            backgroundColor: "none",
            textColor: "black",
            borderColor: "black",
          }}
        >
          <Image
            src="/icons/arrow/arrow-right.svg"
            width={16}
            height={16}
            alt="Icon arrow right"
            className="ml-1"
          />
        </LinkButtonImageRightLineDown>
      </MoreProducts>
    </BodyProductCarousel>
  );
};

export default ProductCarousel;
