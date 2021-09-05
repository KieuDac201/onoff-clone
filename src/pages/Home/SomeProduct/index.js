import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Container from "../../../components/Container";
import ProductItem from "../../../components/ProductItem";
import ProductList from "../../../components/ProductList";

const SomeProduct = () => {
  let products = useSelector((state) => state.allProduct.slice(0, 10));

  return (
    <Wrapper>
      <Container>
        <Title>sản phẩm mới</Title>
        <ProductList>
          {products.map((product) => {
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
const Title = styled.h2`
  background-color: #fff;
  font-size: clamp(26px, 16vw, 32px);
  text-transform: uppercase;
  text-align: center;
  font-weight: 800;
  margin-bottom: 40px;
`;
