import { motion } from "framer-motion";
import React from "react";
import Banner from "./Banner/Banner";
import BlockFeeling from "./BlockFeeling/BlockFeeling";
import Cate from "./Categories/Categories";
import SomeProduct from "./SomeProduct/SomeProduct";
import StoreSystem from "./StoreSystem/StoreSystem";

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Banner />
      <Cate />
      <SomeProduct />
      <BlockFeeling />
      <StoreSystem />
    </motion.div>
  );
};

export default Home;
