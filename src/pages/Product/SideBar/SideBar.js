import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  CheckboxInput,
  CheckboxItem,
  CheckboxLabel,
  SideBar1,
  SideBarTop,
  WrapperItem,
  Title,
} from "./styled";

const SideBar = ({ filterList, setFilterList }) => {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  const handleOnChange = (e) => {
    setFilterList({ ...filterList, [e.target.value]: e.target.checked });
  };

  return (
    <SideBar1>
      <SideBarTop onClick={toggleShow}>
        <Title>DANH MỤC</Title>
        {isShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </SideBarTop>
      <WrapperItem show={isShow}>
        <CheckboxItem>
          <CheckboxInput
            type="checkbox"
            value="đồ lót"
            id="underwear"
            onChange={(e) => handleOnChange(e)}
          />
          <CheckboxLabel htmlFor="underwear">Đồ lót</CheckboxLabel>
        </CheckboxItem>
        <CheckboxItem>
          <CheckboxInput
            type="checkbox"
            value="quần áo"
            id="clothes"
            onChange={(e) => handleOnChange(e)}
          />
          <CheckboxLabel htmlFor="clothes">Quần áo</CheckboxLabel>
        </CheckboxItem>
        <CheckboxItem>
          <CheckboxInput
            type="checkbox"
            value="bít tất"
            id="sock"
            onChange={(e) => handleOnChange(e)}
          />
          <CheckboxLabel htmlFor="sock">Bít tất</CheckboxLabel>
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
