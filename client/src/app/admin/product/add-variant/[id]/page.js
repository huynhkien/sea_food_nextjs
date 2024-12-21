"use client";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Input} from "../../../../../components/admin/Index";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useParams } from 'next/navigation';
import { InputText } from 'primereact/inputtext';
import { useForm } from 'react-hook-form';
import { use, useEffect, useState } from 'react';
import {  apiGetProduct, apiCreateVariant, apiDeleteVariant } from '../../../../../api';
import { getBase64, validate } from '../../../../../util/helper';
import { toast } from 'react-toastify';
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from 'react-redux'; 
import { showModal } from '../../../../../store/app/appSlice';
import Loading from "../../../../../components/Loading"; 

const Page = () => {
    const { register, handleSubmit,formState: { errors }, watch, reset } = useForm();
    const {id } = useParams();
    const [editProduct, setEditProduct] = useState(null);
    const [invalidFields, setInvalidFields] = useState([]);
    const [loading, setLoading] = useState(true);
    const [globalFilter, setGlobalFilter] = useState('');
    const dispatch = useDispatch(); 
    const fetchProduct = async () => {
        try {
            setLoading(true);
            const response = await apiGetProduct(id);
            if (response.success) setEditProduct(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        } finally {
            setLoading(false);
        }
    }
   

    useEffect(() => {
        fetchProduct();
    }, []);

    const [imagePreview, setImagePreview] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handlePreviewThumb = async (file) => {
        const base64Thumb = await getBase64(file);
        setImagePreview(base64Thumb);
    };

    const handleThumbChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            handlePreviewThumb(file);
        }
    };

    const handleCreateVariant = async (data) => {
        const invalids = validate(id, setInvalidFields);
        if (invalids === 0) {
            const formData = new FormData();
            if (selectedFile) {
                formData.append('thumb', selectedFile);
            }
            formData.append('title', data.title);
            formData.append('price', data.price);
            formData.append('variant', data.variant);
    
            dispatch(showModal({ isShowModal: true, modalChildren: <Loading /> }));
                const response = await apiCreateVariant(formData, id);
                dispatch(showModal({ isShowModal: false, modalChildren: null }));
                if (response.success) {
                    toast.success(response.mes);
                    setSelectedFile(null);
                    fetchProduct();  
                    reset(); 
                } else {
                    toast.error(response.message || 'Failed to create variant');
                }
        }
    };
    

    // list
    const imageBodyTemplate = (rowData) => {
        return <img src={rowData?.thumb?.url} alt={rowData?.name} width={50} height={50} />;
        
      };
    
      const actionBodyTemplate = (rowData) => {
        const id_variant = rowData?._id;
        return (
           
          <div>
            <button 
              onClick={() => handleDelete(id,id_variant)} 
              className="btn btn-xs btn-danger"
            >
              <FaTrash/>
            </button>
          </div>
        );
      };
    
      const handleDelete = async (productId, variantId) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa biến thể này?')) {
                const response = await apiDeleteVariant(productId, variantId);
    
                if (response.success) {
                    toast.success(response.message);
                    fetchProduct(); // Refresh the product data
                } else {
                    toast.error(response.message);
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
            <div className="header">
                <div className="left">
                    <h1>Biến thể</h1>
                </div>
            </div>
            <div className="bottom-data">
                <div className="orders">
                    <div className="container">
                        {editProduct &&
                        <input
                          className="form-control my-2"
                          value={editProduct?.name} 
                        />
                        }
                        <form method="post" action="" onSubmit={handleSubmit(handleCreateVariant)}>
                        <Input
                                    label='Biến thể:'
                                    placeholder='Biến thể'
                                    register={register}
                                    errors={errors}
                                    id='variant'
                                    validate={{
                                        required: 'Thông tin thiếu'
                                    }}
                                />
                            <div className="d-flex justify-content-between">
                                <Input
                                    label='Tên biến thể:'
                                    placeholder='Tên biến thể'
                                    register={register}
                                    errors={errors}
                                    id='title'
                                    validate={{
                                        required: 'Thông tin thiếu'
                                    }}
                                />
                                <span className="mx-2"></span>
                                <Input
                                    label='Giá:'
                                    placeholder='Giá'
                                    type='number'
                                    register={register}
                                    errors={errors}
                                    id='price'
                                    validate={{
                                        required: 'Thông tin thiếu'
                                    }}
                                />
                            </div>
                           
                            <fieldset className="mt-2">
                                <div className="body-title">Ảnh chính:</div>
                                <div className="upload-image flex-grow mt-2">
                                    <div className="item up-load w-50">
                                        <label className="uploadfile" htmlFor="thumb">
                                            <span className="icon">
                                                <FaCloudUploadAlt color="blue" />
                                            </span>
                                            <span className="body-text">Thêm ảnh chính cho sản phẩm</span>
                                            <input
                                                type='file'
                                                id='thumb'
                                                {...register('thumb')}
                                                onChange={handleThumbChange}
                                            />
                                        </label>
                                        {imagePreview && (
                                            <img className="img-upload" src={imagePreview} alt="Preview" />
                                        )}
                                    </div>
                                </div>
                            </fieldset>
                            <button type="submit" name="submit" className="btn btn-primary mt-2">Thêm biến thể</button>
                        </form>
                    </div>
                </div>
           </div>
           <div className="bottom-data">
            <div className="orders">
            <DataTable
                value={editProduct ? editProduct.variants : []}  
                paginator
                rows={10}
                dataKey="_id" // Assuming your product data has an ID field
                loading={loading}
                emptyMessage="No products found."
                header={header}
                globalFilter={globalFilter}
            >
                <Column sortable field="variant" header="Biến thể" />
                <Column sortable field="title" header="Tên biến thể" />
                <Column sortable field="price" header="Giá" />
                <Column body={imageBodyTemplate} header="Hình ảnh" />
                <Column body={actionBodyTemplate} header="Action" />
            </DataTable>

            </div>
        </div>
        </div>
    )
}
export default Page;
