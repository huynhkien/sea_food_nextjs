"use client";
import { memo, useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/img/logo/logo.png";
import Icon1 from "../../../public/img/icon/cart-1.svg";
import { getCurrent } from '../../store/user/asyncActions';
import {Search} from "../../components/Index";
import { logout } from '../../store/user/userSlice';
import { FaSearch, FaRegUser,FaHeart, FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import {useSelector} from "react-redux";
import {showCart} from "../../store/app/appSlice";
import Cart from './Cart';
import {apiGetCategory} from "../../api"


const Header = ({dispatch}) => {
  const backgroundImage = "/img/banner/Screenshot 2024-06-10 160321.png";
  const [category, setCategory] = useState(null);
  const [searchProduct, setSearchProduct] = useState(false);
  const { isLogin, current, mes } = useSelector((state) => state.user);  
  const { isShowCart} = useSelector((state) => state.app);
  const fetchCategory = async() => {
      const response = await apiGetCategory();
      if(response.success) setCategory(response.data);
  }
  useEffect(() => {
   fetchCategory();
  },[])
  console.log(category);
  useEffect(() => {
  const setTimeOutId = setTimeout(() => {
     if(isLogin) dispatch(getCurrent())
   },300)
   return () => {
     clearTimeout(setTimeOutId)
   }
 }, [dispatch, isLogin]);
  
  return (
   
    <header>
         <div className="header__top theme-bg-1 d-none d-md-block">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                     <div className="header__top-left">
                        <span>Sản phẩm tại <strong>SHOP</strong> luôn được nhập mới mỗi ngày.</span>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                     <div className="header__top-right d-flex align-items-center">
                        <div className="header__top-link">
                           <a href="#">Vị trí</a>
                           <a href="#">Đơn hàng</a>
                           <a href="faq.html">FAQs</a>
                        </div>
                        <div className="header__lang">
                           {current ? (
                           <span className="header__lang-select">Welcome, {current?.name}</span>
                           ):
                           (
                              <span className="header__lang-select">Welcome, Guest</span>
                           )}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div id="header-sticky" className="header__main-area d-none d-xl-block">
            <div className="container">
               <div className="header__for-megamenu p-relative">
                  <div className="row align-items-center">
                     <div className="col-xl-3">
                        <div className="header__logo">
                           <a href={'/'}><Image src={Logo} alt="Payment Methods" width={0} height={0} /></a>
                        </div>
                     </div>
                     <div className="col-xl-6">
                        <div className="header__menu main-menu text-center">
                           <nav id="mobile-menu">
                              <ul>
                                 <li className="has-dropdown has-homemenu">
                                    <a href={'/'}>Trang chủ</a>
                                 </li>
                                 <li className="has-dropdown has-megamenu" >
                                    <a>Danh mục</a>
                                    <ul className="sub-menu mega-menu d-flex flex-wrap" style={{ backgroundImage: `url(${backgroundImage})` }}>
                                       {category?.map((el) =>(
                                       <li className='py-1'>
                                          <Link href={`/category/${el?.slug}`}>
                                          {el?.name}
                                          </Link>
                                       </li>
                                       ))}
                                    </ul>
                                 </li>
                                 <li><a href={'/product'}>Sản phẩm</a></li>
                                 <li><a href={'/about'}>Giới thiệu</a></li>
                                 <li><a href={'/contact'}>Liên hệ</a></li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                     <div className="col-xl-3">
                        <div className="header__info d-flex align-items-center">
                           <div onClick={() => setSearchProduct(true)} className="header__info-search tpcolor__purple ml-10">
                              <button className="tp-search-toggle"><i><FaSearch/></i></button>
                           </div>
                           {isLogin && current ? (
                              <>
                           <div className="header__info-wishlist tpcolor__greenish ml-10">
                           <Link href={'/user'} ><i><FaHome/></i></Link>
                           </div>
                           <div className="header__info-user tpcolor__yellow ml-10">
                              <Link href="/login" onClick={() => dispatch(logout())} ><i><IoIosLogOut/></i></Link>
                           </div>
                           </>
                           ) : (
                            
                           <div className="header__info-user tpcolor__yellow ml-10">
                           <Link href="/login"><i><FaRegUser/></i></Link>
                           </div>
                           )}
                           <div className="header__info-cart tpcolor__oasis ml-10 tp-cart-toggle">
                              <button onClick={() => dispatch(showCart())} ><i><Icon1 /></i>
                                 <span>{current?.cart?.length || 0}</span>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {isShowCart && <div className='cart-page position-fixed top-0 end-0 bg-light w-25 h-100 shadow-sm'>
      <Cart
        />
      </div>}
      {searchProduct && <div className='cart-page position-fixed top-0 bg-light w-100 h-50 shadow-sm'>
      <Search
         searchProduct={searchProduct}
         setSearchProduct={setSearchProduct}
        />
      </div>}
      </header>
  )
}

export default withBaseComponents(memo(Header));