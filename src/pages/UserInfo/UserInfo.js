import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Container from "../../components/Container";
import FormEdit from "./FormEdit/FormEdit";
import showToast from "../../utils/showToast";

import {
  UserInfoBtn,
  UserInfoBtns,
  UserInfoEmail,
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
import { motion } from "framer-motion";
import UserImg from "./UserImg";

const UserInfo = () => {
  const history = useHistory();
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const [isShowFormEdit, setIsShowFormEdit] = useState(false);
  const [isImgUpload, setIsImgUpload] = useState(false);

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
  }, [isLoad, isImgUpload]);

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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
                    <UserInfoBtn
                      onClick={() => setIsShowFormEdit(!isShowFormEdit)}
                    >
                      Sửa
                    </UserInfoBtn>
                    <UserInfoBtn>Thay đổi password</UserInfoBtn>
                  </UserInfoBtns>
                </UserInfoItem>
                <UserInfoItem>
                  <UserImg
                    user={user}
                    setIsImgUpload={setIsImgUpload}
                    isImgUpload={isImgUpload}
                  />
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
    </motion.div>
  );
};

export default UserInfo;
