import React, { useContext, useEffect, useState } from "react";
import Container from "../../components/Container";
import { Breadcrum, BreadcrumItem } from "../../components/Breadcrum/Breadcrum";
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
} from "./styled";
import ProductImageGallery from "../../components/ProductImageGallery/ProductImageGallery";
import { useParams } from "react-router";
import formatPrice from "../../utils/formatPrice";
import { Link } from "react-router-dom";
import ProductSizeCo from "../../components/ProductSize/ProductSize";
import ProductService from "../../components/ProductService/ProductService";
import ProductQuantity from "../../components/ProductQuantity/ProductQuantity";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import RelativeProduct from "../../components/RelativeProduct/RelativeProduct";
import { AppContext } from "../../context/AppProvider";

const ProductDetail = () => {
  const { products, setCart, cart } = useContext(AppContext);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);
  const [productSize, setProductSize] = useState("");
  const [productQuantity, setProductQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    let productSelected = products.find((item) => item.id === id);
    let imageList = productSelected?.images.map((item) => ({
      original: item,
      thumbnail: item,
    }));
    setImages(imageList);
    setProduct(productSelected);
  }, [id, products]);

  const addToCart = (productAdd) => {
    const arr = cart.some((item) => item.id === productAdd.id);
    if (arr) {
      const arrSelect = cart.map((item) =>
        item.id === productAdd.id
          ? { ...item, quantity: item.quantity + productQuantity }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(arrSelect));
      setCart(arrSelect);
    } else {
      let addItem = [...cart, { ...productAdd, quantity: productQuantity }];
      localStorage.setItem("cart", JSON.stringify(addItem));
      setCart(addItem);
    }
  };

  return (
    <Wrapper>
      {product && (
        <Container>
          <Breadcrum>
            <Link to="/">
              <BreadcrumItem>Trang chủ</BreadcrumItem>
            </Link>
            <Link
              to={
                product.gender?.toLowerCase() === "nam" ? "/do-nam" : "/do-nu"
              }
            >
              <BreadcrumItem>Sản phẩm {product.gender}</BreadcrumItem>
            </Link>
            <BreadcrumItem last>{product.name}</BreadcrumItem>
          </Breadcrum>
          <MainProductDetail>
            <ProductImageGallery images={images} />
            <ProductContent>
              <ProductName>{product.name}</ProductName>
              <ProductNum>
                <ProductCode>SKU#: {id}</ProductCode>
                <ProductSold>Đã bán {product.sold}</ProductSold>
              </ProductNum>
              <ProductPrice>
                <ProductNewPrice>{formatPrice(product.price)}</ProductNewPrice>
                <ProductOldPrice>{formatPrice(product.price)}</ProductOldPrice>
              </ProductPrice>

              <ProductSizeCo
                setProductSize={setProductSize}
                productSize={productSize}
              />
              <ProductQuantity
                productQuantity={productQuantity}
                setProductQuantity={setProductQuantity}
              />
              <ProductService />

              <ProductBtn onClick={() => addToCart(product)}>
                Thêm vào giỏ hàng
              </ProductBtn>

              <ProductInfo />
            </ProductContent>
          </MainProductDetail>
          <RelativeProduct gender={product.gender} />
        </Container>
      )}
    </Wrapper>
  );
};

export default ProductDetail;
