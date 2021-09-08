import React from "react";
import styled from "styled-components";
import Button from "../../../../components/Button/Button";
import { v4 as uuidv4 } from "uuid";

const FeelingItem = ({ img, title, desc, buttons }) => {
  return (
    <ContentItem>
      <ContentImgWrapper>
        <ContentImg src={img} alt={title} />
        <ContentWrapper>
          <ContentTitle>{title}</ContentTitle>
          <ContentDesc>{desc}</ContentDesc>
        </ContentWrapper>
      </ContentImgWrapper>

      <ContentBtns>
        {buttons.map((buttonText, i) => (
          <Button text={buttonText} large key={uuidv4()} />
        ))}
      </ContentBtns>
    </ContentItem>
  );
};

export default FeelingItem;

const ContentItem = styled.div``;
const ContentImg = styled.img`
  max-width: 100%;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
const ContentImgWrapper = styled.div`
  position: relative;
`;
const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0) 40%
  );
`;
const ContentTitle = styled.h4`
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
`;
const ContentDesc = styled.p`
  font-size: 15px;
  color: #fff;
`;
const ContentBtns = styled.div`
  display: flex;
  margin-top: 16px;
  flex-wrap: wrap;
  gap: 12px;
`;
