import React, { useContext, useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { useHistory } from "react-router";
import { AppContext } from "../../App";

const Search = ({ isShowSearch, setIsShowSearch }) => {
  const { querySearch, setQuerySearch } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsShowSearch(false);
    setQuerySearch(searchValue);
    history.push(`/search/q:${searchValue}`);
    setSearchValue("");
  };

  return (
    <SearchWrapper
      isShowSearch={isShowSearch}
      onSubmit={(e) => handleSubmit(e)}
    >
      <SearchInput
        type="text"
        placeholder="Tìm kiếm"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <BsSearch onClick={(e) => handleSubmit(e)} />
    </SearchWrapper>
  );
};

export default Search;

export const SearchWrapper = styled.form`
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
  svg {
    cursor: pointer;
  }
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
