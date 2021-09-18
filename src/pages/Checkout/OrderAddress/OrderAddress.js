import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../../context/AppProvider";

const apiVietNam = "https://provinces.open-api.vn/api/?depth=3";

const OrderAdress = () => {
  const [addressVn, setAddressVn] = useState([]);
  // const [wards, setWards] = useState([]);
  const { addressClient, setAddressClient } = useContext(AppContext);

  useEffect(() => {
    fetch(apiVietNam)
      .then((res) => res.json())
      .then((data) => {
        const handleData = () => {
          const obj = {};
          data.forEach((item) => {
            obj[item.name] = {};
            item.districts.forEach((district) => {
              obj[item.name][district.name] = [];
              district.wards.forEach((ward) => {
                obj[item.name][district.name].push(ward.name);
              });
            });
          });
          return obj;
        };

        setAddressVn(handleData());
      });
  }, []);

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddressClient({ ...addressClient, [name]: value });
  };

  return (
    <OrderForm>
      <FormGroup>
        <FormLabel>Họ tên</FormLabel>
        <FormInput type="text" name="name" onChange={handleOnChange} />
      </FormGroup>
      <FormDouble>
        <FormGroup>
          <FormLabel>Tỉnh/Thành</FormLabel>
          <select name="city" onChange={handleOnChange}>
            {Object.keys(addressVn).map((city) => (
              <option value={city} key={city}>
                {city}
              </option>
            ))}
          </select>
        </FormGroup>
        <FormGroup>
          <FormLabel>Quận/Huyện</FormLabel>
          <select name="district" onChange={handleOnChange}>
            {addressVn[addressClient.city] &&
              Object.keys(addressVn[addressClient.city]).map((district) => (
                <option value={district} key={district}>
                  {district}
                </option>
              ))}
          </select>
        </FormGroup>
      </FormDouble>
      <FormGroup>
        <FormLabel>Phường/Xã</FormLabel>
        <select name="ward" onChange={handleOnChange}>
          {addressVn[addressClient.city] &&
            addressVn[addressClient.city][addressClient.district]?.map(
              (ward) => (
                <option value={ward} key={ward}>
                  {ward}
                </option>
              )
            )}
        </select>
      </FormGroup>
      <FormGroup>
        <FormLabel>Số điện thoại</FormLabel>
        <FormInput type="number" name="phone" onChange={handleOnChange} />
      </FormGroup>
      <FormGroup>
        <FormLabel>Ghi chú</FormLabel>
        <FormInput type="text" name="note" onChange={handleOnChange} />
      </FormGroup>
    </OrderForm>
  );
};

export default OrderAdress;

const OrderForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const FormLabel = styled.p`
  font-size: 14px;
`;
const FormDouble = styled.div`
  display: flex;
  gap: 10px;
`;
const FormGroup = styled.div`
  flex: 1;
  select {
    padding: 5px 10px;
    width: 100%;
  }
`;
const FormInput = styled.input`
  width: 100%;
  padding: 5px 10px;
  flex-grow: 1;
`;
