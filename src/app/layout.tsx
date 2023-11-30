"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import NotificationBar from "./ui/home/NotificationBar";
import { GlobalStyles } from "twin.macro";
import StyledComponentsRegistry from "@/lib/registry";
import Navigator from "./ui/home/Navigator";
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
          <nav className="bg-white-01">
            <NavBarWithContainer>
              <Navigator />
            </NavBarWithContainer>
          </nav>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
