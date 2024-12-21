"use client"
import { Breadcrumb, Paypal, Congratulation } from "../../components/Index";
import Payment from "../../../public/img/banner/lovepik-pos-terminal-with-credit-card-isolated-on-white-paying-3d-photo-image_352141638-removebg-preview.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import {formatMoney} from "../../util/helper";
import {User} from "../../components/Index"
import { useEffect, useState } from "react";
import withBaseComponents from "../../hocs/withBaseComponents";
import { getCurrent } from "../../store/user/asyncActions";
const page = ({dispatch, router}) => {
   const { currentCart, current } = useSelector((state) => state.user);
   const total = currentCart?.reduce((sum, el) => sum + el.price * el.quantity, 0)/23500;
    const  [isSuccess, setIsSuccess] = useState(false);
    useEffect(() => {
      if(isSuccess) dispatch(getCurrent())
    },[isSuccess])
   return (
    <div>
      {isSuccess && <Congratulation/>}
      <Breadcrumb category='Checkout' />
      <section className="checkout-area pb-50">
        <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="checkbox-form">
                  <h3>Thông tin</h3>
                  <div className="row">
                    <User/>
                  </div>
                  <div className="different-address">
                  <Image src={Payment} alt="Payment" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="your-order mb-30">
                  <h3>Đơn hàng</h3>
                  <div className="your-order-table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product-name">Sản phẩm</th>
                          <th>Chọn</th>
                          <th>Số lượng</th>
                          <th>Giá</th>
                          <th className="product-total">Tổng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentCart?.map((el) => (
                        <tr className="cart_item">
                          <td className="product-name">
                           {el?.product?.name}
                          </td>
                          <td className="product-total">
                            <span className="amount">{el?.variant}</span>
                          </td>
                          <td className="product-total">
                            <span className="amount">{el?.quantity}</span>
                          </td>
                          <td className="product-total">
                            <span className="amount">{formatMoney(el?.price)}</span>
                          </td>
                          <td className="product-total">
                            <span className="amount">{el?.price * el?.quantity}</span>
                          </td>
                          
                        </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="cart-subtotal">
                          <th>Total</th>
                          <td><span className="amount">{formatMoney(total)} $</span></td>
                        </tr>
                        <tr className="order-total">
                          <th>Tổng thanh toán</th>
                          <td><strong><span className="amount">{formatMoney(currentCart?.reduce((sum, el) => sum + el.price * el.quantity, 0))} VNĐ</span></strong></td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="payment-method">
                    <div className="accordion" id="checkoutAccordion">
                      <div className="accordion-item">
                        <Paypal amount={Math.round(total)}
                                payload={{products: currentCart, total: total, orderBy: current?._id }}
                                setIsSuccess={setIsSuccess}
                        />
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default withBaseComponents(page);
