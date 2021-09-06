import React from "react";
import { BsChevronRight } from "react-icons/bs";
import styled from "styled-components";

const Pagination = () => {
  return (
    <PagiList>
      <PagiItem>1</PagiItem>
      <PagiItem>2</PagiItem>
      <PagiItem>3</PagiItem>
      <PagiItem>
        <BsChevronRight />
      </PagiItem>
    </PagiList>
  );
};

export default Pagination;

const PagiList = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 100px 0;
`;
const PagiItem = styled.button`
  width: 32px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  margin: 0 5px;
  background: none;
  border: 1px solid #ccc;
  cursor: pointer;
`;
