
"use client"
import { apiGetProducts, apiUpdateCart } from '../../api';
import { formatMoney, renderStartFromNumber } from '../../util/helper';
import {CountDown} from '../../components/Index'
import React, { useEffect, useState} from 'react'
import { toast } from "react-toastify"
import Swal from "sweetalert2"
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux"

let idInterval;
const Deadly = () => {
   const router = useRouter();
   const {current} = useSelector(state => state.user);

    const [deal, setDeal] = useState(null);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [ expiryTime, setExpireTime] = useState(false);
    const backgroundImage = "/img/banner/banner-hai-san.jpg";
    const handleAddCart = async() =>{
      if(!current){
         return Swal.fire({
            text: 'Vui lòng đăng nhập',
            icon: 'info',
            cancelButtonText: 'Không phải bây giờ!',
            showCancelButton: true,
            confirmButtonText: 'Chuyển đến trang đăng nhập'
         }).then((rs) => {
            if(rs.isConfirmed) router.push('/login')
         })
      }
      const response = await apiUpdateCart({pid: deal._id,  variant: deal.variant, price: deal.price, thumb: deal.thumb.url, name: deal.name});
      if(response.success){
         toast.success(response.mes)
      }else{
         toast.error(response.mes)
      }
      
   }
   
    const fetchDealDaily = async() => {
        const response = await apiGetProducts({limit: 1, page: Math.round(Math.random()*1), totalRatings: 5});
        if(response.success) {
            setDeal(response.data[0]);
            setHour(24);
            setMinute(60);
            setSecond(60);
        }
    }
useEffect(() => {
    idInterval && clearInterval(idInterval);
    fetchDealDaily();
},[expiryTime]);
useEffect(()=> {
   idInterval = setInterval(() => {
        if(second  > 0 ) setSecond(prev => prev-1);
        else{
            if(minute > 0) {
                setMinute(prev => prev -1);
                setSecond(60);
            }else{
                if(hour > 0){
                    setHour(prev => prev-1)
                    setMinute(60);
                setSecond(60)
                }else{
                    setExpireTime(true);
                }
            }
           
    }
    }, 1000)
    return () => {
        clearInterval(idInterval);
    }
},[second,minute,hour,expiryTime]);
  return (
   <section class="product-coundown-area tpcoundown__bg grey-bg pb-25 bg-light"  >
               <div class="container">
                  <div class="row">
                     <div class="col-lg-12">
                        <div class="tpcoundown p-relative ml-175">
                           <div class="section__content mb-35">
                              <span class="section__sub-title mb-10 text-dark">~ Sản phẩm nổi bật trong tuần ~</span>
                              <h2 class="section__title mb-25 text-dark">{deal?.name}</h2>
                           </div>
                           <div className="section__content mb-35">
                              <div class="row">
                                 <div class="col-lg-3 col-md-3">
                                    <div class="tpfeature__box">
                                       <div class="tpfeature__product-item mb-25">
                                          <h4 class="tpfeature__product-title">Danh mục:</h4>
                                          <span class="tpfeature__product-info">{deal?.category}</span>
                                       </div>
                                       <div class="tpfeature__product-item mb-45">
                                          <h4 class="tpfeature__product-title">Quy cách:</h4>
                                          <span class="tpfeature__product-">{deal?.specifications}</span>
                                       </div>
                                       <div class="tpfeature__btn">
                                    <a class="tp-btn-4" onClick={handleAddCart} >Add To Cart</a>
                                 </div>
                                    </div>
                                 </div>
                                 <div class="col-lg-3 col-md-3">
                                    <div class="tpfeature__box">
                                       <div class="tpfeature__product-item mb-25">
                                          <h4 class="tpfeature__product-title">Trạng thái:</h4>
                                          <span class="tpfeature__product-info">{deal?.status}</span>
                                       </div>
                                       <div class="tpfeature__product-item mb-45">
                                          <h4 class="tpfeature__product-title">Nguồn gốc:</h4>
                                          <span class="tpfeature__product-">{deal?.origin}</span>
                                       </div>
                                       <div class="tpfeature__btn">
                                    <a class="tp-btn-3" href={`/product/${deal?._id}`}>View More</a>
                                 </div>
                                    </div>
                                 </div>
                                 <div className="col-lg-6 col-md-6">
                                  <img className="" height={400} width={500} src={deal?.thumb?.url}/>
                                 </div>
                           </div>
                           <div className='row'>
                           <div class="tpcoundown__count">
                                    <div class="tpcoundown__countdown" data-countdown="2024/06/11">
                                       <CountDown unit={'Hours'}   number={hour}/>
                                       <CountDown unit={'Minutes'}  number={minute}/>
                                       <CountDown unit={'Seconds'} number={second}/>
                                    </div>
                                 </div>
                           </div>
                           </div>
                        </div>
                        
                     </div>
                  </div>
               </div>
            </section>
  )
}

export default Deadly