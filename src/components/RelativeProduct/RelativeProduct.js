import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getAllProduct } from "../../features/products/productSlice";
import { ProductList } from "../../pages/Home/SomeProduct/SomeProduct";
import ProductItem from "../../pages/Product/ProductItem/ProductItem";

const RelativeProduct = ({ gender }) => {
  const [relativeProducts, setRelativeProducts] = useState([]);
  const products = useSelector(getAllProduct);

  useEffect(() => {
    let arrFiltered = products.filter(
      (product) => product.gender?.toLowerCase() === gender?.toLowerCase()
    );
    setRelativeProducts(arrFiltered);
  }, [gender, products]);
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
