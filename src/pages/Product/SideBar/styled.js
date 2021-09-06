import styled from "styled-components";

export const SideBar1 = styled.div`
  padding: 5px 0;
`;
export const SideBarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid #333;
  padding: 10px 0;
  svg {
    font-size: 24px;
    color: #888;
  }
`;
export const WrapperItem = styled.div`
  transform-origin: top;
  transition: 0.2s linear;
  height: ${(props) => (props.show ? "105px" : "0")};
  overflow: hidden;
  padding: ${(props) => (props.show ? "10px 0" : "0")};
`;
export const Title = styled.p`
  text-transform: uppercase;
  font-size: 16px;
`;
export const CheckboxItem = styled.p`
  display: flex;
  align-items: center;
`;
export const CheckboxInput = styled.input`
  margin-right: 8px;
  font-size: 15px;
`;
export const CheckboxLabel = styled.label`
  margin-right: 8px;
  font-size: 15px;
`;
