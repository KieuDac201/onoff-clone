import React from "react";
import Container from "../Container";
import { BiPhone, BiChat } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { GrFacebookOption, GrInstagram, GrYoutube } from "react-icons/gr";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <Title>CÔNG TY CỔ PHẦN ONOFF</Title>
            <Text>ĐKKD: 0303930269, ngày cấp: 18/08/2005</Text>
            <Text>Sở Kế hoạch và đầu tư TP. Hồ Chí Minh</Text>
            <Text>
              Địa chỉ trụ sở chính: 366 Hai Bà Trưng, Phường Tân Định, Quận 1,
              TP Hồ Chí Minh
            </Text>
            <Img
              src="https://onoff.vn/media/images/bocongthuong.png"
              alt="chung nhan"
            />
          </Col>
          <Col>
            <Title>THÔNG TIN HỖ TRỢ</Title>
            <TextSm>Hướng dẫn thanh toán</TextSm>
            <TextSm>Hướng dẫn mua hàng</TextSm>
            <TextSm>Hướng dẫn chọn size</TextSm>
            <TextSm>Hướng dẫn đổi trả</TextSm>
            <TextSm>Hướng dẫn theo dõi đơn hàng</TextSm>
            <TextSm>Câu hỏi thường gặp</TextSm>
            <Title margin>CHÍNH SÁCH</Title>
            <TextSm>Chính sách vận chuyển</TextSm>
            <TextSm>Chính sách đổi trả</TextSm>
            <TextSm>Chính sách bảo mật</TextSm>
          </Col>

          <Col>
            <Title>THƯƠNG HIỆU</Title>
            <TextSm>Giới thiệu</TextSm>
            <TextSm>Blog</TextSm>
            <TextSm>Hệ thống cửa hàng</TextSm>
            <TextSm>Tuyển dụng</TextSm>
            <TextSm>Liên hệ</TextSm>
            <Title margin>ƯU ĐÃI</Title>
            <TextSm>Thẻ quà tặng</TextSm>
            <TextSm>Khách hàng thân thiết</TextSm>
          </Col>

          <Col>
            <Title>TÀI KHOẢN CỦA BẠN</Title>
            <TextSm>Tra cứu đơn hàng</TextSm>
            <TextSm>Lịch sử mua hàng</TextSm>
          </Col>

          <Col>
            <Title>LIÊN HỆ</Title>
            <Text>
              <BiPhone />
              0934441808 (số điện thoại cá nhân)
            </Text>
            <Text>
              <BiPhone />
              0946988885 (KD bán buôn MB)
            </Text>
            <Text>
              <BiPhone />
              0931490049 (KD bán buôn MN)
            </Text>
            <Text>
              <BiChat />
              Live chat
            </Text>
            <Text>
              <MdMailOutline />
              kieudac18082001@gmail.com
            </Text>

            <Title>ĐĂNG KÝ NHẬN MAIL TỪ ONOFF</Title>
            <Form>
              <MdMailOutline />
              <Input type="text" placeholder="Nhập email của bạn tại đây" />
              <Btn>Đăng ký</Btn>
            </Form>
            <Socials>
              <Social>
                <GrFacebookOption />
              </Social>
              <Social>
                <GrInstagram />
              </Social>
              <Social>
                <GrYoutube />
              </Social>
            </Socials>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  background: #333f48;
  padding: 35px 0;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 25px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 40px;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 40px;
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 40px;
  }
`;
const Col = styled.div`
  @media (max-width: 1200px) {
    &:last-child {
      grid-column: 1 / 2;
      grid-row: 2/ 3;
    }
  }
  @media (max-width: 900px) {
    &:nth-child(4) {
      grid-column: 2/ 3;
      grid-row: 3 / 4;
    }
  }
  @media (max-width: 650px) {
    &:nth-child(4) {
      grid-row: auto;
      grid-column: auto;
    }
  }
`;
const Title = styled.div`
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: ${(props) => (props.margin ? "32px" : "0px")};
  @media (max-width: 650px) {
    margin-top: 30px;
  }
`;
const Text = styled.p`
  color: #fff;
  font-size: 14px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  svg {
    font-size: 28px;
    margin-right: 10px;
  }
`;
const TextSm = styled.p`
  color: #999;
  font-size: 14px;
  margin-bottom: 8px;
  cursor: pointer;
  svg {
    width: 24px;
  }
  :hover {
    transform: translateX(5px);
    transition: 0.2s ease-in-out;
  }
`;
const Img = styled.img``;
const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; ;
`;
const Social = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;
const Form = styled.div`
  height: 32px;
  background-color: #fff;
  padding: 0 8px;
  padding-right: 2px;
  display: inline-flex;
  align-items: center;
  border: 1px solid #333;
  margin-bottom: 24px;
`;
const Input = styled.input`
  height: 100%;
  border: none;
  outline: none;
  padding: 0 10px;
  flex: 1;
  font-size: 12px;
`;
const Btn = styled.button`
  width: 80px;
  height: 28px;
  background-color: #000;
  color: #fff;
  line-height: 28px;
  text-align: center;
  border: none;
`;
