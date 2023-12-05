import React from "react";
import Image from "next/image";
import { BodyCardValue, ContentCardValue, HeaderCardValue } from "./twinStyle";
import { Value } from "../../../../types/Value";

const CardValue = ({
    title,
    description,
    image,
}:Value) => {
  return (
    <BodyCardValue>
      <HeaderCardValue>
        <Image src={image} width={48} height={48} alt={`Logo of ${title}`} />
      </HeaderCardValue>
      <ContentCardValue>
        <span>{title}</span>
        {description}
      </ContentCardValue>
    </BodyCardValue>
  );
};

export default CardValue;
