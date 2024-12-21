"use client"
import Image from "next/image";
import Image1 from "../../../public/img/about/camau-454-10-2-11.jpg"
import Image2 from "../../../public/img/about/Cm1.jpg"
import Image3 from "../../../public/img/about/du-lich-can-tho-1_1624439842.jpg"
import Image4 from "../../../public/img/about/th05491-1688718340433-1688718343033345897273.jpg"
const page = () => {
  return (
    <div>
        <section className="contact-area mb-45">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-6">
                     <div className="tpcontact-inner text-center mt-20 mb-40">
                        <div className="tpcontact-inner-text">
                           <h5 className="tpcontact-inner-sub-title">Contact us</h5>
                           <h5 className="tpcontact-inner-title mb-20">Liên hệ SeaFood?</h5>
                           <p>Dưới đây là các địa chỉ mà khách hàng có thể đến trực tiếp cửa hàng.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-3 col-md-6">
                     <div className="tpcontact mb-30">
                        <div className="tpcontact__img mb-15 w-img">
                        <Image className="" src={Image1} width={150} height={150} />
                        </div>
                        <div className="tplocation__text">
                           <h4 className="tplocation__text-title">Đầm Đơi - Cà Mau</h4>
                           <div className="tplocation__content tplocation__content-two">
                              <ul>
                                 <li>
                                    <a href="#">Địa chỉ: Ngọc Chánh, Đầm Dơi, Cà Mau </a>
                                 </li>
                                 <li>
                                    <a href="tel:012345678">Số điện thoại: (+84) 123 456 7890</a>
                                 </li>
                                 <li>
                                    <a href="mailto:orfarm@google.com">Email: seafood@google.com</a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <div className="tpcontact mb-30">
                        <div className="tpcontact__img mb-15 w-img">
                        <Image className="" src={Image2} width={150} height={150} />
                        </div>
                        <div className="tplocation__text">
                           <h4 className="tplocation__text-title">Năm Căn - Cà Mau</h4>
                           <div className="tplocation__content tplocation__content-two">
                              <ul>
                                 <li>
                                    <a href="#">Địa chỉ: Ngọc Chánh, Năm Căn, Cà Mau </a>
                                 </li>
                                 <li>
                                    <a href="tel:012345678">Số điện thoại: (+84) 123 456 7890</a>
                                 </li>
                                 <li>
                                    <a href="mailto:orfarm@google.com">Email: seafood@google.com</a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <div className="tpcontact mb-30">
                        <div className="tpcontact__img mb-15 w-img">
                        <Image className="" src={Image3} width={150} height={150} />
                        </div>
                        <div className="tplocation__text">
                           <h4 className="tplocation__text-title">Ninh Kiều - Cần Thơ</h4>
                           <div className="tplocation__content tplocation__content-two">
                              <ul>
                                 <li>
                                    <a href="#">Địa chỉ: Ngọc Chánh, Đầm Dơi, Cà Mau </a>
                                 </li>
                                 <li>
                                    <a href="tel:012345678">Số điện thoại: (+84) 123 456 7890</a>
                                 </li>
                                 <li>
                                    <a href="mailto:orfarm@google.com">Email: seafood@google.com</a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <div className="tpcontact mb-30 w-img">
                        <div className="tpcontact__img mb-15">
                        <Image className="" src={Image4} width={150} height={150} />
                        </div>
                        <div className="tplocation__text">
                           <h4 className="tplocation__text-title">Cái Răng - Cần Thơ</h4>
                           <div className="tplocation__content tplocation__content-two">
                              <ul>
                                 <li>
                                    <a href="#">Địa chỉ: Ngọc Chánh, Đầm Dơi, Cà Mau </a>
                                 </li>
                                 <li>
                                    <a href="tel:012345678">Số điện thoại: (+84) 123 456 7890</a>
                                 </li>
                                 <li>
                                    <a href="mailto:orfarm@google.com">Email: seafood@google.com</a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="map-area tpmap__box">
            <div className="container">
               <div className="row gx-0">
                  <div className="col-lg-6 col-md-6 order-2 order-md-1">
                  <div className="tpmap__wrapper">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15763.125602600572!2d105.18829371285997!3d8.99225212643467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a150f2accc0ec5%3A0x381fdaf62f3ff434!2zVUJORCBodXnhu4duIMSQ4bqnbSBExqFp!5e0!3m2!1svi!2s!4v1719506313878!5m2!1svi!2s"
                        className="w-100 h-100"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 order-1 order-md-2">
                     <div className="tpform__wrapper pt-120 pb-80 ml-60">
                        <h4 className="tpform__title">LIÊN HỆ</h4>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <div className="tpform__box">
                           <form action="#">
                              <div className="row gx-7">
                                 <div className="col-lg-6">
                                    <div className="tpform__input mb-20">
                                       <input type="text" placeholder="Your Name *"/>
                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="tpform__input mb-20">
                                       <input type="email" placeholder="Your Email *"/>
                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="tpform__input mb-20">
                                       <input type="text" placeholder="Subject *"/>
                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="tpform__input mb-20">
                                       <input type="text" placeholder="Phone"/>
                                    </div>
                                 </div>
                                 <div className="col-lg-12">
                                    <div className="tpform__textarea">
                                       <textarea name="message" placeholder="Message"></textarea>
                                       <div className="tpform__textarea-check mt-20 mb-25">
                                          <div className="form-check">
                                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault01"/>
                                             <label className="form-check-label" for="flexCheckDefault01">
                                                I am bound by the terms of the <a href="#">Service I accept Privacy Policy.</a>
                                             </label>
                                           </div>                                  
                                       </div>
                                       <button>Send message</button>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </div>
  )
}

export default page