import {
  LinkButtonBorder,
  LinkButtonColor,
  LinkButtonOrientation,
} from "./types";

export interface Style {
  textColor?: LinkButtonColor;
  backgroundColor?: LinkButtonColor;
  orientation?: LinkButtonOrientation;
  border?: LinkButtonBorder;
  borderColor?: LinkButtonColor;
}

export interface LinkButtonProps {
  title: string;
  href: string;
  style?: Style;
  children?: React.ReactNode;
}
