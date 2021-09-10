import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import Container from "../../components/Container";
import FormEdit from "../../components/FormEdit/FormEdit";
import UserImgProfile from "../../components/UserImgProfile/UserImgProfile";
import showToast from "../../utils/showToast";
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
  const [isSuccess, setIsSuccess] = useState(false);

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
  }, [isSuccess]);

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

  return (
    <Wrapper>
      <Container>
        <UserInfoMain>
          <UserInfoLeft>
            <UserInfoSelect>Tài khoản của tôi</UserInfoSelect>
            <UserInfoSelect onClick={handleLogOut}>Đăng xuất</UserInfoSelect>
          </UserInfoLeft>
          <UserInfoRight>
            <UserInfoTitle>TÀI KHOẢN CỦA TÔI</UserInfoTitle>
            <UserInfoSubTitle>Thông tin tài khoản</UserInfoSubTitle>
            <UserInfoList>
              <UserInfoItem>
                <h4>Thông tin liên lạc</h4>
                <h5>Name</h5>
                <UserInfoName>{user?.displayName || "chưa có"}</UserInfoName>

                <h5>Email</h5>
                <UserInfoEmail>{user?.email}</UserInfoEmail>

                <UserInfoBtns>
                  <UserInfoBtn>Sửa</UserInfoBtn>
                  <UserInfoBtn>Thay đổi password</UserInfoBtn>
                </UserInfoBtns>
              </UserInfoItem>
              <UserInfoItem>
                <h4>Ảnh đại diện</h4>
                <UserImgProfile photoUrl={user?.photoUrl} />
              </UserInfoItem>
              <UserInfoItem>
                <FormEdit
                  name={user?.displayName}
                  email={user?.email}
                  setIsSuccess={setIsSuccess}
                />
              </UserInfoItem>
            </UserInfoList>
          </UserInfoRight>
        </UserInfoMain>
      </Container>
    </Wrapper>
  );
};

export default UserInfo;
