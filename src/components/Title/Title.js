import React from "react";
import styled from "styled-components";

const Title = ({ children }) => {
  return <Title1>{children}</Title1>;
};

export default Title;

const Title1 = styled.h2`
  background-color: #fff;
  font-size: clamp(24px, 5vw, 32px);
  text-transform: uppercase;
  text-align: center;
  font-weight: 800;
  margin-bottom: 40px;
`;
