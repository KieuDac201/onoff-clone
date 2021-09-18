import React, { useEffect, useState } from "react";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useLocation, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { Breadcrum, BreadcrumItem } from "../../components/Breadcrum/Breadcrum";
import Container from "../../components/Container";
import Loading from "../../components/Loading/Loading";
import ProductItem from "./ProductItem/ProductItem";
import { AppContext } from "../../context/AppProvider";
import { getAllProduct } from "../../features/products/productSlice";
import filterProductGender from "../../utils/filterProductGender";
import filterProductSearch from "../../utils/filterProductSearch";
import filterProductType from "../../utils/filterProductType";
import selectGender from "../../utils/selectGender";
import SideBar from "./SideBar/SideBar";
import {
  Main,
  Option,
  ProductList,
  ProductTop,
  Select,
  SortTop,
  TitleTop,
  Wrapper,
} from "./styled";

const Products = () => {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const { querySearch, setQuerySearch } = React.useContext(AppContext);
  const products = useSelector(getAllProduct);
  const [productRender, setProductRender] = useState([]);
  const [productGender, setProductGender] = useState("");
  const [productSort, setProductSort] = useState("");
  const [textSearch, setTextSearch] = useState("");
  const [filterList, setFilterList] = useState({
    "đồ lót": false,
    "quần áo": false,
    "bít tất": false,
  });

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    if (path === "/do-nam" || path === "/do-nu" || path === "/do-tre-em") {
      setQuerySearch("");
    }
    let arrFilter = [];
    if (
      path !== "/do-nam" &&
      path !== "/do-nu" &&
      path !== "/do-tre-em" &&
      querySearch
    ) {
      setTextSearch(querySearch);

      let arrProductSearch = filterProductSearch(products, querySearch);
      arrFilter = arrProductSearch;
      setProductRender(arrProductSearch);
    } else {
      setTextSearch("");
      console.log("hey");
      const genderSelected = selectGender(path);
      setProductGender(genderSelected);
      const arrProductGender = filterProductGender(products, genderSelected);
      arrFilter = arrProductGender;
      setProductRender(arrProductGender);
    }
    // filter and sort width type
    let arr = filterProductType(filterList, arrFilter);
    if (arr.length) {
      if (productSort === "") {
        arr = arr.sort(() => Math.random() - 0.5);
      } else if (productSort === "increment") {
        arr = arr.sort((a, b) => a.price - b.price);
      } else {
        arr = arr.sort((a, b) => b.price - a.price);
      }
      setProductRender(arr);
    } else {
      let arr = [];
      if (productSort === "") {
        arr = arrFilter;
      } else if (productSort === "increment") {
        arr = arrFilter.sort((a, b) => a.price - b.price);
      } else {
        arr = arrFilter.sort((a, b) => b.price - a.price);
      }
      setProductRender(arr);
    }
  }, [pathname, filterList, productSort]);

  const handleOnChangeSort = (e) => {
    setProductSort(e.target.value);
    console.log();
  };

  useEffect(() => {
    setLoading(true);
    const id = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, [pathname, filterList, productSort]);

  return (
    <>
      <Wrapper>
        <Container>
          <Breadcrum>
            <BreadcrumItem>
              <Link to="/">Trang chủ</Link>
            </BreadcrumItem>
            <BreadcrumItem last>Sản phẩm {productGender}</BreadcrumItem>
          </Breadcrum>
          <Main>
            <SideBar setFilterList={setFilterList} filterList={filterList} />
            <ProductList>
              <ProductTop>
                {textSearch ? (
                  <TitleTop>Tìm kiếm với từ khóa "{textSearch}"</TitleTop>
                ) : (
                  <TitleTop>Thời trang {productGender}</TitleTop>
                )}
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
                  id={product.id}
                />
              ))}
              {loading && <Loading />}
            </ProductList>
          </Main>
          {/* <Pagination
            totalPage={totalPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          /> */}
        </Container>
      </Wrapper>
    </>
  );
};

export default Products;
