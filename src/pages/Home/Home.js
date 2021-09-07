import React from "react";
import Banner from "./Banner/Banner";
import BlockFeeling from "./BlockFeeling/BlockFeeling";
import Cate from "./Categories/Categories";
import SomeProduct from "./SomeProduct/SomeProduct";
import StoreSystem from "./StoreSystem/StoreSystem";

const Home = () => {
  return (
    <>
      <Banner />
      <Cate />
      <SomeProduct />
      <BlockFeeling />
      <StoreSystem />
    </>
  );
};

export default Home;
