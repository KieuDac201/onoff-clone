import React from "react";
import Container from "../../components/Container";
import ProductItem from "../../components/ProductItem";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideBar from "./SideBar";
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

const Products = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <Breadcrum>
            <BreadcrumItem>Trang chu</BreadcrumItem>
            <BreadcrumItem>San pham nam</BreadcrumItem>
          </Breadcrum>
          <Main>
            <SideBar></SideBar>
            <ProductList>
              <ProductTop>
                <TitleTop>Thoi trang Nam</TitleTop>
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
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
              <ProductItem
                name="Quần lót nữ kiểu bikini"
                price={19585}
                images={[
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU18007-01.jpg",
                  "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/H16BU19243-01.jpg",
                ]}
              />
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
