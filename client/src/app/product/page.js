"use client";
import { useEffect, useState, useCallback } from "react";
import { Breadcrumb, Pagination } from "../../components/Index";
import { apiGetProducts } from "../../api";
import Product from "../../ui/public/Product";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchItem, InputSelect } from "../../components/Index";
import { sorts } from "../../util/contant";

const Page = () => {
  const backgroundImage = "/img/banner/HS-THB-1300k-TGHS138-web-pre.jpg";
  const [products, setProducts] = useState(null);
  const router = useRouter();
  const [activeClick, setActiveClick] = useState(null);
  const searchParams = useSearchParams();
  const [sort, setSort] = useState('');
  const page = searchParams.get("page") || 1;

  const fetchProducts = async (queries) => {
    const response = await apiGetProducts({ ...queries, page, limit: 8});
    console.log(response);
    if (response.success) setProducts(response);
  };

  const changeActiveFilter = useCallback((name) => {
    setActiveClick((prevActiveClick) => (prevActiveClick === name ? null : name));
  }, []);

  const changeValue = useCallback((value) => {
    setSort(value);
  }, []);

  useEffect(() => {
    const queries = Object.fromEntries(searchParams);

    let priceQuery = {};
    if (queries.from && queries.to) {
      priceQuery = {
        price: {
          gte: queries.from,
          lte: queries.to,
        },
      };
      delete queries.from;
      delete queries.to;
    } else if (queries.from) {
      priceQuery = {
        price: {
          gte: queries.from,
        },
      };
      delete queries.from;
    } else if (queries.to) {
      priceQuery = {
        price: {
          lte: queries.to,
        },
      };
      delete queries.to;
    }

    const q = { ...queries, ...priceQuery, sort };
    fetchProducts(q);

    const searchString = new URLSearchParams(q).toString();
    router.push(`/product?${searchString}`);
  }, [searchParams, sort]);
 
  return (
    <div>
      <Breadcrumb category='Product'/>
      <section className="shop-area-start grey-bg pb-200">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-12 col-md-12">
              <div className="tpshop__leftbar">
                <div className="tpshop__widget mb-30 pb-25">
                  <h4 className="tpshop__widget-title">Sắp xếp</h4>
                  <InputSelect
                     value={sort} 
                     options ={sorts} changeValue={changeValue}/>
                </div>
                <div class="tpshop__widget mb-30 pb-25">
                           <h4 class="tpshop__widget-title mb-20">Lọc theo giá</h4>
                           <SearchItem
                           name='Price'
                           changeActiveFilter={changeActiveFilter}
                           activeClick={activeClick}/>
                        </div>
                
              </div>
            </div>
            <div className="col-xl-10 col-lg-12 col-md-12">
            <div class="tpshop__top ml-60">
            <div class="tpshop__banner mb-30" style={{ 
                                              backgroundImage: `url(${backgroundImage})`,
                                              backgroundSize: 'cover', 
                                              backgroundPosition: 'center center', 
                                              backgroundRepeat: 'no-repeat' }}>
                           <div class="tpshop__content text-center">
                              <span>Hải sản</span>
                              <h4 class="tpshop__content-title mb-20">Chất lượng <br/>và đảm bảo an toàn</h4>
                              <p>Hãy đến với cửa hàng hải sản để lựa chọn những sản phẩm chất lượng</p>
                           </div>
                        </div>
                        <div class="row row-cols-xxl-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols tpproduct__shop-item">
                           {products?.data?.map((el) => (
                              <div className="col product-col">
                           <Product
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
                           </div>
                        ))}
                  </div>
                  <Pagination
        totalCount={products?.counts}
       />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
