import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = ({ text, large, fill }) => {
  return (
    <Btn large={large} fill={fill}>
      {text}
    </Btn>
  );
};

export default Button;

Button.defaultProps = {
  text: "Button",
};

const Btn = styled.div`
  user-select: none;
  text-transform: ${(props) => (props.fill ? "auto" : "uppercase")};
  margin-bottom: 10px;
  height: ${(props) => (props.large ? "38px" : "32px")};
  width: ${(props) => (props.large ? "135px" : "110px")};
  text-align: center;
  line-height: ${(props) => (props.large ? "38px" : "32px")};
  border: 1px solid #231f20;
  z-index: 2;
  background: ${(props) => (props.fill ? "#000" : "transparent")};
  color: ${(props) => (props.fill ? "#fff" : "#231f20")};
  cursor: pointer;

  :hover {
    background: ${(props) => (props.fill ? "#1979c3" : "#000")};
    color: #fff;
    transition: 0.2s ease-in-out;
  }

  @media (max-width: 450px) {
    height: 32px;
    width: 110px;
    line-height: 32px;
  }
`;
