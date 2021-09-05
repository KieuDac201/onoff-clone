import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "./Banner";
import BlockFeeling from "./BlockFeeling";
import Cate from "./Categories";
import SomeProduct from "./SomeProduct";
import StoreSystem from "./StoreSystem";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Cate />
      <SomeProduct />
      <BlockFeeling />
      <StoreSystem />
      <Footer />
    </>
  );
};

export default Home;
