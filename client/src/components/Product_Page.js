import Product from "../ui/public/Product"
import {Breadcrumb} from "../components/Index"
const Product_Page = () => {
  return (
    <section>
         <Breadcrumb category="Product" />
         <section class="shop-area-start grey-bg pb-200">
            <div class="container">
               <div class="row">
                  <div class="col-xl-2 col-lg-12 col-md-12">
                     <div class="tpshop__leftbar">
                        <div class="tpshop__widget mb-30 pb-25">
                           <h4 class="tpshop__widget-title">Product Categories</h4>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" checked id="flexCheckDefault9"/>
                              <label class="form-check-label" for="flexCheckDefault9">
                                 Biscuits & Snacks (08)
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
                              <label class="form-check-label" for="flexCheckDefault2">
                                 Fresh Fruits (12)
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" checked id="flexCheckDefault3"/>
                              <label class="form-check-label" for="flexCheckDefault3">
                                 Exotic Fruits (09)
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" checked id="flexCheckDefault4"/>
                              <label class="form-check-label" for="flexCheckDefault4">
                                 Breads & Bakery (05)
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value=""  id="flexCheckDefault5"/>
                              <label class="form-check-label" for="flexCheckDefault5">
                                 Breakfast & Dairy (09)
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault6"/>
                              <label class="form-check-label" for="flexCheckDefault6">
                                 Honey (05)
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7"/>
                              <label class="form-check-label" for="flexCheckDefault7">
                                 Milk & Flavoured (04)
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault8"/>
                              <label class="form-check-label" for="flexCheckDefault8">
                                 Meats & Seafood (08)
                              </label>
                           </div>
                        </div>
                        <div class="tpshop__widget mb-30 pb-25">
                           <h4 class="tpshop__widget-title mb-20">FILTER BY PRICE</h4>
                           <div class="productsidebar">
                              <div class="productsidebar__head">
                              </div>
                              <div class="productsidebar__range">
                                 <div id="slider-range"></div>
                                 <div class="price-filter mt-10"><input type="text" id="amount"/>
                              </div>
                              </div>
                           </div>
                           <div class="productsidebar__btn mt-15 mb-15">
                              <a href="#">FILTER</a>
                           </div>
                        </div>
                        <div class="tpshop__widget mb-30 pb-25">
                           <h4 class="tpshop__widget-title mb-20">Filter by Color</h4>
                           <div class="tpshop__widget-color-box">
                              <div class="form-check">
                                 <input class="form-check-input black-input" type="checkbox" value="" id="flexCheckDefault12"/>
                                 <label class="form-check-label" for="flexCheckDefault12">
                                    Black
                                 </label>
                              </div>
                              <div class="form-check">
                                 <input class="form-check-input blue-input" type="checkbox" value="" checked id="flexCheckChecked13"/>
                                 <label class="form-check-label" for="flexCheckChecked13">
                                    Blue
                                 </label>
                              </div>
                              <div class="form-check">
                                 <input class="form-check-input brown-input" type="checkbox" value=""  checked id="flexCheckChecked18"/>
                                 <label class="form-check-label" for="flexCheckChecked18">
                                    Brown
                                 </label>
                              </div>
                              <div class="form-check">
                                 <input class="form-check-input grey-input" type="checkbox" value="" id="flexCheckChecked14"/>
                                 <label class="form-check-label" for="flexCheckChecked14">
                                    Gray
                                 </label>
                              </div>
                              <div class="form-check">
                                 <input class="form-check-input green-input" type="checkbox" value="" id="flexCheckChecked15"/>
                                 <label class="form-check-label" for="flexCheckChecked15">
                                    Green
                                 </label>
                              </div>
                              <div class="form-check">
                                 <input class="form-check-input orange-input" type="checkbox" value="" id="flexCheckChecked16"/>
                                 <label class="form-check-label" for="flexCheckChecked16">
                                     Yellow
                                 </label>
                              </div>
                              <div class="form-check">
                                 <input class="form-check-input red-input" type="checkbox" value="" id="flexCheckChecked17"/>
                                 <label class="form-check-label" for="flexCheckChecked17">
                                    Red
                                 </label>
                              </div>
                           </div>
                        </div>
                        <div class="tpshop__widget mb-30 pb-25">
                           <h4 class="tpshop__widget-title">FILTER BY BRAND</h4>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault18"/>
                              <label class="form-check-label" for="flexCheckDefault18">
                                 Chrome Hearts  (15)
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault19"/>
                              <label class="form-check-label" for="flexCheckDefault19">
                                 Dominique Aurientis  (15)
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" checked id="flexCheckDefault20"/>
                              <label class="form-check-label" for="flexCheckDefault20">
                                 Galliano  (15)
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" checked id="flexCheckDefault21"/>
                              <label class="form-check-label" for="flexCheckDefault21">
                                 Georgine  (15)
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault22"/>
                              <label class="form-check-label" for="flexCheckDefault22">
                                 Matthew Christopher  (15)
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault23"/>
                              <label class="form-check-label" for="flexCheckDefault23">
                                 Paul Gaultier  (15)
                              </label>
                           </div>
                        </div>
                        <div class="tpshop__widget">
                           <h4 class="tpshop__widget-title">FILTER BY RATING</h4>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault24"/>
                              <label class="form-check-label" for="flexCheckDefault24">
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 (45)
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" checked id="flexCheckDefault25"/>
                              <label class="form-check-label" for="flexCheckDefault25">
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 (10)
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" checked id="flexCheckDefault26"/>
                              <label class="form-check-label" for="flexCheckDefault26">
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 (05)
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault27"/>
                              <label class="form-check-label" for="flexCheckDefault27">
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 (02)
                              </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault28"/>
                              <label class="form-check-label" for="flexCheckDefault28">
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 <i class="icon-star_rate"></i>
                                 (02)
                              </label>
                           </div>
                        </div>
                     </div>
                     <div class="tpshop__widget">
                        <div class="tpshop__sidbar-thumb mt-35">
                           <img src="assets/img/shape/sidebar-product-1.png" alt=""/>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-10 col-lg-12 col-md-12">
                     <div class="tpshop__top ml-60">
                        <div class="tpshop__banner mb-30" data-background="assets/img/banner/shop-bg-1.jpg">
                           <div class="tpshop__content text-center">
                              <span>The Salad</span>
                              <h4 class="tpshop__content-title mb-20">Fresh & Natural <br/>Healthy Food Special Offer</h4>
                              <p>Do not miss the current offers of us!</p>
                           </div>
                        </div>
                        <div class="product__filter-content mb-40">
                           <div class="row align-items-center">
                              <div class="col-sm-4">
                              </div>
                           </div>
                        </div>
                        <div class="basic-pagination text-center mt-35">
                           <nav>
                              <ul>
                                 <li>
                                    <span class="current">1</span>
                                 </li>
                                 <li>
                                    <a href="blog.html">2</a>
                                 </li>
                                 <li>
                                    <a href="blog.html">3</a>
                                 </li>
                                 <li>
                                    <a href="blog.html">
                                       <i class="icon-chevrons-right"></i>
                                    </a>
                                 </li>
                              </ul>
                            </nav>
                        </div>   
                     </div>
                  </div>
               </div>
            </div>
         </section>
         
         <section class="feature-area mainfeature__bg grey-bg pt-50 pb-40" data-background="assets/img/shape/footer-shape-1.svg">
            <div class="container">
               <div class="mainfeature__border pb-15">
                  <div class="row row-cols-lg-5 row-cols-md-3 row-cols-2">
                     <div class="col">
                        <div class="mainfeature__item text-center mb-30">
                           <div class="mainfeature__icon">
                              <img src="assets/img/icon/feature-icon-1.svg" alt=""/>
                           </div>
                           <div class="mainfeature__content">
                              <h4 class="mainfeature__title">Fast Delivery</h4>
                              <p>Across West & East India</p>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="mainfeature__item text-center mb-30">
                           <div class="mainfeature__icon">
                              <img src="assets/img/icon/feature-icon-2.svg" alt=""/>
                           </div>
                           <div class="mainfeature__content">
                              <h4 class="mainfeature__title">safe payment</h4>
                              <p>100% Secure Payment</p>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="mainfeature__item text-center mb-30">
                           <div class="mainfeature__icon">
                              <img src="assets/img/icon/feature-icon-3.svg" alt=""/>
                           </div>
                           <div class="mainfeature__content">
                              <h4 class="mainfeature__title">Online Discount</h4>
                              <p>Add Multi-buy Discount </p>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="mainfeature__item text-center mb-30">
                           <div class="mainfeature__icon">
                              <img src="assets/img/icon/feature-icon-4.svg" alt=""/>
                           </div>
                           <div class="mainfeature__content">
                              <h4 class="mainfeature__title">Help Center</h4>
                              <p>Dedicated 24/7 Support </p>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="mainfeature__item text-center mb-30">
                           <div class="mainfeature__icon">
                              <img src="assets/img/icon/feature-icon-5.svg" alt=""/>
                           </div>
                           <div class="mainfeature__content">
                              <h4 class="mainfeature__title">Curated items</h4>
                              <p>From Handpicked Sellers</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </section>
  )
}

export default Product_Page