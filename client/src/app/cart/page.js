"use client";
import { formatMoney } from "@/util/helper";
import { useSelector, useDispatch } from "react-redux";
import withBaseComponents from "../../hocs/withBaseComponents";
import { memo } from "react";
import Order from "../../ui/public/Order";
import { apiUpdateOneCart } from "../../api";
import { toast } from "react-toastify";
import { Breadcrumb} from "../../components/Index";


const CartPage = ({ pathName, dispatch, router }) => {
  const { currentCart } = useSelector((state) => state.user);
  const calculateTotal = (cart) => {
    return cart.reduce((sum, el) => sum + el.price * el.quantity, 0);
  };
  console.log(currentCart);
  const handleAddCart = async() =>{
   if(!currentCart){
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
   for (const item of currentCart) {
      const response = await apiUpdateOneCart({
        pid: item.product._id,
        quantity: item.quantity,
        variant: item.variant,
        price: item.price,
        name: item.product.name
      });

      if (response.success) {
        toast.success(response.mes);
      } else {
        toast.error(response.mes);
      }
    } 
}

  return (
    <section className="cart-area pb-80">
      <Breadcrumb
        category='Cart'
        />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form action="#">
              <div className="table-content table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Hình ảnh</th>
                      <th className="cart-product-name">Sản phẩm</th>
                      <th className="product-price">Chọn</th>
                      <th className="product-price">Số lượng</th>
                      <th className="product-quantity">Giá</th>
                      <th className="product-subtotal">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentCart?.map((el) => (
                      <Order
                        key={el._id}
                        addQuantity={el?.quantity}
                        variant = {el?.variant}
                        name = {el?.product?.name}
                        thumb = {el?.thumb}
                        price = {el?.price}
                        pid = {el?.product?._id}
                        dispatch = {dispatch}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="coupon-all">
                    <div className="coupon2">
                      <button
                        className="tp-btn tp-color-btn banner-animation"
                        name="update_cart"
                        type="submit"
                        onClick={handleAddCart}
                      >
                        Update cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-end">
                <div className="col-md-5">
                  <div className="cart-page-total">
                    <h2>Cart totals</h2>
                    <ul className="mb-20">
                      <li>
                        Subtotal{" "}
                        <span>
                          {formatMoney(calculateTotal(currentCart))} VNĐ
                        </span>
                      </li>
                      <li>
                        Total{" "}
                        <span>
                          {formatMoney(calculateTotal(currentCart))} VNĐ
                        </span>
                      </li>
                    </ul>
                    <a
                      href={'/checkout'}
                      className="tp-btn tp-color-btn banner-animation"
                    >
                      Proceed to Checkout
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withBaseComponents(memo(CartPage));
