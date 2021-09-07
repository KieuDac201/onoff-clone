import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Pagination = ({ totalPage, setCurrentPage, currentPage }) => {
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrePage = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <PagiList>
      {currentPage !== 1 && (
        <PagiItem onClick={handlePrePage}>
          <BsChevronLeft />
        </PagiItem>
      )}
      {new Array(totalPage).fill(null).map((item, index) => {
        return (
          <PagiItem
            key={uuidv4()}
            isActive={currentPage === index + 1}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </PagiItem>
        );
      })}

      {currentPage !== totalPage && (
        <PagiItem onClick={handleNextPage}>
          <BsChevronRight />
        </PagiItem>
      )}
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
  background: ${(props) => (props.isActive ? "#000" : "none")};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
  border: 1px solid #ccc;
  cursor: pointer;
`;
