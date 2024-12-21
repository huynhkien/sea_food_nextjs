import { useEffect, useState } from 'react';
import { apiUpdateStatus } from '../../api'; // Adjust the path if necessary
import { toast } from 'react-toastify';
import { MdCancel } from 'react-icons/md';

const UpdateStatus = ({ updateStatus, setUpdateStatus, fetchAllOrder }) => {
    const [selectedStatus, setSelectedStatus] = useState('');

    const updateOrderStatus = async () => {
        const response = await apiUpdateStatus(updateStatus, { status: selectedStatus });
        if (response.success) {
            toast.success(response.update);
            setUpdateStatus(null);
            fetchAllOrder();
        } else {
            toast.error(response.update);
        }
    };

    return (
        <div className="">
            <span onClick={() => setUpdateStatus(null)} className='position-absolute top-0 end-0'>
                <MdCancel fontSize='25' />
            </span>
            <select
                className="form-control py-2 my-3"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
            >
                <option value="">-- Chọn trạng thái --</option>
                <option value="Cancelled">Đã hủy đơn</option>
                <option value="Processing">Đang xử lý</option>
                <option value="Delivering">Đang giao</option>
                <option value="Succeed">Đã nhận hàng</option>
            </select>
            <div className='text-center'>
                <button
                    className="btn btn-primary my-3"
                    disabled={!selectedStatus}
                    onClick={updateOrderStatus}
                >
                    Cập nhật
                </button>
            </div>
        </div>
    );
}

export default UpdateStatus;
