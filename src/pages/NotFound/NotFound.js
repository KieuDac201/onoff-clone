import React from "react";
import Container from "../../components/Container";
import Title from "../../components/Title/Title";
import styled from "styled-components";
import notFoundImg from "../../assets/images/404.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Wrapper>
        <Container>
          <Title>TRANG BẠN YÊU CẦU KHÔNG CÓ TRÊN WEBSITE ONOFF</Title>
          <Breadcrumb>
            <BreadcrumbItem>
              {" "}
              <Link to="/">TRANG CHỦ</Link>
            </BreadcrumbItem>
            <BreadcrumbItem> 404 PAGE NOT FOUND</BreadcrumbItem>
          </Breadcrumb>
          <NotFoundImg src={notFoundImg} />
        </Container>
      </Wrapper>
    </motion.div>
  );
};

export default NotFound;

const Wrapper = styled.div`
  padding: 100px 0 80px 0;
`;
const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
const BreadcrumbItem = styled.p`
  font-size: 12px;
  padding: 0 10px;
  &:first-child {
    border-right: 1px solid #ccc;
  }
`;
const NotFoundImg = styled.img``;
