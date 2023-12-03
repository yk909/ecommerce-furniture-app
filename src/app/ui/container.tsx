import tw from "twin.macro";

const formats = {
  notificacionBar: tw`py-2`,
  navbar: tw`py-4 lg:px-40`,
  none: tw``,
  sliderSection: tw`px-8 pb-10 lg:px-40`,
  banner: tw`px-8 lg:px-40`
};
type PaddingFormatProps = "notificacionBar" | "navbar" | "none" | "sliderSection" | "banner";

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
  return <WithContainer paddingFormat="sliderSection">{children}</WithContainer>;
};

export const BannerWithContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <WithContainer paddingFormat="banner">{children}</WithContainer>;
};