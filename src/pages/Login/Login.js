import { yupResolver } from "@hookform/resolvers/yup";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import Container from "../../components/Container";
import { schemaLogin } from "../../utils/yup";
import PulseLoader from "react-spinners/PulseLoader";
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
import showToast from "../../utils/showToast";
import { motion } from "framer-motion";

const Login = () => {
  const history = useHistory();
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        history.replace("/user-info");
      }
    });
  }, []);

  const onSubmit = (data) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        showToast("Đăng nhập thành công", "success");
        setErrorIncorect({
          isInCorect: false,
          message: "",
        });
        reset();
        setIsLoading(false);
        history.replace("/");
      })
      .catch((error) => {
        setErrorIncorect({
          isInCorect: true,
          message: "Email hoặc mật khẩu không đúng",
        });
        setIsLoading(false);
      });
  };
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Wrapper>
        <Container>
          <LoginMain>
            <LoginLeft>
              <LoginTitle>TÀI KHOẢN</LoginTitle>
              <LoginClientState>
                Khách hàng đã đăng ký tài khoản
              </LoginClientState>
              <LoginText>
                Bạn đã có tài khoản, xin mời đăng nhập bằng địa chỉ email đăng
                ký.
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
                  <button type="submit">
                    {isLoading ? (
                      <PulseLoader color="#ffffff" loading={true} size={15} />
                    ) : (
                      "Đăng nhập"
                    )}
                  </button>
                  <FormButtonForgot>Quên mật khẩu</FormButtonForgot>
                </FormButtons>
              </LoginForm>
            </LoginLeft>
            <LoginRight>
              <LoginClientState>Khách hàng mới</LoginClientState>
              <Link to="/register">
                <Button fill="true" text="Đăng ký" />
              </Link>
            </LoginRight>
          </LoginMain>
        </Container>
      </Wrapper>
    </motion.div>
  );
};

export default Login;
