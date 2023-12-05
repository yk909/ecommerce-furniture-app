import React from "react";
import {
  BodyCardArticle,
  ContentCardArticle,
  HeaderCardArticle,
} from "./twinStyle";
import Image from "next/image";
import { Article } from "../../../../types/Article";
import { LinkButtonImageRightLineDown } from "../LinkButton";

const CardArticle = ({ title, href, image }: Article) => {
  return (
    <BodyCardArticle>
      <HeaderCardArticle>
        <Image src={image} fill alt={`Logo of ${title}`} style={{ objectFit: "cover"}}/>
      </HeaderCardArticle>
      <ContentCardArticle>
        <span>{title}</span>
        <div>
          <LinkButtonImageRightLineDown title="Read More" href={href}>
            <Image
              src="/icons/arrow/arrow-right.svg"
              width={16}
              height={16}
              alt="Icon Arrow"
            />
          </LinkButtonImageRightLineDown>
        </div>
      </ContentCardArticle>
    </BodyCardArticle>
  );
};

export default CardArticle;
