import React from "react";
import styled from "styled-components";

const UserImgProfile = ({ photoUrl }) => {
  return (
    <UserInfoImgProfile
      src={
        photoUrl ||
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxEOnFyUwEDR1V0j-PQIQXw7oHEZ4jGdrrXjrW_hj-K52FWPD1uQvJPU0F2gdlLYjcqzc&usqp=CAU"
      }
      alt="img profile"
    />
  );
};

export default UserImgProfile;

const UserInfoImgProfile = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #999;
  cursor: pointer;
  &:hover {
    border: 3px solid #999;
  }
`;
