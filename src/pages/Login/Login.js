import React, { useState } from "react";
import Container from "../../components/Container";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormButtonForgot,
  FormButtons,
  FormError,
  FormGroup,
  FormInput,
  FormLabel,
  LoginClientState,
  LoginForm,
  LoginLeft,
  LoginMain,
  LoginRight,
  LoginText,
  LoginTitle,
  Wrapper,
} from "./styled";
import { Link } from "react-router-dom";
import { schemaLogin } from "../../utils/yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const history = useHistory();
  const [errorIncorect, setErrorIncorect] = useState({
    isInCorect: false,
    message: "",
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = (data) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        history.replace("/");
        toast.success("Đăng nhập thành công!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setErrorIncorect({
          isInCorect: false,
          message: "",
        });
        reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorIncorect({
          isInCorect: true,
          message: "Email hoặc mật khẩu không đúng",
        });
      });
  };
  return (
    <Wrapper>
      <Container>
        <LoginMain>
          <LoginLeft>
            <LoginTitle>TÀI KHOẢN</LoginTitle>
            <LoginClientState>Khách hàng đã đăng ký tài khoản</LoginClientState>
            <LoginText>
              Bạn đã có tài khoản, xin mời đăng nhập bằng địa chỉ email đăng ký.
            </LoginText>
            <LoginForm onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <FormLabel>
                  Email <span>*</span>
                </FormLabel>
                <FormInput {...register("email")} type="email" />
              </FormGroup>
              <FormError>{errors.email?.message}</FormError>
              <FormError>
                {errorIncorect.isInCorect ? errorIncorect.message : ""}
              </FormError>
              <FormGroup>
                <FormLabel>
                  Mật khẩu <span>*</span>
                </FormLabel>
                <FormInput {...register("password")} type="password" />
              </FormGroup>
              <FormError>{errors.password?.message}</FormError>
              <FormButtons>
                <button type="submit">Đăng nhập</button>
                <FormButtonForgot>Quên mật khẩu</FormButtonForgot>
              </FormButtons>
            </LoginForm>
          </LoginLeft>
          <LoginRight>
            <LoginClientState>Khách hàng mới</LoginClientState>
            <Link to="/register">
              <Button fill text="Đăng ký" />
            </Link>
          </LoginRight>
        </LoginMain>
        <ToastContainer />
      </Container>
    </Wrapper>
  );
};

export default Login;
