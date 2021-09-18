import React, { useState } from "react";
import styled from "styled-components";
import { BiPlus, BiMinus } from "react-icons/bi";
import { PropTypes } from "react";

const ProductInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Box>
      <BoxTop onClick={toggleIsOpen}>
        <BoxTitle>THÔNG TIN SẢN PHẨM</BoxTitle>
        <BoxIcon>{isOpen ? <BiMinus /> : <BiPlus />}</BoxIcon>
      </BoxTop>
      <BoxContent isOpen={isOpen}>
        Áo bé gái Dri-balance được sản xuất bằng công nghệ đặc biệt, dệt vải 2
        mặt: Cotton và sợi tổng hợp, giúp tăng cường khả năng thoát hơi ẩm ra
        bên ngoài, ngăn thấm ngược, giữ cơ thể luôn khô thoáng. Thiết kế đơn
        giản với gam màu tươi sáng, kiểu dáng ôm chạm nhẹ cơ thể, áo cộc tay
        Dri- balance cho bé gái luôn thoải mái khi tham gia các vận động ngoài
        trời.
      </BoxContent>
    </Box>
  );
};

export default ProductInfo;

const Box = styled.div`
  margin-top: 35px;
`;
const BoxTop = styled.div`
  padding: 16px 8px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
const BoxTitle = styled.h4``;
const BoxIcon = styled.div`
  font-size: 22px;
`;
const BoxContent = styled.p`
  transition: 0.2s linear;
  height: ${(props) => (props.isOpen ? "auto" : "0px")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  overflow: hidden;
  font-size: 14px;
  padding: ${(props) => (props.isOpen ? "10px" : "0px")};
`;
