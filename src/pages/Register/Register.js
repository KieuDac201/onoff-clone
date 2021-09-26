import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Container from "../../components/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import {
  Wrapper,
  LoginMain,
  LoginTitle,
  LoginLeft,
  LoginForm,
  FormButtons,
  LoginRight,
  LoginClientState,
  FormError,
  FormGroup,
  FormLabel,
  FormInput,
} from "../Login/styled";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { schemaRegister } from "../../utils/yup";
import PulseLoader from "react-spinners/PulseLoader";
import showToast from "../../utils/showToast";
import { motion } from "framer-motion";

const Register = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [errorAlready, setErrorAlready] = useState({
    isAlready: false,
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        setErrorAlready({ isAlready: false, message: "" });
        showToast("Đăng ký thành công!", "success");
        reset();
        history.replace("/");
        setIsLoading(false);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setErrorAlready({ isAlready: true, message: "Email đã tồn tại" });
        setIsLoading(false);
      });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Wrapper>
        <Container>
          <LoginMain>
            <LoginLeft>
              <LoginTitle>TẠO TÀI KHOẢN MỚI</LoginTitle>
              <LoginClientState>Thông tin đăng nhập</LoginClientState>

              <LoginForm onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                  <FormLabel>
                    Email <span>*</span>
                  </FormLabel>
                  <FormInput {...register("email")} type="email" />
                </FormGroup>
                <FormError>{errors.email?.message}</FormError>
                <FormError>
                  {errorAlready.isAlready ? errorAlready.message : ""}
                </FormError>
                <FormGroup>
                  <FormLabel>
                    Mật khẩu <span>*</span>
                  </FormLabel>
                  <FormInput {...register("password")} type="password" />
                </FormGroup>
                <FormError>{errors.password?.message}</FormError>
                <FormGroup>
                  <FormLabel>
                    Nhập lại mật khẩu <span>*</span>
                  </FormLabel>
                  <FormInput {...register("cPassword")} type="password" />
                </FormGroup>
                <FormError>{errors.cPassword?.message}</FormError>
                <FormButtons>
                  <button type="submit">
                    {isLoading ? (
                      <PulseLoader color="#ffffff" loading={true} size={15} />
                    ) : (
                      "Đăng ký"
                    )}
                  </button>
                </FormButtons>
              </LoginForm>
            </LoginLeft>
            <LoginRight>
              <LoginClientState>Khách hàng cũ</LoginClientState>
              <Link to="/login">
                <Button fill text="Đăng nhập" />
              </Link>
            </LoginRight>
          </LoginMain>
        </Container>
      </Wrapper>
    </motion.div>
  );
};

export default Register;
