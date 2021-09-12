import React, { useContext, useEffect, useState } from "react";
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
  Overlay,
  ReturnIcon,
  SearchIcon,
  UserIcon,
} from "./styled";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Cart from "../Cart/Cart";
import { ToastContainer } from "react-toastify";
import { AppContext } from "../../context/AppProvider";

const Header = () => {
  const { cart, querySearch, setQuerySearch } = useContext(AppContext);
  const {} = useContext(AppContext);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowCart, setIsShowCart] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [countProductCart, setCountProductCart] = useState(0);

  const toggleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };
  const hideMenu = () => {
    setIsShowMenu(false);
  };
  const toggleShowSearch = () => {
    setIsShowSearch(!isShowSearch);
    setQuerySearch("");
  };

  useEffect(() => {
    let countProduct = 0;
    cart.forEach((item) => {
      countProduct += item.quantity;
    });
    setCountProductCart(countProduct);
  }, [cart]);

  return (
    <ContainerWrapper>
      <Container>
        <Overlay isShowCart={isShowCart} onClick={() => setIsShowCart(false)} />
        <Cart isShowCart={isShowCart} setIsShowCart={setIsShowCart} />
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
          <Search
            isShowSearch={isShowSearch}
            setIsShowSearch={setIsShowSearch}
          />
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
              <Link to="/login">
                <FaUserAlt />
              </Link>
            </UserIcon>
          </GroupIcon>
          <CartIcon onClick={() => setIsShowCart(true)}>
            <p>{countProductCart}</p>
            <GiShoppingBag />
          </CartIcon>
        </HeaderContainer>
      </Container>
      <ToastContainer />
    </ContainerWrapper>
  );
};

export default Header;
