import React from "react";
import styled from "styled-components";

const CateItem = ({ img, name }) => {
  return (
    <Container>
      <CateImg src={img} />
      <CateInfo>
        <CateName>Đồ {name}</CateName>
        <CateBtn>Xem ngay</CateBtn>
      </CateInfo>
    </Container>
  );
};

export default CateItem;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
const CateImg = styled.img`
  max-width: 100%;
`;
const CateInfo = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;

  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #787878;
    opacity: 0.4;
  }
`;
const CateName = styled.h4`
  text-transform: uppercase;
  margin-bottom: 10px;
  z-index: 2;
  font-weight: 500;
  font-size: 18px;
`;
const CateBtn = styled.div`
  text-transform: uppercase;
  margin-bottom: 10px;
  height: 32px;
  width: 110px;
  text-align: center;
  line-height: 32px;
  border: 1px solid #231f20;
  z-index: 2;
  color: #231f20;
  cursor: pointer;

  :hover {
    background: #000;
    color: #fff;
    transition: 0.2s ease-in-out;
  }
`;
