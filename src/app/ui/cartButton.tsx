import Image from "next/image";
import React from "react";

interface CartButtonProps {
  digit: number;
  children: React.ReactNode;
}

const CartButton = ({ digit, children }: CartButtonProps) => {
  return (
    <div className="flex items-center">
      {children}
      <div className="relative ml-1.5 w-5 h-5 p-1.5 bg-neutral-07 rounded-full text-white-01 font-bold	z-10">
        <span className="text-xs absolute top-[3px] left-[30%]">{digit}</span>
      </div>
    </div>
  );
};

interface ShoppingBagCartButtonProps {
  digit: number;
}

export const ShoppingBagCartButton = ({
  digit,
}: ShoppingBagCartButtonProps) => {
  return (
    <CartButton digit={digit}>
      <Image
        src="/icons/outline/shopping-bag.svg"
        width={24}
        height={24}
        alt="Icon shopping bag"
      />
    </CartButton>
  );
};

interface HeartButtonProps {
  digit: number;
}

export const HeartButton = ({
  digit,
}: HeartButtonProps) => {
  return (
    <CartButton digit={digit}>
      <Image
        src="/icons/heart/line.svg"
        width={24}
        height={24}
        alt="Icon heart"
      />
    </CartButton>
  );
};

