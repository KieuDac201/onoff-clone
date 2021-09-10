import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 150px 0 110px 0;
`;
export const LoginMain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
  }
`;
export const LoginLeft = styled.div``;
export const LoginRight = styled.div``;
export const LoginTitle = styled.h4`
  font-size: 25px;
  text-transform: uppercase;
  margin-bottom: 35px;
`;
export const LoginClientState = styled.p`
  padding-bottom: 18px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 18px;
  font-size: 13px;
`;
export const LoginText = styled.p`
  font-size: 15px;
  margin-bottom: 24px;
`;
export const LoginForm = styled.form``;
export const FormButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  button {
    padding: 5px 15px;
    background: #000;
    color: #fff;
    cursor: pointer;
    border: none;
    &:hover {
      background: #1979c3;
      transition: 0.2s ease;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const FormButtonForgot = styled.div`
  color: #006bb4;
  padding: 10px 0;
`;
export const FormError = styled.p`
  color: rgb(206, 17, 38);
  font-size: 12px;
  margin: 4px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const FormLabel = styled.label`
  color: #231f20;
  font-size: 15px;
  margin-bottom: 5px;
  span {
    color: red;
  }
`;
export const FormInput = styled.input`
  padding: 10px 12px;
`;
