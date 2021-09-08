import React from "react";
import Container from "../../components/Container";
import styled from "styled-components";
import { Breadcrum, BreadcrumItem } from "../../components/Breadcrum/Breadcrum";
import { AiOutlineBarChart, AiFillIdcard } from "react-icons/ai";
import { BsArrowLeftRight, BsArrowCounterclockwise } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";
import {
  ProductBtn,
  Wrapper,
  MainProductDetail,
  ProductContent,
  ProductName,
  ProductNum,
  ProductCode,
  ProductSold,
  ProductPrice,
  ProductNewPrice,
  ProductOldPrice,
  ProductSize,
  ProductSizeTitle,
  ProductSizeList,
  ProductSizeItem,
  ProductSizeInfo,
  ProductQuantity,
  ProductQuantityBtns,
  ProductQuantityBtn,
  ProductServices,
  ProductService,
} from "./styled";
import ProductImageGallery from "../../components/ProductImageGallery/ProductImageGallery";

const ProductDetail = () => {
  return (
    <Wrapper>
      <Container>
        <Breadcrum>
          <BreadcrumItem>Trang chu</BreadcrumItem>
          <BreadcrumItem>Trang chu</BreadcrumItem>
          <BreadcrumItem>Trang chu</BreadcrumItem>
        </Breadcrum>
        <MainProductDetail>
          <ProductImageGallery />
          <ProductContent>
            <ProductName>QUẦN LÓT NỮ BRIEF SEAMLESS</ProductName>
            <ProductNum>
              <ProductCode>SKU#: H16BU20073</ProductCode>
              <ProductSold>Đã bán 2868</ProductSold>
            </ProductNum>
            <ProductPrice>
              <ProductNewPrice>119.000đ</ProductNewPrice>
              <ProductOldPrice>149.000đ</ProductOldPrice>
            </ProductPrice>
            <ProductSize>
              <ProductSizeTitle>KÍCH CỠ:</ProductSizeTitle>
              <ProductSizeList>
                <ProductSizeItem>s</ProductSizeItem>
                <ProductSizeItem>s</ProductSizeItem>
                <ProductSizeItem>s</ProductSizeItem>
                <ProductSizeItem>s</ProductSizeItem>
                <ProductSizeInfo>
                  <AiOutlineBarChart />
                  bảng size
                </ProductSizeInfo>
              </ProductSizeList>
            </ProductSize>
            <ProductQuantity>
              <p>SỐ LƯỢNG:</p>
              <ProductQuantityBtns>
                <ProductQuantityBtn>-</ProductQuantityBtn>
                <ProductQuantityBtn>2</ProductQuantityBtn>
                <ProductQuantityBtn>+</ProductQuantityBtn>
              </ProductQuantityBtns>
            </ProductQuantity>
            <ProductServices>
              <ProductService>
                <FaCarSide />
                <p>
                  <span>[07-10/09] MIỄN PHÍ VẬN CHUYỂN</span>
                  cho mọi đơn hàng
                </p>
              </ProductService>
              <ProductService>
                <BsArrowCounterclockwise />
                <p>
                  <span>HOÀN TIỀN 100%</span>
                  cho các sản phẩm không đúng với đơn hàng
                </p>
              </ProductService>
              <ProductService>
                <AiFillIdcard />
                <p>
                  <span>KIỂM TRA HÀNG TRƯỚC KHI THANH TOÁN</span>
                </p>
              </ProductService>
              <ProductService>
                <BsArrowLeftRight />
                <p>
                  <span>MIỄN PHÍ ĐỔI TRẢ</span>
                  trong vòng 15 ngày kể từ ngày mua hàng.
                </p>
              </ProductService>
            </ProductServices>
            <ProductBtn>Thêm vào giỏ hàng</ProductBtn>
          </ProductContent>
        </MainProductDetail>
      </Container>
    </Wrapper>
  );
};

export default ProductDetail;
