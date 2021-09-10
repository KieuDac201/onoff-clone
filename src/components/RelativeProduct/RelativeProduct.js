import React, { useContext, useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import styled from "styled-components";
import { AppContext } from "../../App";
import { ProductList } from "../../pages/Home/SomeProduct/SomeProduct";

const RelativeProduct = ({ gender }) => {
  const { products } = useContext(AppContext);
  const [relativeProducts, setRelativeProducts] = useState([]);

  useEffect(() => {
    let arrFiltered = products.filter(
      (product) => product.gender?.toLowerCase() === gender?.toLowerCase()
    );
    setRelativeProducts(arrFiltered);
  }, [gender]);
  return (
    <Wrapper>
      <RelativeProductTitle>SẢN PHẨM LIÊN QUAN</RelativeProductTitle>
      <ProductList>
        {relativeProducts.slice(0, 5).map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            price={product.price}
            images={product.images}
            id={product.id}
            key={product.id}
          />
        ))}
      </ProductList>
    </Wrapper>
  );
};

export default RelativeProduct;

const Wrapper = styled.div`
  margin-top: 80px;
`;
const RelativeProductTitle = styled.h4`
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
`;
