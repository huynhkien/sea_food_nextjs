"use client";
import { useEffect, useState } from 'react';
import { apiGetUsers, apiDeleteUser } from "../../../api";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from 'react-toastify';


const Page = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [globalFilter, setGlobalFilter] = useState('');

  const fetchUsers = async () => {
    const response = await apiGetUsers();
    if (response.success) setUsers(response.userData);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const actionBodyTemplate = (rowData) => {
    return (
      <div>
        <a href={`/admin/user/edit/${rowData._id}`} className="btn btn-xs btn-primary">
          <FaEdit/>
        </a>
        <span className='mx-2'></span>
        <button 
          onClick={() => handleDelete(rowData._id)} 
          className="btn btn-xs btn-danger"
        >
          <FaTrash/>
        </button>
      </div>
    );
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa người dùng này?')) {
      const response = await apiDeleteUser(id);

      if (response.success) {
        toast.success('Xóa người dùng thành công');
        setLoading(true); 
        fetchUsers();
      } else {
        toast.error('Xóa người dùng không thành công');
      }
    }
  };

  const roleBodyTemplate = (rowData) => {
    return rowData.role === '2002' ? "Admin" : "User";
  };
  const header = (
    <div className="p-inputgroup flex-1 my-2">
        <InputText type="text" placeholder="Tìm kiếm" className="p-inputtext p-component p-2" onChange={(e) => setGlobalFilter(e.target.value)} />
    </div>
  );

  return (
    <div>
      <div className="header">
        <div className="left">
          <h1>Người dùng</h1>
        </div>
      </div>
      <div className="bottom-data">
        <div className="orders">
          <DataTable 
            value={users} 
            paginator 
            rows={10} 
            dataKey="id" 
            loading={loading} 
            emptyMessage="No users found."
            header={header}
            globalFilter={globalFilter}
          >
            <Column sortable field="name" header="Khách hàng" />
            <Column sortable field="email" header="Email" />
            <Column sortable field="phone" header="Số điện thoại" />
            <Column sortable field="address" header="Địa chỉ" />
            <Column sortable field="role" header="Vai trò" body={roleBodyTemplate} />
            <Column body={actionBodyTemplate} header="Action" />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default Page;
