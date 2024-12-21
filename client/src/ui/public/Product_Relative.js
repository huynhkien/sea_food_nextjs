import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, A11y } from 'swiper/modules';
import Product from './Product';
import { apiGetProducts } from '../../api';

const Product_Relative = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await apiGetProducts({ sort: '-sold', limit: 6 });
    if (response.success) setProducts(response.data);
  };

  
  useEffect(() => {
    fetchProducts();
    
  }, []);

  return (
                <Swiper
                  modules={[Autoplay, A11y]}
                  spaceBetween={3}
                  slidesPerView={4}
                  loop={true}
                  autoplay={{ delay: 5000 }}
                  
                >
                  {products?.map((el) => (
                    <SwiperSlide key={el._id} >
                      <Product
                        key={el._id}
                        productData={{
                          thumb: el?.thumb?.url,
                          image: el?.images[0]?.url,
                          name: el?.name,
                          priceCoupon: el?.price,
                          price: el?.coupon ? el?.price * el?.coupon/100 : el?.price,
                          totalRatings: el?.totalRatings,
                          id: el?._id,
                          category: el?.category,
                          variant: el?.variant,
                          quantity: el?.quantity,
                          coupon: el?.coupon
                        }}                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
  );
};

export default Product_Relative;
