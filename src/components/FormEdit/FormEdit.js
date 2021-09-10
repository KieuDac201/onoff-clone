import React, { useState } from "react";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaEdit } from "../../utils/yup";
import { FormError } from "../../pages/Login/styled";
import { getAuth, updateEmail, updateProfile } from "firebase/auth";

const FormEdit = ({ email, name, setIsSuccess }) => {
  const auth = getAuth();

  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaEdit),
  });

  const onSubmit = (data) => {
    updateProfile(auth.currentUser, {
      displayName: data.name,
    })
      .then(() => {
        setIsSuccess(true);
      })
      .catch((error) => {
        setIsSuccess(false);
      });
  };

  return (
    <FormEditMain onSubmit={handleSubmit(onSubmit)}>
      <FormEditLabel>Name</FormEditLabel>
      <FormEditInput type="name" {...register("name")} defaultValue={name} />
      <FormError>{errors.name?.message}</FormError>
      <FormEditLabel>Email</FormEditLabel>
      <FormEditInput type="text" {...register("email")} defaultValue={email} />
      <FormError>{errors.email?.message}</FormError>

      <FormEditBtn type="submit">Cập nhật</FormEditBtn>
    </FormEditMain>
  );
};

export default FormEdit;

const FormEditMain = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const FormEditInput = styled.input`
  padding: 5px 10px;
`;
const FormEditLabel = styled.label`
  margin-bottom: 5px;
`;
const FormEditBtn = styled.button`
  padding: 10px 10px;
  color: #fff;
  background: #000;
  border: 1px solid #000;
  font-weight: 600;
  &:hover {
    background: none;
    color: #000;
    cursor: pointer;

    transition: 0.2s ease-in-out;
  }
`;
