import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../../components/Button/Button";

const CateItem = ({ img, name }) => {
  const paths = {
    nam: "/do-nam",
    nữ: "/do-nu",
    "trẻ em": "/do-tre-em",
  };
  return (
    <Container>
      <CateImg src={img} />
      <CateInfo>
        <CateName>Đồ {name}</CateName>
        <Btn to={paths[name.toLowerCase()]}>
          <Button text="Xem ngay" />
        </Btn>
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
const Btn = styled(Link)`
  z-index: 2;
`;
