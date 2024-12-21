"use client";
import Image from 'next/image';
import { useParams } from "next/navigation"
import {apiGetProduct} from "../../../api"
import {  useCallback, useEffect, useState } from "react";
import { TabPane, TabInfo, Breadcrumb } from "../../../components/Index";
import {formatMoney, renderStartFromNumber} from "../../../util/helper";
import Image1 from "../../../../public/img/shape/payment-2.png";
import { PiPackageFill } from "react-icons/pi";
import { IoShieldOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import Banner from "../../../../public/img/banner/hai-san.jpg";
import Quantity from "../../../components/Quantity";
import withBaseComponents from '../../../hocs/withBaseComponents';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import {apiUpdateCart} from "../../../api";
import Product_Relative from '../../../ui/public/Product_Relative';
import { getCurrent } from "../../../store/user/asyncActions";




const page = ({router, dispatch}) => {
   const {id} = useParams();
   const { isLogin, current, mes } = useSelector(state => state.user);  
   const [product, setProduct] = useState(null);
   const [quantity, setQuantity] = useState(1);
   const [variants, setVariants] = useState(null);
   const [currentProduct, setCurrentProduct] = useState({
      title: '',
      price: '',
      thumb: '',
   })
   useEffect(() => {
      if (variants) {
         const selectedVariant = product?.variants?.find(el => el.sku === variants);
         setCurrentProduct({
            title: selectedVariant?.title,
            price: selectedVariant?.price,
            thumb: selectedVariant?.thumb?.url,
         });
      } else {
         setCurrentProduct({
            title: product?.variant,
            price: product?.price,
            thumb: product?.thumb?.url,
         });
      }
   }, [variants, product]);
   const fetchProduct = async() => {
      const response = await apiGetProduct(id);
      if(response.success) setProduct(response.data);
   }
   useEffect(() => {
      fetchProduct();
   },[]);
  const handleQuantity = useCallback((number) => {
    if(!Number(number) || Number(number) < 1) {
     return;
    }else {
      setQuantity(number);
    }
  
  }, [quantity]);
  const handleChangeQuantity = useCallback((flag) => {
    if(flag === 'minus' && quantity ===1) return;
    if(flag === 'minus') setQuantity(prev => +prev - 1);
    if(flag === 'plus') setQuantity(prev => +prev + 1);
  }, [quantity]);
  const handleAddCart = async() =>{
   if(!current){
      localStorage.setItem('redirectUrl', router.asPath);
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
   const response = await apiUpdateCart({pid: id, quantity , variant: currentProduct.title, price: currentProduct.price, thumb: currentProduct.thumb, name: product.name});
   if(response.success){
      toast.success(response.mes);
      dispatch(getCurrent());
   }else{
      toast.error(response.mes)
   }
   
}
  return (
    <section>
       
   <Breadcrumb
      category='Product' categoryUrl={'/product'}
      name={product?.name}
   />
  <div class="shopdetails-area grey-bg pb-50">
   <div class="container">
      <div class="row">
         <div class="col-lg-10 col-md-12">
            <div class="tpdetails__area mr-60 pb-30">
               <div class="tpdetails__product mb-30 bg-light shadow-sm">
                  <div class="tpdetails__title-box">
                     <h3 class="tpdetails__title">{product?.name}</h3>
                     <ul class="tpdetails__brand">
                        <li> Thương hiệu: <a href="#">SEAFOOD</a> </li>
                        <li>
                        {renderStartFromNumber(product?.totalRatings)?.map((el, index) => (
                                                   <span key={index}>{el}</span>
                                                ))}  
                        </li>
                        <li>
                           SKU: <span>ORFARMVE005</span>
                        </li>
                     </ul>
                  </div>
                  <div class="tpdetails__box">
                     <div class="row">
                        <div class="col-lg-6">
                           <div class="tpproduct-details__nab">
                              <TabPane images={product?.images.map(img => img.url)} />
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="product__details">
                              <div class="product__details-price-box">
                              <h5 className="product__details-price">{formatMoney(currentProduct?.price)} VNĐ</h5>
                                 <ul class="product__details-info-list">
                                    <li>Giao hàng tận nơi</li>
                                    <li>Miễn phí ship trong 10Km</li>
                                    <li>Đảm bảo khách hàng nhận được sản phẩm chất lượng</li>
                                 </ul>
                              </div>
                              <div class="product__color-switch mb-25">
                                 <h4 class="product__color-title">Chọn: </h4>
                                 <div class="tpshop__widget-color-box d-flex align-items-center">
                                    <div onClick={() => setVariants(null)} style={{cursor:'pointer'}} className={`bg-white rounded shadow-sm p-2 ${!variants && 'border border-success'}`}>
                                       <img src={product?.thumb?.url} width={40}/>
                                       <span>{product?.variant}</span>
                                    </div>
                                    {product?.variants?.map((el,index) =>(
                                    <div onClick={() => setVariants(el.sku)} style={{cursor:'pointer'}} className={`bg-white rounded shadow-sm p-2 mx-1 ${variants === el.sku  && 'border border-success'}`}>
                                       <img src={el?.thumb?.url} width={40}/>
                                       <span>{el?.title}</span>
                                    </div>
                                    ))}
                                 </div>
                              </div>
                              <div class="product__details-cart">
                                 <div class="product__details-quantity d-flex align-items-center mb-15">
                                    <b>Qty:</b>
                                    <div class="product__details-count mr-10">
                                    <Quantity
                                       quantity={quantity}
                                       handleQuantity={handleQuantity}
                                       handleChangeQuantity={handleChangeQuantity}/>
                                    </div>
                                    <div class="product__details-btn">
                                       <button onClick={handleAddCart}>add to cart</button>
                                    </div>
                                 </div>
                                 <ul class="product__details-check">
                                    <li>
                                       <a href="#"><i class="icon-heart icons"></i> add to wishlist</a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon-layers"></i> Add to Compare</a>
                                    </li>
                                    <li> 
                                       <a href="#"><i class="icon-share-2"></i> Share</a>
                                    </li>
                                 </ul>
                              </div>
                              <div class="product__details-stock mb-25">
                                 <ul>
                                    <li>Số lượng: <i>{product?.quantity}</i></li>
                                    <li>Danh mục: <span>{product?.category}</span></li>
                                    <li>Tình trạng: <span>{product?.status}</span></li>
                                    <li>Quy cách: <span>{product?.specifications
                                    }</span></li>
                                 </ul>
                              </div>
                              <div class="product__details-payment text-center">
                              <Image src={Image1} alt="Payment Methods" width={0} height={0} />
                                 <span>Đảm bảo thanh toán an toàn & bảo mật</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="tpdescription__box shadow-sm">
                  <TabInfo
                     description={product?.description}
                     total = {product?.totalRatings}
                     ratings={product?.ratings}
                     nameProduct={product?.name}
                     pid={product?._id}
                     setProduct = {fetchProduct}
                  />
               </div>
               <div class="tpdescription__box shadow-sm py-5 my-4">
                  <h4>Sản phẩm khác</h4>
                  <Product_Relative/>
               </div>
            </div>
         </div>
         <div class="col-lg-2 col-md-12">
            <div class="tpsidebar pb-30">
               <div class="tpsidebar__warning mb-30">
                  <ul>
                     <li>
                        <div class="tpsidebar__warning-item">
                           <div class="tpsidebar__warning-icon">
                              <i ><PiPackageFill/></i>
                           </div>
                           <div class="tpsidebar__warning-text">
                              <p>Miễn phí vận chuyển cho
                               <br/>đơn hàng trên $90</p>
                           </div>
                        </div>
                     </li>
                     <li>
                        <div class="tpsidebar__warning-item">
                           <div class="tpsidebar__warning-icon">
                              <i><IoShieldOutline/></i>
                           </div>
                           <div class="tpsidebar__warning-text">
                              <p>Đảm bảo 100% hữu cơ<br/>  từ trang trại thiên nhiên</p>
                           </div>
                        </div>
                     </li>
                     <li>
                        <div class="tpsidebar__warning-item">
                           <div class="tpsidebar__warning-icon">
                              <i><FaShoppingCart/></i>
                           </div>
                           <div class="tpsidebar__warning-text">
                              <p>Hoàn trả trong 1 ngày
                              <br/> nếu bạn thay đổi</p>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
               <div class="tpsidebar__banner mb-30">
               <Image src={Banner} alt="Payment Methods" className='rounded' width={0} height={0} />
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</section>
  )
}

export default withBaseComponents(page);