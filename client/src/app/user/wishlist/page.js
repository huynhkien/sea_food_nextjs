"use client";
import { useEffect, useState } from 'react';
import { apiGetProduct } from "../../../api";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { useSelector } from 'react-redux';
import { formatMoney } from "../../../util/helper";


const Page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [globalFilter, setGlobalFilter] = useState('');

  const { current } = useSelector(state => state.user);
  console.log(current);

  const fetchProduct = async (id) => {
    const response = await apiGetProduct(id);
    return response.success ? response.data : null;
  };

  const fetchWishlistProducts = async () => {
    if (current?.wishlist?.length) {
      const productPromises = current.wishlist.map(id => fetchProduct(id));
      const fetchedProducts = await Promise.all(productPromises);
      setProducts(fetchedProducts.filter(product => product !== null));
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWishlistProducts();
  }, [current?.wishlist]);
  const format = (money) => {
    return formatMoney(money);
  };

  const imageBodyTemplate = (rowData) => {
    return <img src={rowData.thumb?.url} alt={rowData.name} width={50} height={50} />;
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
          <h1>Sản phẩm yêu thích</h1>
        </div>
      </div>
      <div className="bottom-data">
        <div className="orders">
          <DataTable
            value={products}
            paginator
            rows={10}
            dataKey="_id"
            loading={loading}
            emptyMessage="Không có sản phẩm nào."
            header={header}
            globalFilter={globalFilter}
          >
            <Column sortable field="name" header="Sản Phẩm" />
            <Column sortable body={imageBodyTemplate} header="Hình ảnh" />
            <Column sortable field="category" header="Danh mục" />
            <Column sortable field="origin" header="Nguồn gốc" />
            <Column sortable body={(rowData) => format(rowData.price)} header="Giá tiền" />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default Page;
