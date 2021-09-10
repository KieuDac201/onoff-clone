import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 150px 0 180px 0px;
`;
export const UserInfoMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 40px;
`;
export const UserInfoLeft = styled.div`
  background: #eee;
`;
export const UserInfoSelect = styled.div`
  padding: 10px;
  margin: 10px 0;
  &:hover:last-child {
    background: #fff;
    color: red;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const UserInfoRight = styled.div``;
export const UserInfoTitle = styled.h3`
  font-size: 25px;
  margin-bottom: 20px;
`;
export const UserInfoSubTitle = styled.p`
  font-size: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
`;
export const UserInfoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  h4 {
    margin: 15px 0;
  }
`;
export const UserInfoItem = styled.div``;
export const UserInfoName = styled.div`
  margin-bottom: 10px;
`;
export const UserInfoEmail = styled.div`
  margin-bottom: 10px;
`;
export const UserInfoBtns = styled.div`
  display: flex;
  gap: 20px;
`;
export const UserInfoBtn = styled.div`
  color: #006bb4;
  cursor: pointer;
`;
export const UserInfoInput = styled.input`
  padding: 5px 10px;
`;
