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
import ProductImageGallery from "./ProductImageGallery/ProductImageGallery";
import { useParams } from "react-router";
import formatPrice from "../../utils/formatPrice";
import { Link } from "react-router-dom";
import ProductSizeCo from "./ProductSize/ProductSize";
import ProductService from "./ProductService/ProductService";
import ProductQuantity from "./ProductQuantity/ProductQuantity";
import ProductInfo from "./ProductInfo/ProductInfo";
import RelativeProduct from "../../components/RelativeProduct/RelativeProduct";
import { AppContext } from "../../context/AppProvider";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../features/products/productSlice";
import { addToCart } from "../../features/cart/cartSlice";

const ProductDetail = () => {
  const { setCart, cart } = useContext(AppContext);
  const products = useSelector(getAllProduct);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);
  const [productSize, setProductSize] = useState("");
  const [productQuantity, setProductQuantity] = useState(1);
  const dispatch = useDispatch();

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

  const handleAddToCart = (productAdd) => {
    dispatch(addToCart({ product: productAdd, quantity: productQuantity }));
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

              <ProductBtn onClick={() => handleAddToCart(product)}>
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
