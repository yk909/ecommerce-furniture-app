import React from "react";
import {
  BodyFooter,
  CopyrightFooter,
  HeaderFooter,
  IconsFooter,
  LogoFooter,
  NavigatorFooter,
  SocialFooter,
} from "./twinStyle";
import Link from "next/link";
import { navigation } from "../Navigator";
import Image from "next/image";

const Footer = () => {
  return (
    <BodyFooter>
      <HeaderFooter>
        <LogoFooter>
          <span>3legant.</span>
          <div></div>
          <p>Gift & Decoration Store</p>
        </LogoFooter>
        <NavigatorFooter>
          { navigation.map( nav => <li key={nav.id}><Link href={nav.href}>{nav.name}</Link></li>)}
        </NavigatorFooter>
      </HeaderFooter>
      <SocialFooter>
        <IconsFooter>
          <Image 
            src="/icons/social/white/instagram.svg"
            width={24}
            height={24}
            alt="Icon instagram"
          />
          <Image 
            src="/icons/social/white/facebook.svg"
            width={24}
            height={24}
            alt="Icon facebook"
          />
          <Image 
            src="/icons/social/white/youtube.svg"
            width={24}
            height={24}
            alt="Icon youtube"
          />
        </IconsFooter>
        <CopyrightFooter>
          <div>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
          </div>
          <span>Copyright © 2023 3legant. All rights reserved</span>
        </CopyrightFooter>
      </SocialFooter>
    </BodyFooter>
  );
};

export default Footer;
