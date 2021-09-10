import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 470px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: ${(props) => (props.isShowCart ? "0" : "-100%")};
  bottom: 0;
  background: #fff;
  z-index: 55;
  transition: 0.2s ease-in-out;
`;
export const CartTitle = styled.p`
  padding: 15px 0;
  font-size: 17px;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  background: #dedede;
`;
export const CartBtnClose = styled.span`
  position: absolute;
  top: 50%;
  right: 12px;
  padding: 5px;
  cursor: pointer;
  transform: translateY(-45%);
  font-size: 25px;
`;
export const CartList = styled.div`
  flex: 1;
  overflow-y: scroll;
  & > p {
    text-align: center;
    margin-top: 30px;
    font-size: 14px;
  }
`;
export const CartItem1 = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px;
`;
export const CartTotal = styled.div`
  padding: 10px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background: #595959;
`;
export const CartTotalTitle = styled.div``;
export const CartTotalPrice = styled.div``;
export const CartButton = styled.div`
  padding: 12px 0;
  font-size: 18px;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  background: #000;
  cursor: pointer;
  &:hover {
    background: #999;
    transition: 0.2s ease-in-out;
  }
`;
export const CartImg = styled.img`
  max-width: 125px;
  width: 100%;
`;
export const CartContent = styled.div`
  padding: 8px 8px 20px 0;
  font-size: 14px;
  flex: 1;
`;
export const CartItemName = styled.div`
  color: #006bb4;
  margin-bottom: 16px;
`;
export const CartItemNewPrice = styled.p`
  margin-bottom: 5px;
`;
export const CartItemOldPrice = styled.p`
  text-decoration: line-through;
  margin-bottom: 20px;
  font-size: 12px;
`;
export const CartItemQuantity = styled.div`
  p {
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
export const CartQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const CartQuantityBtns = styled.div`
  display: flex;
  align-items: center;
`;
export const CartQuantityBtn = styled.div`
  width: 34px;
  height: 34px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const CartBtnDel = styled.div`
  font-size: 20px;
  color: #595959;
  cursor: pointer;
`;
