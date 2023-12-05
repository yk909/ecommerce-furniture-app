import tw, { TwStyle } from "twin.macro";

type PaddingFormatProps =
  | "notificacionBar"
  | "navbar"
  | "none"
  | "sliderSection"
  | "banner"
  | "carousel"
  | "productValue"
  | "blogSection";

const formats: Record<PaddingFormatProps, TwStyle> = {
  none: tw``,
  banner: tw`px-8 lg:px-40`,
  navbar: tw`py-4 lg:px-40`,
  notificacionBar: tw`py-2`,
  sliderSection: tw`px-8 pb-10 lg:px-40`,
  carousel: tw`p-8 lg:px-40 lg:pt-12`,
  productValue: tw`p-8 lg:px-40 lg:pt-12`,
  blogSection: tw`py-10 px-8 lg:py-20 lg:px-40`
};

const styles = {
  paddingY: ({
    paddingFormat = "none",
  }: {
    paddingFormat: PaddingFormatProps;
  }) => [tw`px-8`, formats[paddingFormat]],
};

const WithContainer = ({
  children,
  paddingFormat = "none",
}: {
  children: React.ReactNode;
  paddingFormat: PaddingFormatProps;
}) => {
  return <div css={styles.paddingY({ paddingFormat })}>{children}</div>;
};

export const NotificationBarWithContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <WithContainer paddingFormat="notificacionBar">{children}</WithContainer>
  );
};

export const NavBarWithContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <WithContainer paddingFormat="navbar">{children}</WithContainer>;
};

export const SliderSectionWithContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <WithContainer paddingFormat="sliderSection">{children}</WithContainer>
  );
};

export const BannerWithContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <WithContainer paddingFormat="banner">{children}</WithContainer>;
};

export const CarouselWithContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <WithContainer paddingFormat="carousel">{children}</WithContainer>;
};

export const ProductValueWithContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <WithContainer paddingFormat="productValue">{children}</WithContainer>;
};

export const BlogSectionWithContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <WithContainer paddingFormat="blogSection">{children}</WithContainer>;
};