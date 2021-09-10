import React from "react";
import styled from "styled-components";
import { AiFillIdcard } from "react-icons/ai";
import { BsArrowLeftRight, BsArrowCounterclockwise } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";

const ProductService = () => {
  return (
    <ProductServices>
      <ProductServiceItem>
        <FaCarSide />
        <p>
          <span>[07-10/09] MIỄN PHÍ VẬN CHUYỂN</span>
          cho mọi đơn hàng
        </p>
      </ProductServiceItem>
      <ProductServiceItem>
        <BsArrowCounterclockwise />
        <p>
          <span>HOÀN TIỀN 100%</span>
          cho các sản phẩm không đúng với đơn hàng
        </p>
      </ProductServiceItem>
      <ProductServiceItem>
        <AiFillIdcard />
        <p>
          <span>KIỂM TRA HÀNG TRƯỚC KHI THANH TOÁN</span>
        </p>
      </ProductServiceItem>
      <ProductServiceItem>
        <BsArrowLeftRight />
        <p>
          <span>MIỄN PHÍ ĐỔI TRẢ</span>
          trong vòng 15 ngày kể từ ngày mua hàng.
        </p>
      </ProductServiceItem>
    </ProductServices>
  );
};

export default ProductService;

export const ProductServices = styled.div`
  margin-top: 5px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ProductServiceItem = styled.div`
  font-size: 14px;
  line-height: 22px;
  display: flex;

  span {
    color: #333;
    font-weight: 600;
    margin-right: 4px;
  }
  svg {
    font-size: 22px;
    margin-right: 8px;
  }
`;
