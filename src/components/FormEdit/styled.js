import styled from "styled-components";

export const FormEditMain = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const FormEditInput = styled.input`
  padding: 5px 10px;
`;
export const FormEditLabel = styled.label`
  margin-bottom: 5px;
`;
export const FormEditBtn = styled.button`
  padding: 10px 10px;
  color: #fff;
  background: #000;
  border: 1px solid #000;
  font-weight: 600;
  &:hover {
    background: none;
    color: #000;
    cursor: pointer;

    transition: 0.2s ease-in-out;
  }
`;
