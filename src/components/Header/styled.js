import styled from "styled-components";

export const ContainerWrapper = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  background: #fff;
  border-bottom: 1px solid #ccc;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BarIcon = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;
  @media (max-width: 1010px) {
    display: block;
  }
`;
export const ReturnIcon = styled(BarIcon)``;
export const Logo = styled.img`
  width: 73px;
  cursor: pointer;
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  @media (max-width: 1010px) {
    position: fixed;
    z-index: 999;
    top: 69px;
    width: 100%;
    height: 100%;
    background: #fff;
    left: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    transition: 0.2s ease-in-out;
    left: ${(props) => (props.isShowMenu ? "0" : "-101%")};
  }
`;
export const MenuItem = styled.div`
  font-size: 17px;
  position: relative;
  text-transform: uppercase;
  padding: 8px 0;
  margin: 0 16px;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 2px;
    background: #000;
    opacity: 0;
  }
  &:hover::before {
    transition: 0.2s ease;
    opacity: 1;
  }
  @media (max-width: 1010px) {
    padding: 20px;
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
    margin: 0;
    &::before {
      display: none;
    }
  }
`;
export const SearchWrapper = styled.div`
  width: 235px;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  position: relative;
  border-bottom: 1px solid #c2c2c2;
  color: #333;
  margin-left: auto;
  background: #fff;
  @media (max-width: 1010px) {
    position: fixed;
    top: 69px;
    left: 0;
    width: 100%;
    padding-right: 16px;
    display: ${(props) => (props.isShowSearch ? "flex" : "none")};
  }
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  height: 100%;

  flex: 1;
  padding-right: 8px;
  &::placeholder {
    font-style: italic;
  }
`;
export const GroupIcon = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1010px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    padding: 5px 20px;
    justify-content: space-around;
  }
`;

export const LocationIcon = styled.div`
  padding: 0 5px;
  margin-left: 18px;
  font-size: 24px;
  margin-top: 8px;
  cursor: pointer;
  @media (max-width: 1010px) {
    font-size: 22px;
  }
`;
export const UserIcon = styled(LocationIcon)``;
export const CartIcon = styled(LocationIcon)``;
export const HomeIcon = styled(LocationIcon)`
  display: none;
  @media (max-width: 1010px) {
    display: block;
  }
`;
export const SearchIcon = styled(LocationIcon)`
  display: none;
  @media (max-width: 1010px) {
    display: block;
  }
`;
