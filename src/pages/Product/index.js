import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import ProductItem from "../../components/ProductItem";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Breadcrum,
  BreadcrumItem,
  Main,
  Option,
  ProductList,
  ProductTop,
  Select,
  SortTop,
  TitleTop,
} from "./styled";
import Pagination from "./Pagination";
import { useRouteMatch } from "react-router";
import { useSelector } from "react-redux";
import filterGender from "../../utils/filterGender";

const Products = () => {
  const { path } = useRouteMatch();
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [productGender, setProductGender] = useState("nam");
  const products = useSelector((state) => state.allProduct);
  useEffect(() => {
    window.scrollTo(0, 0);
    const gender = filterGender(path);
    setProductGender(gender);

    const filterProductGender = () => {
      const tempArr = products.filter(
        (product) => product.gender.toLowerCase() === gender
      );
      setProductsFiltered(tempArr);
    };
    filterProductGender();
  }, [path, products]);

  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <Breadcrum>
            <BreadcrumItem>
              <Link to="/">Trang chủ</Link>
            </BreadcrumItem>
            <BreadcrumItem>Sản phẩm {productGender}</BreadcrumItem>
          </Breadcrum>
          <Main>
            <SideBar
              gender={productGender}
              products={products}
              setProductsFiltered={setProductsFiltered}
            />
            <ProductList>
              <ProductTop>
                <TitleTop>Thời trang {productGender}</TitleTop>
                <SortTop>
                  <span>Sắp xếp theo</span>
                  <Select>
                    <Option value="position">Vị trí</Option>
                    <Option value="name">Tên sản phầm </Option>
                    <Option value="price">Gía</Option>
                  </Select>
                  <FaLongArrowAltDown />
                </SortTop>
              </ProductTop>
              {productsFiltered.map((product) => (
                <ProductItem
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  images={product.images}
                />
              ))}
            </ProductList>
          </Main>
          <Pagination></Pagination>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Products;
