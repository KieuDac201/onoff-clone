import React, { useState } from "react";
import { BsSearch, BsChevronLeft } from "react-icons/bs";
import { FaUserAlt, FaHome, FaSearch } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import Container from "../Container";
import logoImg from "../../assets/images/logo.svg";
import {
  BarIcon,
  CartIcon,
  ContainerWrapper,
  GroupIcon,
  HeaderContainer,
  HomeIcon,
  LocationIcon,
  Logo,
  Menu,
  MenuItem,
  ReturnIcon,
  SearchIcon,
  SearchInput,
  SearchWrapper,
  UserIcon,
} from "./styled";
import { Link } from "react-router-dom";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false);

  const toggleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };
  const hideMenu = () => {
    setIsShowMenu(false);
  };
  const toggleShowSearch = () => {
    setIsShowSearch(!isShowSearch);
  };

  return (
    <ContainerWrapper>
      <Container>
        <HeaderContainer>
          {!isShowMenu && (
            <BarIcon onClick={toggleShowMenu}>
              <FiMenu />
            </BarIcon>
          )}
          {isShowMenu && (
            <ReturnIcon onClick={toggleShowMenu}>
              <BsChevronLeft />
            </ReturnIcon>
          )}
          <Link to="/">
            <Logo src={logoImg} alt="Onoff Logo" />
          </Link>
          <Menu isShowMenu={isShowMenu}>
            <Link to="/do-nam" onClick={hideMenu}>
              <MenuItem>Nam</MenuItem>
            </Link>
            <Link to="/do-nu" onClick={hideMenu}>
              <MenuItem>Nữ</MenuItem>
            </Link>
            <Link to="/do-tre-em" onClick={hideMenu}>
              <MenuItem>Trẻ em</MenuItem>
            </Link>
          </Menu>
          <SearchWrapper isShowSearch={isShowSearch}>
            <SearchInput type="text" placeholder="Tìm kiếm" />
            <BsSearch />
          </SearchWrapper>
          <GroupIcon>
            <HomeIcon>
              <Link to="/">
                <FaHome />
              </Link>
            </HomeIcon>
            <SearchIcon onClick={toggleShowSearch}>
              <FaSearch />
            </SearchIcon>
            <LocationIcon>
              <MdLocationOn />
            </LocationIcon>
            <UserIcon>
              <FaUserAlt />
            </UserIcon>
          </GroupIcon>
          <CartIcon>
            <GiShoppingBag />
          </CartIcon>
        </HeaderContainer>
      </Container>
    </ContainerWrapper>
  );
};

export default Header;
