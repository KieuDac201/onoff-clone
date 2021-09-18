import React from "react";
import styled from "styled-components";
import { AiOutlineBarChart } from "react-icons/ai";

const ProductSizeCo = ({ setProductSize, productSize }) => {
  return (
    <ProductSize>
      <ProductSizeTitle>KÍCH CỠ: {productSize}</ProductSizeTitle>
      <ProductSizeList>
        <ProductSizeItem
          active={"s" === productSize}
          onClick={() => setProductSize("s")}
        >
          S
        </ProductSizeItem>
        <ProductSizeItem
          active={"m" === productSize}
          onClick={() => setProductSize("m")}
        >
          M
        </ProductSizeItem>
        <ProductSizeItem
          active={"l" === productSize}
          onClick={() => setProductSize("l")}
        >
          L
        </ProductSizeItem>
        <ProductSizeItem
          active={"xl" === productSize}
          onClick={() => setProductSize("xl")}
        >
          XL
        </ProductSizeItem>
        <ProductSizeInfo>
          <AiOutlineBarChart />
          bảng size
        </ProductSizeInfo>
      </ProductSizeList>
    </ProductSize>
  );
};

export default ProductSizeCo;

const ProductSize = styled.div`
  margin-top: 35px;
`;
const ProductSizeTitle = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
`;
const ProductSizeList = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
`;
export const ProductSizeItem = styled.p`
  width: 48px;
  height: 48px;
  border: ${(props) => (props.active ? "2px solid #000" : "1px solid #e0e0e0")};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "600" : "normal")};
`;
const ProductSizeInfo = styled.div`
  display: flex;
  align-items: center;
`;
