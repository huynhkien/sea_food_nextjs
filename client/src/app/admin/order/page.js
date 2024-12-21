"use client";
import { useCallback, useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { apiGetAllOrder } from '../../../api'; // Import API function
import { Badge } from 'primereact/badge';
import moment from 'moment';
import { RxUpdate } from "react-icons/rx";
import { BiDetail } from "react-icons/bi";
import { formatMoney } from "../../../util/helper";
import OrderDetail from '../../../components/admin/OrderDetail';
import UpdateStatus from '../../../components/admin/UpdateStatus';

const Page = () => {
    const [orders, setOrders] = useState(null);
    const [loading, setLoading] = useState(true);
    const [globalFilter, setGlobalFilter] = useState('');
    const [showOrder, setShowOrder] = useState(null);
    const [updateStatus, setUpdateStatus] = useState(null);

    const fetchAllOrder = async () => {
        try {
            const response = await apiGetAllOrder();
            if (response.success) {
                setOrders(response.data);
            } else {
                console.error('Failed to fetch orders:', response.error);
            }
        } catch (error) {
            console.error('Error fetching orders:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllOrder();
    }, []);

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

    const formatDate = (date) => {
        return moment(date).format('DD/MM/YYYY HH:mm');
    };

    const format = (money) => {
        return formatMoney(Math.round(money * 23.500));
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <div>
                <button className="btn btn-xs btn-primary" onClick={() => setShowOrder(rowData.order._id)}>
                    <BiDetail />
                </button>
                <span className='mx-1'></span>
                <button className="btn btn-xs btn-primary" onClick={() => setUpdateStatus(rowData.order._id)}>
                    <RxUpdate />
                </button>
            </div>
        );
    };

    const header = (
        <div className="p-inputgroup flex-1 my-2">
            <InputText
                type="text"
                placeholder="Tìm kiếm"
                className="p-inputtext p-component p-2"
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
            />
        </div>
    );

    return (
        <div>
            {showOrder && (
                <div className='order-detail shadow-sm'>
                    <OrderDetail showOrder={showOrder} setShowOrder={setShowOrder} />
                </div>
            )}
            {updateStatus && (
                <div className='update-status shadow'>
                    <UpdateStatus
                        updateStatus={updateStatus}
                        setUpdateStatus={setUpdateStatus}
                        fetchAllOrder={fetchAllOrder} 
                    />
                </div>
            )}
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
                        dataKey="_id"
                        loading={loading}
                        emptyMessage="Không tìm thấy đơn hàng nào."
                        header={header}
                        globalFilter={globalFilter}
                    >
                        <Column field="user.name" header="Tên khách hàng" sortable />
                        <Column field="user.phone" header="Điện thoại" sortable />
                        <Column field="order._id" header="Mã đơn " sortable />
                        <Column body={(rowData) => formatStatus(rowData.order.status)} header="Trạng thái " sortable />
                        <Column body={(rowData) => formatDate(rowData.order.createdAt)} header="Ngày tạo" />
                        <Column sortable body={(rowData) => format(rowData.order.total)} header="Tổng tiền" />
                        <Column body={actionBodyTemplate} header="Chi tiết" />
                    </DataTable>
                </div>
            </div>
        </div>
    );
};

export default Page;
