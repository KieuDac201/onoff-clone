import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 100px 0 50px 0;
`;
export const MainProductDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-top: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const ProductImg = styled.div`
  .image-gallery-right-nav .image-gallery-svg,
  .image-gallery-left-nav .image-gallery-svg {
    height: 90px;
    width: 40px;
  }
  .image-gallery-content {
    display: flex;
    flex-direction: row-reverse;
  }
  .image-gallery-thumbnails .image-gallery-thumbnails-container {
    display: flex;
    flex-direction: column;
  }
  .image-gallery-slide-wrapper {
    flex: 1;
  }
  .image-gallery-thumbnail {
    width: 80px;
  }
  @media (max-width: 550px) {
    .image-gallery-thumbnails {
      display: none;
    }
  }
`;
export const ProductContent = styled.div``;
export const ProductName = styled.h3`
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
export const ProductNum = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #333;
  font-size: 15px;
`;
export const ProductOldPrice = styled.p`
  font-size: 16px;
  text-decoration: line-through;
`;
export const ProductCode = styled.p``;
export const ProductSold = styled.p``;
export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;
export const ProductNewPrice = styled.div`
  font-size: 24px;
  margin-right: 10px;
`;

export const ProductBtn = styled.button`
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 30px;
  border: none;
  outline: none;
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 40px;
  cursor: pointer;
  &:hover {
    background: #999;
  }
  &:active {
    transform: translateY(2px);
    transition: 0.2s ease-in-out;
  }
`;
