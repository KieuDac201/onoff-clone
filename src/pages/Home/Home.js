import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "./Banner/Banner";
import BlockFeeling from "./BlockFeeling/BlockFeeling";
import Cate from "./Categories/Categories";
import SomeProduct from "./SomeProduct/SomeProduct";
import StoreSystem from "./StoreSystem/StoreSystem";

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
