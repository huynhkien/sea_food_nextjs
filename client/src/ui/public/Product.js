'use client'
import Link from "next/link";
import { FaHeart, FaRegEye, FaCartPlus   } from "react-icons/fa";
import { formatMoney, renderStartFromNumber } from '../../util/helper';
import {apiUpdateCart, apiUpdateWishList} from "../../api";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { getCurrent } from "../../store/user/asyncActions";

const Product = ({productData}) => {
   const {current} = useSelector(state => state.user);
   const dispatch = useDispatch();
   const router = useRouter();
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
      const response = await apiUpdateCart({pid: productData.id,  variant: productData.variant, price: productData.price, thumb: productData.thumb, name: productData.name});
      if(response.success){
         toast.success(response.mes)
         dispatch(getCurrent());
      }else{
         toast.error(response.mes)
      }
      
   }
   const handleAddWishList = async() =>{
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
      const response = await apiUpdateWishList(productData.id);
      if(response.success){
         toast.success(response.mes)
      }else{
         toast.error(response.mes)
      }
      
   }
   
   return (
    <div class="tpproduct p-relative shadow-sm">
         <div class="tpproduct__thumb p-relative text-center ">
                                <Link href={`/product/${productData?.id}`}><img src={productData?.thumb} width={0} height={0} alt=""/></Link>
                                <Link class="tpproduct__thumb-img" href={`/product/${productData?.id}`}><img src={productData?.image} width={0} height={0} alt=""/></Link>
                                <div class="tpproduct__info bage">{productData?.coupon &&
                                   <span class="tpproduct__info-discount bage__discount">-{productData.coupon}%</span>}
                                   {productData?.quantity === 0 && 
                                   <span class="tpproduct__info-hot bage__hot">Hết hàng</span>
                                   }
                                </div>
                                {productData?.quantity !== 0 &&
                                <div class="tpproduct__shopping">
                                   <button class="tpproduct__shopping-wishlist" onClick={handleAddWishList}><i><FaHeart/></i></button>
                                   <button class="tpproduct__shopping-wishlist"><i><Link href={`/product/${productData?.id}`}><FaRegEye/></Link></i></button>
                                   <button class="tpproduct__shopping-cart" onClick={handleAddCart}><i><FaCartPlus/></i></button>
                                </div>
                                 }
         </div>
         <div class="tpproduct__content">
                                <h4 class="tpproduct__title">
                                   <Link href="/">{productData?.name}</Link>
                                </h4>
                                <div class="tpproduct__rating mb-5">
                                {renderStartFromNumber(productData?.totalRatings)?.map((el, index) => (
                                   <span key={index}>{el}</span>
                                ))}
                                </div>
                                <div class="tpproduct__price">
                                   <span>{`${formatMoney(productData?.price)} VNĐ`}</span>
                                   {productData?.coupon &&
                                   <del>{`${formatMoney(productData?.priceCoupon)} VNĐ`}</del>
                                 }
                                </div>
                              </div>
                            <div class="tpproduct__hover-text ">
                            {productData?.quantity !== 0 && 
                            <>
                                <div class="tpproduct__hover-btn d-flex justify-content-center mb-10">
                                   <button class="tp-btn-2" onClick={handleAddCart}>Add to cart</button>
                                </div>
                              
                                <div class="tpproduct__descrip">
                                   <ul>
                                      <li>Danh mục: {productData?.category}</li>
                                      <li>{productData?.variant}</li>
                                   </ul>
                                </div>
                                </>
}
          </div>
   </div>
  )
}

export default Product