"use client";
import React from 'react'
import Image from "next/image";
import Image3 from "../../../public/img/slider/pngtree-fresh-lobster-on-white-background-concept-photo-png-image_14427538.png"
import Image4 from "../../../public/img/slider/pngtree-fresh-squid-isolated-on-white-background-isolated-photo-png-image_14311055.png"
import Image5 from "../../../public/img/slider/pngtree-grilled-seafood-platter-with-a-white-background-and-photo-png-image_14414245.png"
import Logo1 from "../../../public/img/logo/Screenshot_2024-06-27_231248-removebg-preview.png"
import Logo2 from "../../../public/img/logo/Screenshot_2024-06-27_231308-removebg-preview.png"
import Logo3 from "../../../public/img/logo/Screenshot_2024-06-27_231341-removebg-preview.png"
import Logo4 from "../../../public/img/logo/Screenshot_2024-06-27_231403-removebg-preview.png"

const page = () => {
    const backgroundImage = "/img/banner/7-BANG-GIA-HAI-SAN-scaled.jpg";
  return (
    <div>
                <section className="about-area tpabout__inner-bg pt-175 pb-170 mb-50" style={{ backgroundImage: `url(${backgroundImage})`, height:`50vw` }}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="tpabout__inner text-center ">
                        <div className="tpabout__inner-btn">
                        <h5 className="tpabout__inner-sub mb-15">Giới thiệu về Sea Food</h5>
                        <h3 className="tpabout__inner-title mb-35">Chất lượng và Uy tín</h3>
                        <p className=''>Cửa hàng có 25 năm hoạt động trong lĩnh vực <br/> kinh doanh, bôn bán hải sản.</p>
                           <a href="about.html">About us</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="about-area pt-100 pb-60">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="tpabout__inner-thumb-2 p-relative mb-30">
                     <Image class="" src={Image5} width={600} height={450} />
                        <div className="tpabout__inner-thumb-shape d-none d-md-block">
                           <div className="tpabout__inner-thumb-shape-one">
                           <Image class="" src={Image3} width={150} height={150} />
                           </div>
                           <div className="tpabout__inner-thumb-shape-two">
                           <Image class="" src={Image4} width={150} height={150} />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="tpabout__inner-2 mb-30">
                        <div className="tpabout__inner-tag mb-10">
                           <span className="active">About us</span>
                           <span>Welcome to SeaFood</span>
                        </div>
                        <h3 className="tpabout__inner-title-2 mb-25">Quá trình phát  <br/> triển của SeaFood</h3>
                        <p>Cửa hàng luôn mon muốn cung cấp tới khách hàng những sản phẩm chất lượng nhất. <br/>
                        Với mong muốn này, trong suốt quá trình phát triển Sea Food luôn đảm bảo sự hài lòng  <br/> của khách hàng là trên hết.</p>
                        <div className="tpabout__inner-list">
                           <ul>
                              <li><i className="icon-check"></i> Hải sản được tuyển chọn kỹ càng.</li>
                              <li><i className="icon-check"></i>Đảm bảo tươi sống giao đến khách hàng.</li>
                              <li><i className="icon-check"></i> Giá thành rẻ nhất trên thị trường.</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="choose-area tpchoose__bg pb-80 grey-bg">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 text-center">
                     <div className="tpsection mb-35 pt-75">
                        <h4 className="tpsection__sub-title">~ Tại sao chọn chúng tôi? ~</h4>
                        <h4 className="tpsection__title">Điều gì khiến chúng tôi khác biệt?</h4>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                     <div className="tpchoose__item text-center mb-30">
                        <div className="tpchoose__icon mb-20">
                        <Image class="" src={Logo1} width={150} height={150} />
                        </div>
                        <div className="tpchoose__content">
                           <h4 className="tpchoose__title">100% đánh bắt tự nhiên</h4>
                           <p>Hải sản được đánh bắt trực tiếp tự các vùng biển hoặc được nuôi trồng.</p>
                           <a href="#" className="tpchoose__details d-flex align-items-center justify-content-center">learn more<i className="icon-chevrons-right"></i></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                     <div className="tpchoose__item text-center mb-30">
                        <div className="tpchoose__icon mb-20">
                        <Image class="" src={Logo2} width={150} height={150} />
                        </div>
                        <div className="tpchoose__content">
                           <h4 className="tpchoose__title">Chất lượng cao cấp</h4>
                           <p>Đảm bảo cung cấp tới khách hàng những sản phẩm chất lượng nhất.</p>
                           <a href="#" className="tpchoose__details d-flex align-items-center justify-content-center">learn more<i className="icon-chevrons-right"></i></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                     <div className="tpchoose__item text-center mb-30">
                        <div className="tpchoose__icon mb-20">
                        <Image class="" src={Logo3} width={150} height={150} />
                        </div>
                        <div className="tpchoose__content">
                           <h4 className="tpchoose__title">Giá rẻ</h4>
                           <p>Hải sản tại cửa hàng luôn rẻ hơn so với các khu vực khác.</p>
                           <a href="#" className="tpchoose__details d-flex align-items-center justify-content-center">learn more<i className="icon-chevrons-right"></i></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                     <div className="tpchoose__item text-center mb-30">
                        <div className="tpchoose__icon mb-20">
                        <Image class="" src={Logo4} width={150} height={150} />
                        </div>
                        <div className="tpchoose__content">
                           <h4 className="tpchoose__title">Giao hàng tân nơi</h4>
                           <p>Đảm bảo khách hàng nhận được hàng trong thời gian nhanh nhất.</p>
                           <a href="#" className="tpchoose__details d-flex align-items-center justify-content-center">learn more<i className="icon-chevrons-right"></i></a>
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