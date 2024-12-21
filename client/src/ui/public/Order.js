"use client"
import { memo, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Quantity } from "../../components/Index";
import { formatMoney } from "../../util/helper";
import { updateCart } from "../../store/user/userSlice";
import {apiRemoveCart} from "../../api"
import withBaseComponents from "../../hocs/withBaseComponents";
import { toast } from "react-toastify";
import { getCurrent } from "../../store/user/asyncActions";
const Order = ({ dispatch, variant, addQuantity = 1, price, name, pid, thumb }) => {
  const [quantity, setQuantity] = useState(addQuantity);

  const handleQuantity = (number) => {
    if (+number >= 1) setQuantity(number);
  };

  const handleChangeQuantity = (flag) => {
    if (flag === 'minus' && quantity === 1) return;
    if (flag === 'minus') setQuantity((prev) => +prev - 1);
    if (flag === 'plus') setQuantity((prev) => +prev + 1);
  };

  useEffect(() => {
    dispatch(updateCart({ pid: pid, quantity, variant }));
  }, [quantity, dispatch, pid, variant]);
  const handleRemoveCart = async(id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
    const response = await apiRemoveCart(id);
    if(response.success) {
       toast.success(response.mes);  
       dispatch(getCurrent());
    }else{
       toast.error(response.mes)
    }
  }
 }
  return (
    <tr>
      <td className="product-thumbnail">
        <a href="shop-details.html">
          <img
            className="img__cart--page"
            src={thumb}
            alt="Product Thumbnail"
            width={0}
            height={0}
          />
        </a>
      </td>
      <td className="product-name">
          {name}
      </td>
      <td className="product-price">
        {variant}
      </td>
      <td>
        <Quantity
          quantity={quantity}
          handleQuantity={handleQuantity}
          handleChangeQuantity={handleChangeQuantity}
        />
      </td>
      <td className="product-subtotal">
        <span className="amount">{formatMoney(price)} VNĐ</span>
      </td>
      <td className="product-subtotal">
        <span className="amount">{formatMoney(price * quantity)} VNĐ</span>
      </td>
      <td className="product-remove">
        <a onClick={() => handleRemoveCart(pid)}><i><FaTrash color="red" /></i></a>
      </td>
    </tr>
  );
};

export default withBaseComponents(memo(Order));
