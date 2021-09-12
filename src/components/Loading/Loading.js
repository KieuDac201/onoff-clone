import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <ProductLoading>
      <LoadingImg src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" />
    </ProductLoading>
  );
};

export default Loading;

const ProductLoading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
`;
const LoadingImg = styled.img`
  position: absolute;
  top: 30vh;
  left: 50%;
  width: 50px;
  transform: translate(-50%, -50%);
  background: #fff;
`;
