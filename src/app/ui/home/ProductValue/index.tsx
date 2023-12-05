import React from "react";
import _productValues from "../../../../data/data.value.json";
import { Value } from "../../../../types/Value";
import CardValue from "../../shared/CardValue";
import { BodyProductValue } from "./twinStyle";

const productValues = _productValues as Value[];

const ProductValue = () => {
  const ProductValue = () =>
    productValues.map((value) => (
      <li key={value.id}>
        <CardValue {...value} />
      </li>
    ));

  return (
    <BodyProductValue>
      <ul>
        <ProductValue />
      </ul>
    </BodyProductValue>
  );
};

export default ProductValue;
