import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, A11y } from 'swiper/modules';
import Product from '../../ui/public/Product';
import { apiGetProducts } from '../../api';

const tabs = [
  { id: 1, name: 'Nổi bật' },
  { id: 2, name: 'Sản phẩm mới' },
  { id: 3, name: 'Giá rẻ' }
];

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [cheapProducts, setCheapProducts] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

  const fetchProductsSold = async () => {
    const response = await apiGetProducts({ sort: '-sold', limit: 6 });
    if (response.success) setBestProducts(response.data);
  };

  const fetchProductsNew = async () => {
    const response = await apiGetProducts({ sort: '-createdAt', limit: 6 });
    if (response.success) setNewProducts(response.data);
  };

  const fetchProductsPrice = async () => {
    const response = await apiGetProducts({ sort: 'price', limit: 6 });
    if (response.success) setCheapProducts(response.data);
  };

  useEffect(() => {
    fetchProductsSold();
    fetchProductsNew();
    fetchProductsPrice();
  }, []);

  useEffect(() => {
    if (activeTab === 1) setProducts(bestProducts);
    if (activeTab === 2) setProducts(newProducts);
    if (activeTab === 3) setProducts(cheapProducts);
  }, [activeTab, bestProducts, newProducts, cheapProducts]);

  return (
    <section className="weekly-product-area grey-bg pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="tpsection mb-20">
              <h4 className="tpsection__sub-title">~ Sản phẩm ~</h4>
              <h4 className="tpsection__title">Ưu đãi hàng tuần</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="tpnavtab__area pb-40">
               <nav>
              <div className=" nav nav-tabs">
                {tabs.map((el) => (
                  <span
                    key={el.id}
                    className={`nav-link ${activeTab === el.id ? 'text-dark' : ''}`}
                    onClick={() => setActiveTab(el.id)}
                  >
                    {el.name}
                  </span>
                ))}
              </div>
              </nav>
                <Swiper
                  modules={[Autoplay, A11y]}
                  spaceBetween={3}
                  slidesPerView={5}
                  loop={true}
                  autoplay={{ delay: 5000 }}
                  className='SwiperProduct py-5'
                >
                  {products?.map((el) => (
                    <SwiperSlide key={el._id} className='py-5'>
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
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
