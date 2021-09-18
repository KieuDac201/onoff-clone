import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Container from "../../../components/Container";
import ProductItem from "../../Product/ProductItem/ProductItem";
import Title from "../../../components/Title/Title";
import { getAllProduct } from "../../../features/products/productSlice";

const SomeProduct = () => {
  const products = useSelector(getAllProduct);

  return (
    <Wrapper>
      <Container>
        <Title>sản phẩm mới</Title>
        <ProductList>
          {products.slice(0, 20).map((product) => {
            return <ProductItem {...product} key={product.id} />;
          })}
        </ProductList>
      </Container>
    </Wrapper>
  );
};

export default SomeProduct;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 50px 0;
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
