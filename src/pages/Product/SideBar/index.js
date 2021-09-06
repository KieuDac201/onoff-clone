import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SideBar = () => {
  const [isShow, setIsShow] = useState(false);
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <SideBar1>
      <SideBarTop onClick={toggleShow}>
        <Title>DANH MỤC</Title>
        {isShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </SideBarTop>
      <WrapperItem show={isShow}>
        <CheckboxItem>
          <CheckboxInput type="checkbox" />
          <CheckboxLabel>Tất cả</CheckboxLabel>
        </CheckboxItem>
        <CheckboxItem>
          <CheckboxInput type="checkbox" />
          <CheckboxLabel>Đồ lót</CheckboxLabel>
        </CheckboxItem>
        <CheckboxItem>
          <CheckboxInput type="checkbox" />
          <CheckboxLabel>Quần áo</CheckboxLabel>
        </CheckboxItem>
        <CheckboxItem>
          <CheckboxInput type="checkbox" />
          <CheckboxLabel>Bít tất</CheckboxLabel>
        </CheckboxItem>
      </WrapperItem>
      <SideBarTop>
        <Title>Màu sắc</Title>
        <IoIosArrowDown />
      </SideBarTop>
      <SideBarTop>
        <Title>Kích cỡ</Title>
        <IoIosArrowDown />
      </SideBarTop>
      <SideBarTop>
        <Title>Chất liệu</Title>
        <IoIosArrowDown />
      </SideBarTop>
    </SideBar1>
  );
};

export default SideBar;

const SideBar1 = styled.div`
  padding: 5px 0;
`;
const SideBarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid #333;
  padding: 10px 0;
  svg {
    font-size: 24px;
    color: #888;
  }
`;
const WrapperItem = styled.div`
  transform-origin: top;
  transition: 0.2s linear;
  height: ${(props) => (props.show ? "105px" : "0")};
  overflow: hidden;
  padding: ${(props) => (props.show ? "10px 0" : "0")};
`;
const Title = styled.p`
  text-transform: uppercase;
  font-size: 16px;
`;
const CheckboxItem = styled.p`
  display: flex;
  align-items: center;
`;
const CheckboxInput = styled.input`
  margin-right: 8px;
  font-size: 15px;
`;
const CheckboxLabel = styled.label`
  margin-right: 8px;
  font-size: 15px;
`;
