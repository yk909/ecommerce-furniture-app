"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import NotificationBar from "./ui/shared/NotificationBar";
import { GlobalStyles } from "twin.macro";
import StyledComponentsRegistry from "@/lib/registry";
import Navigator from "./ui/shared/Navigator";
import {
  NavBarWithContainer,
  NotificationBarWithContainer,
} from "./ui/container";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const maxContainer: string = "max-w-7xl m-auto";
  const navigatorStyle: string = `bg-white-01 ${maxContainer}`;
  const mainStyle: string = `${maxContainer}`;

  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <aside className="bg-white-02">
            <NotificationBarWithContainer>
              <NotificationBar />
            </NotificationBarWithContainer>
          </aside>
          <nav className={navigatorStyle}>
            <NavBarWithContainer>
              <Navigator />
            </NavBarWithContainer>
          </nav>
          <main className={mainStyle}>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
