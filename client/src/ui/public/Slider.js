
"use client"; 
import Image from "next/image";
// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image1 from "../../../public/img/slider/pngtree-a-crab-on-a-white-background-picture-image_1713646-removebg-preview.png"
import Image2 from "../../../public/img/slider/pngtree-fish-sitting-on-a-white-background-picture-image_2775878-removebg-preview.png"
import Image3 from "../../../public/img/slider/pngtree-fresh-lobster-on-white-background-concept-photo-png-image_14427538.png"
import Image4 from "../../../public/img/slider/pngtree-fresh-squid-isolated-on-white-background-isolated-photo-png-image_14311055.png"
import Image5 from "../../../public/img/slider/pngtree-grilled-seafood-platter-with-a-white-background-and-photo-png-image_14414245.png"
import Image6 from "../../../public/img/slider/pngtree-grilled-combination-of-seafood-on-a-white-background-with-photo-png-image_13388725.png"
import Image7 from "../../../public/img/slider/pngtree-scrumptious-seafood-delicacy-oysters-showcased-on-a-textured-white-backdrop-image_13760867-removebg-preview.png"
const Slider = () => {
  return (
  <section class="slider-area tpslider-delay secondary-sliderbg">
   <div class="swiper-container slider-active">
      <Swiper
          navigation
          pagination={{clickable: true}}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]} 
         class="swiper-wrapper">
         <SwiperSlide class="swiper-slide">
            <div class="tpslider pt-90 pb-0 grey-bg" data-background={Image5}>
               <div class="container">
                  <div class="row align-items-center">
                     <div class="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-7">
                        <div class="tpslider__content pt-20">
                           <span class="tpslider__sub-title mb-35">Hải sản luôn trong tình trạng tươi sống</span>
                           <h2 class="tpslider__title mb-30">Thưởng thức vị ngọt <br/> của hải sản.</h2>
                           <p>Cung cấp cho khách hàng những bữa ăn <br/> chất lượng nhất</p>
                           <div class="tpslider__btn">
                              <a class="tp-btn" href={'/contact'}>Liên hệ</a>
                           </div>
                        </div>
                     </div>
                     <div class="col-xxl-7 col-xl-6 col-lg-6 col-md-6 col-sm-5">
                        <div class="tpslider__thumb p-relative pt-70">
                           <Image class="tpslider__thumb-img" src={Image6} width={600} height={500} alt="slider-bg"/>
                           <div class="tpslider__shape d-none d-md-block">
                              <Image class="tpslider__shape-one" src={Image1} width={150} height={150} />
                              <Image class="tpslider__shape-two" src={Image2} width={150} height={150} />
                              <Image class="tpslider__shape-three" src={Image3} width={150} height={150} />
                              <Image class="tpslider__shape-four" src={Image4} width={150} height={150} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </SwiperSlide>
         <SwiperSlide class="swiper-slide">
            <div class="tpslider pt-90 pb-0 grey-bg" data-background={Image5}>
               <div class="container">
                  <div class="row align-items-center">
                     <div class="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-7">
                        <div class="tpslider__content pt-20">
                        <span class="tpslider__sub-title mb-35">Hải sản luôn trong tình trạng tươi sống</span>
                           <h2 class="tpslider__title mb-30">Thưởng thức vị ngọt <br/> của hải sản.</h2>
                           <p>Cung cấp cho khách hàng những bữa ăn <br/> chất lượng nhất</p>
                           <div class="tpslider__btn">
                              <a class="tp-btn" href={'/contact'}>Liên hệ</a>
                           </div>
                        </div>
                     </div>
                     <div class="col-xxl-7 col-xl-6 col-lg-6 col-md-6 col-sm-5">
                        <div class="tpslider__thumb p-relative">
                           <Image class="tpslider__thumb-img" src={Image7} width={600} height={500} alt="slider-bg"/>
                           <div class="tpslider__shape d-none d-md-block">
                             <Image class="tpslider__shape-one" src={Image1} width={150} height={150} />
                             <Image class="tpslider__shape-two" src={Image2} width={150} height={150} />
                              <Image class="tpslider__shape-three" src={Image3} width={150} height={150} />
                              <Image class="tpslider__shape-four" src={Image4} width={150} height={150} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </SwiperSlide>
         <SwiperSlide class="swiper-slide">
            <div class="tpslider pt-90 pb-0 grey-bg" data-background={Image5}>
               <div class="container">
                  <div class="row align-items-center">
                     <div class="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-7">
                        <div class="tpslider__content pt-20">
                        <span class="tpslider__sub-title mb-35">Hải sản luôn trong tình trạng tươi sống</span>
                           <h2 class="tpslider__title mb-30">Thưởng thức vị ngọt <br/> của hải sản.</h2>
                           <p>Cung cấp cho khách hàng những bữa ăn <br/> chất lượng nhất</p>
                           <div class="tpslider__btn">
                              <a class="tp-btn" href={'/contact'}>Liên hệ</a>
                           </div>
                        </div>
                     </div>
                     <div class="col-xxl-7 col-xl-6 col-lg-6 col-md-6 col-sm-5">
                        <div class="tpslider__thumb p-relative pt-70">
                           <Image class="tpslider__thumb-img" src={Image5} width={600} height={500} alt="slider-bg"/>
                           <div class="tpslider__shape d-none d-md-block">
                              <Image class="tpslider__shape-one" src={Image1} width={150} height={150} />
                              <Image class="tpslider__shape-two" src={Image2} width={150} height={150} />
                              <Image class="tpslider__shape-three" src={Image3} width={150} height={150} />
                              <Image class="tpslider__shape-four" src={Image4} width={150} height={150} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </SwiperSlide>
      </Swiper>
      <div class="slider-pagination"></div>
   </div>
</section>
  )
}

export default Slider