import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import Container from "../../components/Container";
import FormEdit from "../../components/FormEdit/FormEdit";
import UserImgProfile from "../../components/UserImgProfile/UserImgProfile";
import showToast from "../../utils/showToast";
import { getStorage, ref, uploadBytes } from "firebase/storage";

import {
  UserInfoBtn,
  UserInfoBtns,
  UserInfoEmail,
  UserInfoInput,
  UserInfoItem,
  UserInfoLeft,
  UserInfoList,
  UserInfoMain,
  UserInfoName,
  UserInfoRight,
  UserInfoSelect,
  UserInfoSubTitle,
  UserInfoTitle,
  Wrapper,
} from "./styled";

const UserInfo = () => {
  const history = useHistory();
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const [isShowFormEdit, setIsShowFormEdit] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userObj = {
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        };
        setUser(userObj);
      } else {
        history.replace("/login");
      }
    });
  }, [isLoad]);

  const handleLogOut = () => {
    getAuth();
    signOut(auth)
      .then(() => {
        showToast("Đăng xuất thành công!", "success");
      })
      .catch((error) => {
        showToast("Thất bại!", "error");
      });
  };

  const handleOnchange = (e) => {
    console.log(e.target.files[0]);
  };

  const handleClick = () => {
    // Create a root reference
    const storage = getStorage();

    // Create a reference to 'mountains.jpg'
    const mountainsRef = ref(storage, "mountains.jpg");

    // Create a reference to 'images/mountains.jpg'
    const mountainImagesRef = ref(storage, "images/mountains.jpg");

    // While the file names are the same, the references point to different files
    // mountainsRef.name === mountainImagesRef.name; // true
    // mountainsRef.fullPath === mountainImagesRef.fullPath;
  };

  return (
    <Wrapper>
      <Container>
        <UserInfoMain>
          <UserInfoLeft>
            <UserInfoSelect>Tài khoản của tôi</UserInfoSelect>
            <UserInfoSelect onClick={handleLogOut}>Đăng xuất</UserInfoSelect>
          </UserInfoLeft>
          <UserInfoRight>
            <UserInfoTitle onClick={handleClick}>
              TÀI KHOẢN CỦA TÔI
            </UserInfoTitle>
            <UserInfoSubTitle>Thông tin tài khoản</UserInfoSubTitle>
            <UserInfoList>
              <UserInfoItem>
                <h4>Thông tin liên lạc</h4>
                <h5>Name</h5>
                <UserInfoName>{user?.displayName || "chưa có"}</UserInfoName>

                <h5>Email</h5>
                <UserInfoEmail>{user?.email}</UserInfoEmail>

                <UserInfoBtns>
                  <UserInfoBtn
                    onClick={() => setIsShowFormEdit(!isShowFormEdit)}
                  >
                    Sửa
                  </UserInfoBtn>
                  <UserInfoBtn>Thay đổi password</UserInfoBtn>
                </UserInfoBtns>
              </UserInfoItem>
              <UserInfoItem>
                <h4>Ảnh đại diện</h4>
                <label htmlFor="file">
                  <UserImgProfile photoUrl={user?.photoUrl} />
                </label>
                <input type="file" id="file" hidden onChange={handleOnchange} />
              </UserInfoItem>
              <UserInfoItem>
                {isShowFormEdit && (
                  <FormEdit
                    name={user?.displayName}
                    setIsLoad={setIsLoad}
                    isLoad={isLoad}
                    setIsShowFormEdit={setIsShowFormEdit}
                  />
                )}
              </UserInfoItem>
            </UserInfoList>
          </UserInfoRight>
        </UserInfoMain>
      </Container>
    </Wrapper>
  );
};

export default UserInfo;
