import styled from "styled-components";
export const Breadcrum = styled.div`
  display: flex;
  font-size: 12px;
`;
export const BreadcrumItem = styled.p`
  padding: 0px 10px;
  border-right: 1px solid ${(props) => (props.last ? "transparent" : "#ccc")};
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  color: ${(props) => (props.last ? "#000" : "#999")};

  &:first-child {
  }
`;
