import Link from "next/link";
import React from "react";
import tw from "twin.macro";

export enum ButtonTextColor {
  blue = "text-blue-01",
  white = "text-white-01",
}

export enum ButtonBackgroundColor {
  white = "bg-white-01",
  black = "bg-black",
  none = "bg-transparent",
}

const buttonBorderContainer = {
  none: tw``,
  all: tw`border-2`,
  left: tw`border-l-2`,
  right: tw`border-r-2`,
  up: tw`border-t-2`,
  down: tw`border-b-2`,
};
const buttonBorderColorContainer = {
  none: tw``,
  black: tw`border-black`,
  blue: tw`border-blue-01`,
};

const styles = {
  border: ({
    border = "none",
    borderColor = "none",
  }: {
    border: ButtonBorder;
    borderColor: ButtonBorderColor;
  }) => [
    tw``,
    buttonBorderContainer[border],
    buttonBorderColorContainer[borderColor],
  ],
};

type ButtonBorder = "none" | "all" | "left" | "right" | "up" | "down";
type ButtonBorderColor = "none" | "black" | "blue";

interface ButtonProps {
  title: string;
  color: ButtonTextColor;
  backgroundColor: ButtonBackgroundColor;
  orientation?: "left" | "right";
  children: React.ReactNode;
  border?: ButtonBorder;
  borderColor?: ButtonBorderColor;
}

interface ButtonImageProps {
  title: string;
  color: ButtonTextColor;
  backgroundColor: ButtonBackgroundColor;
  children: React.ReactNode;
  borderColor?: ButtonBorderColor;
}

export const ButtonImage = ({
  title,
  color,
  backgroundColor,
  orientation = "left",
  border = "none",
  borderColor = "none",
  children = <></>,
}: ButtonProps) => {
  const styleOrientation = orientation === "right" && "flex-row-reverse";
  const style = `flex content-center ${styleOrientation} ${color} ${backgroundColor}`;

  return (
    <button className={style} css={styles.border({ border, borderColor })}>
      {children}
      {title}
    </button>
  );
};

export const ButtonImageRightLineDown = ({
  title,
  color,
  backgroundColor = ButtonBackgroundColor.none,
  borderColor = "none",
  children = <></>,
}: ButtonImageProps) => {
  return (
    <ButtonImage
      title={title}
      color={color}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      orientation="right"
      border="down"
    >
      {children}
    </ButtonImage>
  );
};

interface ButtonSolidProps {
  title: string;
  href: string;
  backgroundColor: ButtonBackgroundColor;
  textColor: ButtonTextColor;
}

const ButtonSolid = ({
  title,
  href,
  backgroundColor,
  textColor,
}: ButtonSolidProps) => {
  const style = `block text-center text-lg rounded-md	w-full px-6 py-2.5 ${backgroundColor} ${textColor}`;
  return (
    <Link href={href} className={style}>
      {title}
    </Link>
  );
};

interface ButtonSolidBlackProps {
  title: string;
  href: string;
}

export const ButtonSolidBlack = ({ title, href }: ButtonSolidBlackProps) => {
  return (
    <ButtonSolid
      title={title}
      href={href}
      backgroundColor={ButtonBackgroundColor.black}
      textColor={ButtonTextColor.white}
    />
  );
};
