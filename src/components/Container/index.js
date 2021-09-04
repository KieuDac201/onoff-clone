import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <Container1>{children}</Container1>;
};

export default Container;

const Container1 = styled.div`
  max-width: 1320px;
  padding: 0 20px;
  margin: 0 auto;
`;
