import React from "react";
import Container from "../../../components/Container";
import styled from "styled-components";
import FeelingItem from "./FeelingItem";
import dataFeeling from "./dataFeeling";
import { v4 as uuidv4 } from "uuid";

const BlockFeeling = () => {
  return (
    <Container>
      <Title>Feeling good</Title>
      <Desc>
        Thương hiệu đồ lót mang tới trải nghiệm thoải mái mỗi ngày cho mọi
        người.
      </Desc>
      <Content>
        {dataFeeling.map((item) => (
          <FeelingItem {...item} key={uuidv4()} />
        ))}
      </Content>
    </Container>
  );
};

export default BlockFeeling;

const Title = styled.h3`
  font-size: clamp(32px, 6vw, 48px);
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
`;
const Desc = styled.p`
  font-size: clamp(20px, 3vw, 24px);
  text-align: center;
  margin: 0 auto;
  margin-bottom: 90px;
  max-width: 550px;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
