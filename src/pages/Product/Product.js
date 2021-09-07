import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import ProductItem from "../../components/ProductItem";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideBar from "./SideBar/SideBar";
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
import Pagination from "./Pagination/Pagination";
import { useRouteMatch } from "react-router";
import { useSelector } from "react-redux";
import { ProductsContext } from "../../App";
import selectGender from "../../utils/selectGender";
import selectProductWithGender from "../../utils/selectProduct";

const Products = () => {
  const { path } = useRouteMatch();
  const [products] = React.useContext(ProductsContext);
  const [productRender, setProductRender] = useState([]);
  const [productGender, setProductGender] = useState("");
  const [productSort, setProductSort] = useState("");
  const [filterList, setFilterList] = useState({
    "đồ lót": false,
    "quần áo": false,
    "bít tất": false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const gender = selectGender(path);
    setProductGender(gender);
    let arrProduct = selectProductWithGender(products, gender);
    let tempArr = [];
    for (let key in filterList) {
      if (filterList[key]) {
        let arr = arrProduct.filter(
          (product) => product.type.toLowerCase() === key
        );
        tempArr.push(...arr);
      }
    }
    if (!tempArr.length) {
      tempArr = arrProduct;
    }
    if (productSort === "increment") {
      tempArr = tempArr.sort((a, b) => a.price - b.price);
    }
    if (productSort === "decrement") {
      tempArr = tempArr.sort((a, b) => b.price - a.price);
    }
    if (productSort === "") {
      tempArr = tempArr.sort((a, b) => 0.5 - Math.random());
    }
    setProductRender(tempArr);
  }, [products, productSort, filterList]);

  const handleOnChangeSort = (e) => {
    setProductSort(e.target.value);
  };

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
            <SideBar setFilterList={setFilterList} filterList={filterList} />
            <ProductList>
              <ProductTop>
                <TitleTop>Thời trang {productGender}</TitleTop>
                <SortTop>
                  <span>Sắp xếp theo</span>
                  <Select onChange={(e) => handleOnChangeSort(e)}>
                    <Option value="">Lựa chọn</Option>
                    <Option value="increment">Giá tăng dần</Option>
                    <Option value="decrement">Giá giảm dần</Option>
                  </Select>

                  {productSort === "increment" && <FaLongArrowAltUp />}
                  {productSort === "decrement" && <FaLongArrowAltDown />}
                </SortTop>
              </ProductTop>
              {productRender.map((product) => (
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
