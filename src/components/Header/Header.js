import React, { useContext, useEffect, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { FaHome, FaSearch, FaUserAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { GiShoppingBag } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import logoImg from "../../assets/images/logo.svg";
import { AppContext } from "../../context/AppProvider";
import { getAllCart } from "../../features/cart/cartSlice";
import Cart from "../Cart";
import Container from "../Container";
import Search from "../Search/Search";
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

const Header = () => {
  const { setQuerySearch } = useContext(AppContext);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowCart, setIsShowCart] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [countProductCart, setCountProductCart] = useState(0);
  const cart = useSelector(getAllCart);

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
              <MenuItem>N???</MenuItem>
            </Link>
            <Link to="/do-tre-em" onClick={hideMenu}>
              <MenuItem>Tr??? em</MenuItem>
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
