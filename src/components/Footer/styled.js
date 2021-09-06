import styled from "styled-components";

export const Wrapper = styled.div`
  background: #333f48;
  padding: 35px 0;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 25px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 40px;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 40px;
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 40px;
  }
`;
export const Col = styled.div`
  @media (max-width: 1200px) {
    &:last-child {
      grid-column: 1 / 2;
      grid-row: 2/ 3;
    }
  }
  @media (max-width: 900px) {
    &:nth-child(4) {
      grid-column: 2/ 3;
      grid-row: 3 / 4;
    }
  }
  @media (max-width: 650px) {
    &:nth-child(4) {
      grid-row: auto;
      grid-column: auto;
    }
  }
`;
export const Title = styled.div`
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: ${(props) => (props.margin ? "32px" : "0px")};
  @media (max-width: 650px) {
    margin-top: 30px;
  }
`;
export const Text = styled.p`
  color: #fff;
  font-size: 14px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  svg {
    font-size: 28px;
    margin-right: 10px;
  }
`;
export const TextSm = styled.p`
  color: #999;
  font-size: 14px;
  margin-bottom: 8px;
  cursor: pointer;
  svg {
    width: 24px;
  }
  :hover {
    transform: translateX(5px);
    transition: 0.2s ease-in-out;
  }
`;
export const Img = styled.img`
  margin-top: 12px;
`;
export const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; ;
`;
export const Social = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;
export const Form = styled.div`
  height: 32px;
  background-color: #fff;
  padding: 0 8px;
  padding-right: 2px;
  display: inline-flex;
  align-items: center;
  border: 1px solid #333;
  margin-bottom: 24px;
`;
export const Input = styled.input`
  height: 100%;
  border: none;
  outline: none;
  padding: 0 10px;
  flex: 1;
  font-size: 12px;
`;
export const Btn = styled.button`
  width: 80px;
  height: 28px;
  background-color: #000;
  color: #fff;
  line-height: 28px;
  text-align: center;
  border: none;
`;
