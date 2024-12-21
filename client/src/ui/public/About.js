import Image from "next/image";
import Image1 from "../../../public/img/shape/about-img-1.png";
import Image2 from "../../../public/img/icon/about-1.png";
import Image3 from "../../../public/img/icon/about-2.png";
import Image4 from "../../../public/img/icon/about-3.png";
const About = () => {
  return (
    <section class="about-area pt-70">
            <div class="container">
               <div class="tpabout__border pb-35">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="tpabout__title-img text-center mb-45">
                           <Image class="mb-25" src={Image1} width={0} height={0} alt=""/>
                           <p>Chúng tôi cung cấp nền tảng bán hải sản trực tuyến. <br/> Khách hàng có thể lựa chọn những sản phẩm <br/>tốt nhất tại cửa hàng.</p>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="tpabout__item text-center mb-40">
                           <div class="tpabout__icon mb-15">
                              <Image  src={Image2} width={120} height={100} alt=""/>
                           </div>
                           <div class="tpabout__content">
                              <h4 class="tpabout__title">Nhiều lựa chọn</h4>
                              <p>Khách hàng có nhiều sự lựa chọn. <br/> Liên hệ để mua hàng.</p>
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="tpabout__item text-center mb-40">
                           <div class="tpabout__icon mb-15">
                            <Image  src={Image3} width={120} height={100} alt=""/>
                           </div>
                           <div class="tpabout__content">
                              <h4 class="tpabout__title">Nhiều sản phẩm </h4>
                              <p>Hơn 100 lại hải sản khác nhau <br/> luôn được tươi mới.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="tpabout__item text-center mb-40">
                           <div class="tpabout__icon mb-15">
                            <Image  src={Image4} width={120} height={100} alt=""/>
                           </div>
                           <div class="tpabout__content">
                              <h4 class="tpabout__title">Giao hàng nhanh chóng </h4>
                              <p>Giao hàng toàn quốc  <br/> và miễn phí trong vòng 20 KM.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
  )
}

export default About