"use client";
import Image from "next/image";
import footerPayment from "../../../public/img/shape/footer-payment.png";
import Mg from "../../../public/img/shape/message-1.svg";
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaSkype } from "react-icons/fa";
import Feature from "./Featured";

const Footer = () => {
  return (
    <div>
      <Feature/>
      <footer>
        <div className="tpfooter__area theme-bg-2">
          <div className="tpfooter__top pb-15">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="tpfooter__widget footer-col-1 mb-50">
                    <h4 className="tpfooter__widget-title">Liên hệ với tôi</h4>
                    <p>
                      Nếu bạn cần câu trả lời, vui lòng <br /> liên hệ:
                      <a href="">kien@gmail.com</a>
                    </p>
                    <div className="tpfooter__widget-social mt-45">
                      <span className="tpfooter__widget-social-title mb-5">Social Media:</span>
                        <a className="mx-2" href="#"><FaFacebook /></a>
                        <a className="mx-2" href="#"><FaTwitter /></a>
                        <a className="mx-2" href="#"><FaYoutube /></a>
                        <a className="mx-2" href="#"><FaPinterest /></a>
                        <a className="mx-2" href="#"><FaSkype /></a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="tpfooter__widget footer-col-2 mb-50">
                    <h4 className="tpfooter__widget-title">Địa chỉ</h4>
                    <p>56 Nam Chánh, Ngọc Chánh, Đầm Dơi, Cà Mau <br /> Việt Nam</p>
                    <div className="tpfooter__widget-time-info mt-35">
                      <span>Thứ 2 – Thứ 6: <b>8:10 AM – 6:10 PM</b></span>
                      <span>Thứ 7: <b>10:10 AM – 06:10 PM</b></span>
                      <span>Chủ Nhật: <b>Đóng cửa</b></span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-5">
                  <div className="tpfooter__widget footer-col-sm-4 mb-50">
                    <h4 className="tpfooter__widget-title">Danh Mục Hot</h4>
                    <div className="tpfooter__widget-links">
                      <ul>
                        <li><a href="#">Hải sản tươi sống</a></li>
                        <li><a href="#">Các loại khô</a></li>
                        <li><a href="#">Hải sản nhập khẩu</a></li>
                        <li><a href="#">Hải sản qua sơ chế</a></li>
                        <li><a href="#">Hải sản đông lạnh</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-8 col-sm-7">
                  <div className="tpfooter__widget footer-col-4 mb-50">
                    <h4 className="tpfooter__widget-title">Our newsletter</h4>
                    <div className="tpfooter__widget-newsletter">
                      <p>Đăng ký danh sách gửi thư của Orfarm để nhận thông tin cập nhật
                       <br /> về những người mới đến và các thông tin khác.</p>
                      <form action="">
                        <span>
                          <Mg/>
                        </span>
                        <input type="email" placeholder="Your email address..." />
                        <button className="tpfooter__widget-newsletter-submit tp-news-btn">Subscribe</button>
                      </form>
                      <div className="tpfooter__widget-newsletter-check mt-10">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                          Tôi chấp nhận các điều khoản & điều kiện & chính sách bảo mật.
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
