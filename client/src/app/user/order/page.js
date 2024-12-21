"use client";
import { useEffect, useState } from 'react';
import { apiGetOrderByUser, apiUpdateStatus } from "../../../api";
import { formatMoney } from "../../../util/helper";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { FaTrash } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { toast } from 'react-toastify';
import moment from 'moment';
import { Badge } from 'primereact/badge';

const Page = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [globalFilter, setGlobalFilter] = useState('');

  const fetchOrders = async () => {
    const response = await apiGetOrderByUser();
    if (response.success) {
      setOrders(response.message);
    } else {
      toast.error('Không thể lấy danh sách đơn hàng');
    }
    setLoading(false);
  };

  const updateOrderStatus = async (oid, status) => {
    if (window.confirm('Bạn có chắc chắn muốn huỷ đơn hàng này?')) {
      const response = await apiUpdateStatus(oid, { status });
      if (response.success) {
        toast.success('Đã cập nhật trạng thái đơn hàng');
        setOrders(orders.map(order => order._id === oid ? { ...order, status } : order));
      } else {
        toast.error('Cập nhật trạng thái đơn hàng không thành công');
      }
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const actionBodyTemplate = (rowData) => {
    return (
      <div>
        <a href={`/user/order/${rowData._id}`} className="btn btn-xs btn-primary">
          <BiDetail />
        </a>
        <span className='mx-2'></span>
        <button
          onClick={() => updateOrderStatus(rowData._id, 'Cancelled')}
          className="btn btn-xs btn-danger"
        >
          <FaTrash />
        </button>
      </div>
    );
  };

  const formatDate = (date) => {
    return moment(date).format('DD/MM/YYYY HH:mm');
  };

  const format = (money) => {
    return formatMoney(Math.round(money * 23.500));
  };

  const formatStatus = (status) => {
    switch (status) {
      case 'Cancelled':
        return <Badge value="Đã hủy đơn" severity="error"></Badge>;
      case 'Processing':
        return <Badge value="Đang xử lý" severity="warning"></Badge>;
      case 'Delivering':
        return <Badge value="Đang giao"></Badge>;
      case 'Received':
      default:
        return <Badge value="Đã nhận hàng" severity="success"></Badge>;
    }
  };

  const header = (
    <div className="p-inputgroup flex-1 my-2">
      <InputText
        type="text"
        placeholder="Tìm kiếm"
        className="p-inputtext p-component p-2"
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
    </div>
  );

  return (
    <div>
      <div className="header">
        <div className="left">
          <h1>Đơn hàng</h1>
        </div>
      </div>
      <div className="bottom-data">
        <div className="orders">
          <DataTable
            value={orders}
            paginator
            rows={10}
            dataKey="id"
            loading={loading}
            emptyMessage="Không có đơn hàng nào."
            header={header}
            globalFilter={globalFilter}
          >
            <Column sortable field="_id" header="Mã đơn hàng" />
            <Column sortable body={(rowData) => formatStatus(rowData.status)} header="Trạng thái" />
            <Column body={(rowData) => formatDate(rowData.createdAt)} header="Ngày tạo" />
            <Column sortable body={(rowData) => format(rowData.total)} header="Tổng tiền" />
            <Column body={actionBodyTemplate} header="Hành động" />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default Page;
