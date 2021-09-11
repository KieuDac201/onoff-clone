import React, { useEffect, useState } from "react";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { useLocation, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import { Breadcrum, BreadcrumItem } from "../../components/Breadcrum/Breadcrum";
import Container from "../../components/Container";
import ProductItem from "../../components/ProductItem/ProductItem";
import filterProductGender from "../../utils/filterProductGender";
import filterProductSearch from "../../utils/filterProductSearch";
import filterProductType from "../../utils/filterProductType";
import selectGender from "../../utils/selectGender";
import selectProductWithGender from "../../utils/selectProduct";
import Pagination from "./Pagination/Pagination";
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
  const { products, querySearch, setQuerySearch } =
    React.useContext(AppContext);
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
    if (path === "/do-nam" || path === "/do-nữ" || path === "/do-tre-em") {
      setQuerySearch("");
    }
    let arrFilter = [];
    if (
      path !== "/do-nam" &&
      path !== "/do-nữ" &&
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
    // filter width type
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
      if (productSort === "") {
        setProductRender(arrFilter);
      } else if (productSort === "increment") {
        let arr = arrFilter.sort((a, b) => a.price - b.price);
        console.log(arrFilter);
        setProductRender(arr);
      } else {
        let arr = arrFilter.sort((a, b) => b.price - a.price);
        setProductRender(arr);
      }
    }
  }, [pathname, filterList, productSort]);

  // useEffect(() => {
  //   let arrProduct = [];
  //   if (!querySearch) {
  //     const gender = selectGender(path);
  //     setSearhText("");
  //     setProductGender(gender);
  //     arrProduct = selectProductWithGender(products, gender);
  //   } else {
  //     // handle search
  //     setSearhText(querySearch);
  //     arrProduct = products.filter(
  //       (product) =>
  //         product.name
  //           .toLowerCase()
  //           .includes(querySearch.trim().toLowerCase()) ||
  //         product.type
  //           .toLowerCase()
  //           .includes(querySearch.trim().toLowerCase()) ||
  //         product.gender
  //           .toLowerCase()
  //           .includes(querySearch.trim().toLowerCase())
  //     );
  //     if (arrProduct.length === 0) {
  //       setProductRender([]);
  //     }
  //   }
  //   window.scrollTo(0, 0);

  //   // select products equavilent with gender

  //   // filter product with type value
  //   let tempArr = [];
  //   for (let key in filterList) {
  //     if (filterList[key]) {
  //       let arr = arrProduct.filter(
  //         (product) => product.type.toLowerCase() === key
  //       );
  //       tempArr.push(...arr);
  //     }
  //   }

  //   setTotalPage(Math.ceil(tempArr.length / 10));

  //   tempArr = tempArr.slice(
  //     currentPage === 1 ? 0 : 10 * currentPage - 10,
  //     10 * currentPage
  //   );

  //   // sort product increment and dcrememt
  //   if (!tempArr.length) {
  //     setTotalPage(Math.ceil(arrProduct.length / 10));
  //     tempArr = arrProduct.slice(
  //       currentPage === 1 ? 0 : 10 * currentPage - 10,
  //       10 * currentPage
  //     );
  //   }
  //   if (productSort === "increment") {
  //     tempArr = tempArr.sort((a, b) => a.price - b.price);
  //   }
  //   if (productSort === "decrement") {
  //     tempArr = tempArr.sort((a, b) => b.price - a.price);
  //   }

  //   setProductRender(tempArr);
  // }, [products, productSort, filterList, currentPage, querySearch, path]);

  const handleOnChangeSort = (e) => {
    setProductSort(e.target.value);
    console.log();
  };

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
