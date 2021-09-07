import React, { useState } from "react";
import storeSystemImg from "assets/images/store.jpg";
import styled from "styled-components";

const StoreSystem = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  return (
    <Wrapper>
      {isMobile ? (
        <FallbackImg>Hệ thống cửa hàng</FallbackImg>
      ) : (
        <Img src={storeSystemImg} alt="store system" />
      )}
    </Wrapper>
  );
};

export default StoreSystem;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 110px;
  margin-bottom: 25px;
`;
const Img = styled.img`
  max-width: 100%;
`;
const FallbackImg = styled.h3`
  width: 100%;
  height: 360px;
  font-size: clamp(30px, 5vw, 32px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
`;
