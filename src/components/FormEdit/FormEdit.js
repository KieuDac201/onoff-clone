import { yupResolver } from "@hookform/resolvers/yup";
import { getAuth, updateProfile } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { FormError } from "../../pages/Login/styled";
import { schemaEdit } from "../../utils/yup";
import {
  FormEditBtn,
  FormEditInput,
  FormEditLabel,
  FormEditMain,
} from "./styled";

const FormEdit = ({ name, setIsLoad, isLoad, setIsShowFormEdit }) => {
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
    console.log(data);
    updateProfile(auth.currentUser, {
      displayName: data.name,
    })
      .then(() => {
        setIsLoad(!isLoad);
      })
      .catch((error) => {
        setIsLoad(!isLoad);
      });

    reset();
    setIsShowFormEdit(false);
  };

  return (
    <FormEditMain onSubmit={handleSubmit(onSubmit)}>
      <FormEditLabel>Name</FormEditLabel>
      <FormEditInput type="text" {...register("name")} defaultValue={name} />
      <FormError>{errors.name?.message}</FormError>

      <FormEditBtn type="submit">Cập nhật</FormEditBtn>
    </FormEditMain>
  );
};

export default FormEdit;
