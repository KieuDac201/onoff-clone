import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import CateItem from "./CateItem";

const Cate = () => {
  const [cate, setCate] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "gender"));
        let tempArr = [];
        querySnapshot.forEach((doc) => {
          tempArr.push({ id: doc.id, ...doc.data() });
        });
        setCate(tempArr);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  console.log(cate);

  return (
    <Wrapper>
      {cate &&
        cate.map((item) => (
          <CateItem name={item.name} img={item.img} key={item.id} />
        ))}
    </Wrapper>
  );
};

export default Cate;

const Wrapper = styled.div`
  padding: 20px 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  @media (max-width: 950px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
