"use client";
import { useEffect, useState } from 'react';
import { apiGetProducts, apiDeleteProduct } from "../../../api";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { FaEdit, FaTrash } from "react-icons/fa";
import { RxValue } from "react-icons/rx";
import { toast } from 'react-toastify';
import { CiCirclePlus } from "react-icons/ci";
import {AddCoupon} from "../../../components/admin/Index";
import { set } from 'react-hook-form';

const Page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [globalFilter, setGlobalFilter] = useState('');
  const [updateCoupon, setUpdateCoupon] = useState(null);

  const fetchProducts = async () => {
    const response = await apiGetProducts();
    if (response.success) setProducts(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const imageBodyTemplate = (rowData) => {
    return <img src={rowData.thumb?.url} alt={rowData.name} width={50} height={50} />;
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div>
        <a href={`/admin/product/edit/${rowData._id}`} className="btn btn-xs btn-primary">
          <FaEdit/>
        </a>
        <span className='mx-1'></span>
        <button 
          onClick={() => handleDelete(rowData._id)} 
          className="btn btn-xs btn-danger"
        >
          <FaTrash/>
        </button>
        <span className='mx-1'></span>
        <a href={`/admin/product/add-variant/${rowData._id}`} className="btn btn-xs btn-primary">
          <RxValue/>
        </a>
      </div>
    );
  };
  const actionCoupon = (rowData) => {
    return (
      <div>
        <span className='mx-1'></span>
        <a onClick={() => setUpdateCoupon(rowData._id)} className="btn btn-xs btn-primary">
          <CiCirclePlus/>
        </a>
      </div>
    );
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      const response = await apiDeleteProduct(id);

      if (response.success) {
        toast.success(response.mes);
        setLoading(true); 
        fetchProducts();
      } else {
        toast.error(response.mes);
      }
    }
  };

  const header = (
    <div className="p-inputgroup flex-1 my-2">
        <InputText type="text" placeholder="Tìm kiếm" className="p-inputtext p-component p-2" onChange={(e) => setGlobalFilter(e.target.value)} />
    </div>
  );

  return (
    <div>
      {updateCoupon && <div style={{ zIndex: 10}} className='position-fixed top-50 start-50 translate-middle bg-white p-2 w-25 h-25 shadow-sm'>
        <AddCoupon
        updateCoupon={updateCoupon}
        setUpdateCoupon={setUpdateCoupon}/>
        </div>}
      <div className="header">
        <div className="left">
          <h1>Sản phẩm</h1>
        </div>
      </div>
      <div className="bottom-data">
        <div className="orders">
          <a href={'/admin/product/create'} className="btn btn-primary" style={{ marginBottom: '30px' }}>
            <i className="fa fa-plus"></i> Thêm sản phẩm
          </a>
          <DataTable 
            value={products} 
            paginator 
            rows={10} 
            dataKey="id" 
            loading={loading} 
            emptyMessage="No products found."
            header={header}
            globalFilter={globalFilter}
          >
            <Column sortable field="name" header="Tên sản phẩm" />
            <Column sortable body={imageBodyTemplate} header="Hình ảnh" />
            <Column body={actionCoupon} header="Giảm giá" />
            <Column sortable field="category" header="Danh mục" />
            <Column sortable field="quantity" header="Số lượng" />
            <Column sortable field="origin" header="Nguồn gốc" />
            <Column sortable field="sold" header="Lượt mua" />
            <Column sortable field="price" header="Giá" />
            <Column sortable field="totalRatings" header="Đánh giá" />
            <Column body={actionBodyTemplate} header="Action" />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default Page;
