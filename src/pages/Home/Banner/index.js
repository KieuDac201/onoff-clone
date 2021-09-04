import React from "react";
import styled from "styled-components";
import bannerImg from "../../../assets/images/banner.jpg";
import bannerImgMobile from "../../../assets/images/banner-mobile.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Link to="/nam">
      <Wrapper></Wrapper>
    </Link>
  );
};

export default Banner;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 65px;
  min-height: min(60vw, 90vh);
  background: center / cover no-repeat url(${bannerImg});
  @media (max-width: 687px) {
    background: center / cover no-repeat url(${bannerImgMobile});
    min-height: 105vh;
  }
  @media (max-width: 550px) {
    min-height: 90vh;
  }
  @media (max-width: 450px) {
    min-height: 75vh;
  }
`;
