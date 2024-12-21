import { memo, useEffect, useState } from 'react'
import Image from 'next/image';
import { MdCancel } from 'react-icons/md';
import { GiCancel } from "react-icons/gi";

import { useSelector } from 'react-redux';
import {apiRemoveCart} from "../../api/user"
import withBaseComponents from '../../hocs/withBaseComponents';
import {showCart, showModal} from "../../store/app/appSlice";
import {formatMoney} from "../../util/helper"
import { toast } from 'react-toastify';
import { getCurrent } from "../../store/user/asyncActions";


const Cart = ({dispatch,router}) => {
   const { isLogin, currentCart, mes } = useSelector(state => state.user);  
   console.log(currentCart?.product?._id);
   const handleRemoveCart = async(id) => {
      const response = await apiRemoveCart(id);
      if(response.success) {
         toast.success(response.mes);  
         dispatch(getCurrent());
      }else{
         toast.error(response.mes)
      }
   }
  return (
    <div onClick={e => e.stopPropagation()}>
           <div class="tpcart">
               <div className='d-flex justify-content-between'>
                <h4 class="tpcart__title">Your Cart</h4>
                <span onClick={() =>dispatch(showCart()) } className=''><MdCancel fontSize='25' color='red'/></span>
              </div>
              <div class="tpcart__product">
                 <div class="tpcart__product-list">
                    <ul>
                     {!currentCart || currentCart?.product?._id == '' && <span>Giỏ hàng trống</span>}

                     {currentCart?.map((el, index) => (
                       <li>
                          <div class="tpcart__item">
                             <div class="tpcart__img">
                             <img className='img__cart--page' src={el?.thumb} alt="Payment Methods" width={0} height={0} />
                                <div onClick={() => handleRemoveCart(el?.product?._id)} class="tpcart__del">
                                   <a href="#"><i><GiCancel fontSize='20' color=''/></i></a>
                                </div>
                             </div>
                             <div class="tpcart__content">
                                <span class="tpcart__content-title"><a href="shop-details.html">{el?.product?.name}</a>
                                </span>
                                <div class="tpcart__cart-price">
                                   <span class="quantity">{el?.quantity} x</span>
                                   <span class="new-price">{formatMoney(el?.price)} VNĐ</span>
                                </div>
                             </div>
                          </div>
                       </li>
                      ))}
                    </ul>
                 </div>
                 <div class="tpcart__checkout">
                    <div class="tpcart__total-price d-flex justify-content-between align-items-center">
                       <span> Subtotal:</span>
                       <span class="heilight-price">{formatMoney(currentCart?.reduce((sum, el) => sum + el.price * el.quantity, 0))} VNĐ</span>
                    </div>
                    <div class="tpcart__checkout-btn">
                       <a class="tpcart-btn mb-10" 
                        onClick={() => {
                           dispatch(showModal({isShowModal: false, modalChildren: null}))
                           router.push('/cart')
                        }}
                       
                       >View Cart</a>
                       <a class="tpcheck-btn" href={'/checkout'}>Checkout</a>
                    </div>
                 </div>
              </div>
              <div class="tpcart__free-shipping text-center position-fixed bottom-0 end-0">
                 <span>Miễn phí ship trong <b>10km</b></span>
              </div>
           </div>
    </div>
  )
}

export default withBaseComponents(memo(Cart));