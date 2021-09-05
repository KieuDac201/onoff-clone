import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ProductList = ({ children }) => {
  return <Products>{children}</Products>;
};

export default ProductList;

ProductList.propTypes = {
  children: PropTypes.array,
};

const Products = styled.div`
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
