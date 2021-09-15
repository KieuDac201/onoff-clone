import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import React, { useState } from "react";
import styled from "styled-components";
import { storage } from "../../../firebase";
import { getAuth, updateProfile } from "firebase/auth";
import showToast from "../../../utils/showToast";

const UserImg = ({ user, setIsImgUpload, isImgUpload }) => {
  const handleOnchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imagesRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(imagesRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const auth = getAuth();

            updateProfile(auth.currentUser, {
              photoURL: downloadURL,
            })
              .then(() => {
                setIsImgUpload(!isImgUpload);
                showToast("cập nhật thành công!", "success");
              })
              .catch((error) => {
                console.log({ error });
              });
          });
        }
      );
    }
  };
  return (
    <>
      <h4>Ảnh đại diện</h4>
      <label htmlFor="file">
        <UserInfoImgProfile
          src={
            user?.photoUrl ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxEOnFyUwEDR1V0j-PQIQXw7oHEZ4jGdrrXjrW_hj-K52FWPD1uQvJPU0F2gdlLYjcqzc&usqp=CAU"
          }
          alt="img profile"
        />
      </label>
      <input
        type="file"
        id="file"
        hidden
        onChange={handleOnchange}
        accept="image/png, image/jpeg"
      />
    </>
  );
};

export default UserImg;

const UserInfoImgProfile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  object-fit: cover;
  border: 1px solid #999;
  cursor: pointer;
  &:hover {
    border: 3px solid #999;
  }
`;
