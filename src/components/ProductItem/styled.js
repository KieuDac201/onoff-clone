import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const DiscountImg = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
`;
export const ProductItems = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  :hover {
  }
`;
export const ProductImg = styled(LazyLoadImage)`
  width: 100%;
  margin-bottom: 12px;
`;
export const ProductName = styled.p`
  font-size: 14px;
  margin-bottom: 12px;
  margin-top: auto;
`;
export const OldPrice = styled.p`
  font-size: 12px;
  text-decoration: line-through;
  margin: auto 0 5px 0;
`;
export const NewPrice = styled.h4`
  font-size: 14px;
  margin-bottom: 24px;
`;
