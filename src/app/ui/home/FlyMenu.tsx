import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { NavigationProps, navigation } from "./Navigator";
import { ButtonSolidBlack } from "../button";
import { HeartButton, ShoppingBagCartButton } from "../cartButton";

interface NavigationMenuItemProps extends NavigationProps {
  children?: React.ReactElement;
}

const MenuItem = ({
  name,
  current,
  href,
  children,
}: NavigationMenuItemProps) => {
  return (
    <ul className="pb-2 border-b-2 border-white-03">
      <li className="pb-2 flex justify-between">
        <Link href={href}>{name}</Link>
        {children}
      </li>
    </ul>
  );
};

const TopFlyMenu = ({
  onNav,
}: {
  onNav: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <article className="flex flex-col gap-y-4">
      <div className="flex justify-between">
        <span className="text-base">3legant.</span>
        <button onClick={() => onNav((nav) => !nav)}>
          <Image
            alt="Icon close"
            src="/icons/close.svg"
            width={24}
            height={24}
          />
        </button>
      </div>
      <form>
        <fieldset className="relative">
          <input
            type="text"
            className="px-4 pl-12 h-[46px] text-sm focus:outline-none bg-white text-neutral-04 rounded-md border-[1px] border-neutral-04 w-full"
            placeholder="Search"
          />
          <div className="absolute left-4 inset-y-0 flex items-center">
            <Image
              src="/icons/interface/outline/search-02.svg"
              width={24}
              height={24}
              alt="Search icon"
            />
          </div>
        </fieldset>
      </form>
      <div className="flex flex-col gap-y-4">
        {navigation.map((nav) => (
          <div key={nav.id} className="text-sm text-neutral-07">
            <MenuItem {...nav}>
              {nav.navigators && (
                <Image
                  src="/icons/chevron-down.svg"
                  alt="Icon chevron down"
                  width={24}
                  height={24}
                />
              )}
            </MenuItem>
          </div>
        ))}
      </div>
    </article>
  );
};

const navigationShop: NavigationProps[] = [
  {
    id: 1,
    name: "Cart",
    href: "#",
    current: true,
  },
  {
    id: 2,
    name: "Whislist",
    href: "#",
    current: true,
  },
];

const SocialsMedia = () => {
  return (
    <div className="flex gap-x-6">
      <Image
        src="/icons/social/outline/instagram.svg"
        width={24}
        height={24}
        alt="Icon instagram"
      />
      <Image
        src="/icons/social/outline/facebook.svg"
        width={24}
        height={24}
        alt="Icon facebook"
      />
      <Image
        src="/icons/social/outline/youtube.svg"
        width={24}
        height={24}
        alt="Icon youtube"
      />
    </div>
  );
};

const BottomFlyMenu = () => {
  const [cart] = useState(0);
  return (
    <article className="flex flex-col justify-between min-h-[210px]">
      <div className="flex flex-col gap-y-4">
        <div className="text-lg text-neutral-04">
          <MenuItem name={navigationShop[0].name} href={navigation[0].href}>
            <ShoppingBagCartButton digit={cart} />
          </MenuItem>
        </div>
        <div className="text-lg text-neutral-04">
          <MenuItem name={navigationShop[1].name} href={navigation[1].href}>
            <HeartButton digit={cart} />
          </MenuItem>
        </div>
      </div>
      <ButtonSolidBlack href="#" title="Sign In" />
      <SocialsMedia />
    </article>
  );
};

const FlyMenu = ({
  state,
  onNav,
}: {
  state: boolean;
  onNav: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const style = !state && "translate-x-[-100%]";

  return (
    <aside
      className={`transition ease-in-out absolute top-0 left-0 duration-500 ${style} bottom-0 bg-white-01 w-[90%] z-50 `}
    >
      <section className="flex flex-col justify-between h-full p-6">
        <TopFlyMenu onNav={onNav} />
        <BottomFlyMenu />
      </section>
    </aside>
  );
};

export default FlyMenu;
