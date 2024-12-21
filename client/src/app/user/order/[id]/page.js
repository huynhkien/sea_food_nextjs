"use client";
import { useEffect, useState } from 'react';
import { apiGetOrderById } from "../../../../api";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { useParams } from 'next/navigation';

const Page = () => {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);
  const [globalFilter, setGlobalFilter] = useState('');
  const { id } = useParams();

  const fetchOrders = async () => {
    try {
      const response = await apiGetOrderById(id);
      if (response.success) {
        setOrders(response.message);
      } else {
        console.error("Failed to fetch orders");
      }
    } catch (error) {
      console.error("An error occurred while fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const imageBodyTemplate = (rowData) => {
    return <img src={rowData.thumb} alt={rowData.name} width={50} height={50} />;
  };

  const totalBodyTemplate = (rowData) => {
    return (rowData.price * rowData.quantity).toFixed(2);
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
          <h1>Chi tiết</h1>
        </div>
      </div>
      <div className="bottom-data">
        <div className="orders">
          <DataTable
            value={orders?.products}
            paginator
            rows={10}
            dataKey="id"
            loading={loading}
            emptyMessage="No orders found."
            header={header}
            globalFilter={globalFilter}
          >
            <Column sortable field="name" header="Sản phẩm" />
            <Column body={imageBodyTemplate} header="Hình ảnh" />
            <Column sortable field="price" header="Giá" />
            <Column sortable field="quantity" header="Số lượng" />
            <Column sortable field="variant" header="Chọn" />
            <Column field="total" header="Tổng" body={totalBodyTemplate} />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default Page;
