import React from "react";
import {
  BodyNewsLetter,
  ContentNewsLetter,
  FooterNewsLetter,
  HeaderNewsLetter,
  InputNewsLetter,
} from "./twinStyle";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <BodyNewsLetter>
      <ContentNewsLetter>
        <HeaderNewsLetter>
          <span>Join Our Newsletter</span>
          <p>Sign up for deals, new products and promotions</p>
        </HeaderNewsLetter>
        <FooterNewsLetter>
          <InputNewsLetter>
            <input type="email" placeholder="Email address" />
            <div>
              <Image
                src="/icons/mail.svg"
                width={24}
                height={24}
                alt="Email Icon"
              />
            </div>
          </InputNewsLetter>
          <button type="submit">Signup</button>
        </FooterNewsLetter>
      </ContentNewsLetter>
    </BodyNewsLetter>
  );
};

export default NewsLetter;
