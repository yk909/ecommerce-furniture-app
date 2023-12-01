import Image from "next/image";
import React, { useEffect, useState } from "react";
import FlyMenu from "./FlyMenu";
import { ShoppingBagCartButton } from "../cartButton";
import Link from "next/link";

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
      },
    ],
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
      },
    ],
  },
  {
    id: 4,
    name: "Contact Us",
    href: "#",
    current: true,
  },
];

const NavItem = ({ name, href, current }: NavigationProps) => {
  return (
    <Link href={href} className="text-sm text-neutral-04">
      {name}
    </Link>
  );
};

const MapNavItem = () =>
  navigation.map((nav) => (
    <li key={nav.id}>
      <NavItem {...nav} />
    </li>
  ));

const Navigator = () => {
  const [car] = useState(0);
  const [openNav, setOpenNav] = useState(false);
  const [hamburger, setHamburger] = useState(true);
  useEffect(() => {
    console.log(window.innerWidth)
    window.addEventListener("resize", () =>
      window.innerWidth >= 768 ? setHamburger(false) : setHamburger(true)
    );
  }, []);

  return (
    <>
      <FlyMenu state={openNav} onNav={setOpenNav} />
      <div className="flex items-center justify-between">
        <p className="flex items-center md:text-2xl	">
          {hamburger && (
            <button onClick={() => setOpenNav(!openNav)}>
              <Image
                src="/icons/menu/outline/menu-line-horizontal.svg"
                width={24}
                height={24}
                alt="Icon menu"
              />
            </button>
          )}
          3legant.
        </p>
        {!hamburger && (
          <ul className="flex gap-x-10">
            <MapNavItem />
          </ul>
        )}
        <ShoppingBagCartButton digit={car} />
      </div>
    </>
  );
};

export default Navigator;
