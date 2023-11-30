import tw from "twin.macro";

const formats = {
  notificacionBar: tw`py-2`,
  navbar: tw`py-4`,
  none: tw``,
};

type PaddingFormatProps = "notificacionBar" | "navbar" | "none";

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
