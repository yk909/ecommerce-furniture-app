import React from "react";
import {
  BodyBanner,
  ContenHeaderBanner,
  ContentBanner,
  PictureBanner,
} from "./twinStyle";
import { LinkButtonImageRightLineDown } from "../../shared/LinkButton";
import Image from "next/image";

const Banner = () => {
  return (
    <BodyBanner>
      <PictureBanner>
        <Image src="/images/furniture-02.jpeg" fill alt="" style={{objectFit: "cover"}}/>
      </PictureBanner>
      <ContentBanner>
        <div>
          <ContenHeaderBanner>
            <span>SALE UP TO 35% OFF</span>
            <h3>
              HUNDREDS of <br />
              New lower prices!
            </h3>
            <p>
              It’s more affordable than ever to give every room in your home a
              stylish makeover
            </p>
          </ContenHeaderBanner>
          <div>
            <LinkButtonImageRightLineDown title="Shop Now" href="#">
              <Image
                src="/icons/arrow/arrow-right.svg"
                width={20}
                height={20}
                alt="Icon Arrow"
              />
            </LinkButtonImageRightLineDown>
          </div>
        </div>
      </ContentBanner>
    </BodyBanner>
  );
};

export default Banner;
