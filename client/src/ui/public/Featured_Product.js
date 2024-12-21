import Image from "next/image";
import { apiGetProducts, apiUpdateCart } from '../../api';
import Image1 from "../../../public/img/product/feature-shape-1.png"
import Image2 from "../../../public/img/product/feature-shape-2.png"
import Image3 from "../../../public/img/product/feature-shape-3.png"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const Featured_Product = () => {
   const router = useRouter();
   const [product, setProduct] = useState(null);
   const {current} = useSelector(state => state.user);
   const fetchProduct = async () => {
      const response = await apiGetProducts({ sort: '-sold', limit: 1 });
      if (response.success) setProduct(response.data[0]);
    };
    console.log(product);
    useEffect(() => {
      fetchProduct();
    },[])
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
      const response = await apiUpdateCart({pid: product._id,  variant: product.variant, price: product.price, thumb: product.thumb.url, name: product.name});
      if(response.success){
         toast.success(response.mes)
      }else{
         toast.error(response.mes)
      }
      
   }
  return (
    <section class="product-feature-area product-feature grey-bg pt-80 pb-40">
            <div class="container">
               <div class="row">
                  <div class="col-lg-6 col-md-12">
                     <div class="tpfeature__thumb p-relative pb-40">
                        <img src={product?.thumb?.url} height={500} alt="" className="rounded"/>
                        <div class="tpfeature__shape d-none d-md-block">
                           <Image class="tpfeature__shape-one" src={Image1} width={0} height={0} alt=""/>
                           <Image class="tpfeature__shape-two" src={Image2} width={0} height={0} alt=""/>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-6 col-md-12">
                     <div class="tpproduct-feature p-relative pt-45 pb-40">
                        <div class="tpsection tpfeature__content mb-35">
                           <h4 class="tpsection__sub-title mb-0">~ Sản phẩm hot  ~</h4>
                           <h4 class="tpsection__title tpfeature__title mb-25">{product?.name}</h4>
                        </div>
                        <div class="row">
                           <div class="col-lg-6 col-md-6">
                              <div class="tpfeature__box">
                                 <div class="tpfeature__product-item mb-25">
                                    <h4 class="tpfeature__product-title">Danh mục:</h4>
                                    <span class="tpfeature__product-info">{product?.category}</span>
                                 </div>
                                 <div class="tpfeature__product-item mb-45">
                                    <h4 class="tpfeature__product-title">Quy cách:</h4>
                                    <span class="tpfeature__product-">{product?.specifications}</span>
                                 </div>
                                 <div class="tpfeature__btn">
                                    <a class="tp-btn-4" onClick={handleAddCart} >Add To Cart</a>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-6 col-md-6">
                              <div class="tpfeature__box">
                                 <div class="tpfeature__product-item mb-25">
                                    <h4 class="tpfeature__product-title">Trạng thái:</h4>
                                    <span class="tpfeature__product-info">{product?.status}</span>
                                 </div>
                                 <div class="tpfeature__product-item mb-45">
                                    <h4 class="tpfeature__product-title">Nguồn gốc:</h4>
                                    <span class="tpfeature__product-">{product?.origin}</span>
                                 </div>
                                 <div class="tpfeature__btn">
                                    <a class="tp-btn-3" href={`/product/${product?._id}`}>View More</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="tpfeature__shape d-none d-md-block">
                           <Image class="tpfeature__shape-three" src={Image3} width={0} height={0} alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
  )
}

export default Featured_Product