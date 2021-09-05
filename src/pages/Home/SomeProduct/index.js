import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Container from "../../../components/Container";
import ProductItem from "../../../components/ProductItem";
import ProductList from "../../../components/ProductList";
import Title from "../../../components/Title";

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
