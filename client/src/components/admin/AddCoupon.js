import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { apiUpdateCoupon } from "../../api";
import { toast } from "react-toastify";

const UpdateCoupon = ({  updateCoupon, setUpdateCoupon }) => {
  const [couponValue, setCouponValue] = useState("");
  console.log(couponValue);

  const handleAddCoupon = async () => {
      const response = await apiUpdateCoupon(updateCoupon, {coupon: couponValue});
      if (response.success) {
        toast.success(response.message)
        setUpdateCoupon(null)
      } else {
       toast.error(response.message);
      }
  };

  return (
    <div>
      <span onClick={() => setUpdateCoupon(null)} className="position-absolute top-0 end-0">
        <MdCancel fontSize="25" />
      </span>
      <h4 className="text-center p-3">Thêm mã giảm giá</h4>
      <input
        className="form-control"
        placeholder="Nhập % giảm giá"
        type="number"
        min="0"
        max="99"
        value={couponValue}
        onChange={(e) => setCouponValue(e.target.value)}
      />
      <div className="text-center">
      <button className="btn btn-primary mt-3" onClick={handleAddCoupon}>
        Thêm mã giảm giá
      </button>
      </div>
    </div>
  );
};

export default UpdateCoupon;
