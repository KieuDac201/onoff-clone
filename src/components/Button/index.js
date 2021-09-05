import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = ({ text, large }) => {
  return <Btn large={large}>{text}</Btn>;
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  large: PropTypes.bool,
};
Button.defaultProps = {
  text: "Button",
};

const Btn = styled.div`
  text-transform: uppercase;
  margin-bottom: 10px;
  height: ${(props) => (props.large ? "38px" : "32px")};
  width: ${(props) => (props.large ? "135px" : "110px")};
  text-align: center;
  line-height: ${(props) => (props.large ? "38px" : "32px")};
  border: 1px solid #231f20;
  z-index: 2;
  color: #231f20;
  cursor: pointer;

  :hover {
    background: #000;
    color: #fff;
    transition: 0.2s ease-in-out;
  }

  @media (max-width: 450px) {
    height: 32px;
    width: 110px;
    line-height: 32px;
  }
`;
