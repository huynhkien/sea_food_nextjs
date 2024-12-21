"use client";
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useParams } from 'next/navigation';
import { apiUpdateUserId, apiGetUserId } from '../../../../../api';
import { Input } from '../../../../../components/admin/Index';

const Page = () => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const [error, setError] = useState(null);
  const { id } = useParams();

  const fetchUser = async () => {
    setError(null);
    try {
      const response = await apiGetUserId(id);
      if (response.success) {
        const userData = response.rs;
        if (userData) {
          setValue('name', userData.name || '');
          setValue('email', userData.email || '');
          setValue('phone', userData.phone || '');
          setValue('address', userData.address || '');
        } else {
          setError('Dữ liệu người dùng không hợp lệ.');
        }
      } else {
        setError(response.message || 'ID người dùng không hợp lệ hoặc người dùng không tồn tại.');
      }
    } catch (err) {
      setError('Có lỗi xảy ra khi lấy dữ liệu người dùng.');
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const onSubmit = async (data) => {
    try { 
      const response = await apiUpdateUserId(id, data);
      if (response.success) {
        toast.success(response.updateUser);
        reset();
        fetchUser();
      } else {
        toast.error(response.updateUser);
      }
    } catch (error) {
      toast.error('Có lỗi xảy ra.');
    }
  };

  return (
    <div>
      <div className="header mb-3">
        <div className="left">
          <h1>Cập nhật thông tin</h1>
        </div>
      </div>
      <div className="wg-box bg-light">
        <form className="form-new-product form-style-1" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label='Tên'
            register={register}
            errors={errors}
            id='name'
            validate={{
              required: 'Thông tin thiếu'
            }}
          />
          <Input
            label='email'
            register={register}
            errors={errors}
            id='email'
            validate={{
              required: 'Thông tin thiếu'
            }}
          />
          <Input
            label='Số điện thoại'
            register={register}
            errors={errors}
            id='phone'
            validate={{
              required: 'Thông tin thiếu'
            }}
          />
          <Input
            label='Địa chỉ'
            register={register}
            errors={errors}
            id='address'
            validate={{
              required: 'Thông tin thiếu'
            }}
          />
          <div className="d-flex justify-content-center text-center">
            <button type="submit" name="submit" className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
