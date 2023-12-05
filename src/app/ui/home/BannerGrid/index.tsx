import Image from "next/image";
import React from "react";
import tw, { TwStyle } from "twin.macro";
import { LinkButtonImageRightLineDown } from "../../shared/LinkButton";

type FurnitureStoreImage = "furniture-01" | "furniture-02" | "furniture-03";

interface FurnitureStoreProps {
  furniture?: FurnitureStoreImage;
}

const furnitureStore: Record<FurnitureStoreImage, TwStyle> = {
  "furniture-01": tw`h-[377px] bg-furniture-01 bg-bottom bg-contain lg:row-span-2`,
  "furniture-02": tw`h-[180px] bg-furniture-02 bg-right bg-contain flex items-end	`,
  "furniture-03": tw`h-[180px] bg-furniture-03 bg-right bg-[length:170px] flex items-end lg:row-start-2 lg:col-start-2`,
};

const styles = {
  furniture: ({ furniture = "furniture-01" }: FurnitureStoreProps) => [
    tw`relative bg-white-02 p-8 w-full bg-blend-multiply bg-no-repeat`,
    furnitureStore[furniture],
  ],
};

interface BannerItemProps {
  furniture: FurnitureStoreImage;
  title: string;
  href: string;
}

const BannerGridItem = ({ furniture, title, href }: BannerItemProps) => {
  return (
    <article css={styles.furniture({ furniture })}>
      <div>
        <h3 className="text-[28px]">{title}</h3>
        <div className="text-sm mt-2">
          <LinkButtonImageRightLineDown
            title="Shop Now"
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
        </div>
      </div>
    </article>
  );
};

const BannerGrid = () => {
  return (
    <aside className="grid grid-cols-1 auto-rows-auto gap-y-4 gap-x-6 lg:grid-cols-2 lg:grid-rows-2">
      <BannerGridItem title="Living Room" furniture="furniture-01" href="" />
      <BannerGridItem title="Bedroom" furniture="furniture-02" href="" />
      <BannerGridItem title="Kitchen" furniture="furniture-03" href="" />
    </aside>
  );
};

export default BannerGrid;
