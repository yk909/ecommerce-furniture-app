import React from "react";
import Link from "next/link";
import tw, { TwStyle } from "twin.macro";
import {
  LinkButtonColor,
  LinkButtonBorder,
  LinkButtonOrientation,
} from "./types";
import { LinkButtonProps, Style } from "./interface";

const linkButtonBorderContainer: Record<LinkButtonBorder, TwStyle> = {
  none: tw``,
  all: tw`border-2`,
  left: tw`border-l-2`,
  right: tw`border-r-2`,
  up: tw`border-t-2`,
  down: tw`border-b-2`,
};

const linkButtonTextColor: Record<LinkButtonColor, TwStyle> = {
  none: tw``,
  blue: tw`text-blue-01`,
  white: tw`text-white-01`,
  black: tw`text-black`,
};

const linkButtonBorderColorContainer: Record<LinkButtonColor, TwStyle> = {
  none: tw``,
  black: tw`border-black`,
  blue: tw`border-blue-01`,
  white: tw`border-white-01`,
};

const linkButtonBackgroundColorContainer: Record<LinkButtonColor, TwStyle> = {
  none: tw``,
  white: tw`bg-white-01`,
  blue: tw`bg-blue-01`,
  black: tw`bg-black`,
};

const linkButtonOrientation: Record<LinkButtonOrientation, TwStyle> = {
  right: tw`flex-row justify-start`,
  left: tw`flex-row-reverse justify-end`,
};

const styles = {
  linkButtonImage: ({
    textColor = "none",
    backgroundColor = "none",
    orientation = "right",
    border = "none",
    borderColor = "none",
  }: Style) => [
    tw`inline-flex items-center`,
    linkButtonTextColor[textColor],
    linkButtonBorderContainer[border],
    linkButtonBorderColorContainer[borderColor],
    linkButtonBackgroundColorContainer[backgroundColor],
    linkButtonOrientation[orientation],
  ],
  linkButtonSolid: ({
    backgroundColor = "none",
    textColor = "none",
  }: Style) => [
    tw`block text-center rounded-md text-lg w-full px-6 py-2.5`,
    linkButtonBackgroundColorContainer[backgroundColor],
    linkButtonTextColor[textColor],
  ],
};

const LinkButtonImage = ({
  title,
  href,
  style,
  children = <></>,
}: LinkButtonProps) => {
  return (
    <Link css={styles.linkButtonImage({ ...style })} href={href}>
      {children}
      {title}
    </Link>
  );
};

export const LinkButtonImageRightLineDown = ({
  title,
  href,
  style,
  children = <></>,
}: LinkButtonProps) => {
  return (
    <LinkButtonImage
      title={title}
      href={href}
      style={{
        ...style,
        orientation: "left",
        border: "down",
      }}
    >
      {children}
    </LinkButtonImage>
  );
};

const LinkButtonSolid = ({ title, href, style }: LinkButtonProps) => {
  return (
    <Link href={href} css={styles.linkButtonSolid({ ...style })}>
      {title}
    </Link>
  );
};

export const LinkButtonSolidBlack = ({
  title,
  href,
  style,
}: LinkButtonProps) => {
  return (
    <LinkButtonSolid
      title={title}
      href={href}
      style={{
        ...style,
        backgroundColor: "black",
        textColor: "white",
      }}
    />
  );
};
