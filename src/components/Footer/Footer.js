import React from "react";
import Container from "../Container";
import { BiPhone, BiChat } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { GrFacebookOption, GrInstagram, GrYoutube } from "react-icons/gr";
import {
  Wrapper,
  Row,
  Col,
  Title,
  Text,
  Img,
  TextSm,
  Form,
  Input,
  Btn,
  Socials,
  Social,
} from "./styled";

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
            <Title margin>CHÍNH SÁCH</Title>
            <TextSm>Chính sách vận chuyển</TextSm>
            <TextSm>Chính sách đổi trả</TextSm>
            <TextSm>Chính sách bảo mật</TextSm>
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
