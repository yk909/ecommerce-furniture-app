import Image from "next/image";
import React, { useEffect, useState } from "react";
import FlyMenu from "./FlyMenu";
import { ShoppingBagCartButton } from "../cartButton";

export interface NavigationProps {
  id?: number;
  name: string;
  href: string;
  current?: boolean;
  navigators?: NavigationProps[];
}

export const navigation: NavigationProps[] = [
  {
    id: 1,
    name: "Home",
    href: "#",
    current: true,
  },
  {
    id: 2,
    name: "Shop",
    href: "#",
    current: true,
    navigators: [
      {
        id: 200,
        name: "Living Room",
        href: "#",
        current: true,
      }
    ]
  },
  {
    id: 3,
    name: "Product",
    href: "#",
    current: true,
    navigators: [
      {
        id: 300,
        name: "Living Room",
        href: "#",
        current: true,
      }
    ]
  },
  {
    id: 4,
    name: "Contact Us",
    href: "#",
    current: true,
  },
];

const Navigator = () => {
  const [car] = useState(0);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1280 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      {openNav && <FlyMenu onNav={setOpenNav} />}
      <div className="flex items-center justify-between">
        <p className="flex items-center">
          <button onClick={() => setOpenNav(!openNav)}>
            <Image
              src="/icons/menu/outline/menu-line-horizontal.svg"
              width={24}
              height={24}
              alt="Icon menu"
            />
          </button>3legant.
        </p>
        <ShoppingBagCartButton digit={car} />
      </div>
    </>
  );
};

export default Navigator;
