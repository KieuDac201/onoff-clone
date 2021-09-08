import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 100px;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 20px;
  margin-top: 65px;
  @media (max-width: 750px) {
    grid-template-columns: 2fr 5fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  @media (max-width: 950px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ProductTop = styled.div`
  grid-column: 1/ 5;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  @media (max-width: 950px) {
    grid-column: 1/ 4;
  }
  @media (max-width: 750px) {
    grid-column: 1/ 3;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  @media (max-width: 400px) {
    grid-column: 1/ 2;
  }
`;
export const TitleTop = styled.p`
  font-size: clamp(20px, 3vw, 24px);
  text-transform: uppercase;
`;
export const SortTop = styled.p`
  display: flex;
  align-items: center;
  font-size: 15px;
  svg {
    font-size: 20px;
  }
`;
export const Select = styled.select`
  margin: 0 12px;
`;
export const Option = styled.option``;
