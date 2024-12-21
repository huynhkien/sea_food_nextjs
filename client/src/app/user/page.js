"use client";
import { Input } from "../../components/admin/Input";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { apiUpdateCurrent } from "../../api";
import { toast } from "react-toastify";
import {getCurrent} from "../../store/user/asyncActions";

const Page = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
    const { isLogin, current } = useSelector(state => state.user);

    useEffect(() => {
        if (current) {
          setValue("name", current?.name);
          setValue("email", current?.email);
          setValue("address", current?.address);
          setValue("phone", current?.phone);
        }
      }, [current]);
      useEffect(() => {
        dispatch(getCurrent());
      }, [dispatch]);
    const handleUpdate = async (data) => {
            const response = await apiUpdateCurrent(data);
            if (response.success) {
                toast.success(response.updateUser);
                dispatch(getCurrent()); 
            } else {
                toast.error(response.data.updateUser);
            }
    };
    
    return (
        <div>
            <div className="header">
                <div className="left">
                    <h1>Thông tin người dùng</h1>
                </div>
            </div>
            <div className="bottom-data">
                <div className="orders">
                    <div className="container">
                        <form onSubmit={handleSubmit(handleUpdate)}>
                            <Input
                                label='Tên:'
                                placeholder='Tên'
                                register={register}
                                id='name'
                                errors={errors}
                                validate={{ required: 'Thông tin thiếu' }}
                            />
                            <Input
                                label='Email:'
                                placeholder='Email'
                                register={register}
                                id='email'
                                errors={errors}
                                validate={{ required: 'Thông tin thiếu' }}
                            />
                            <Input
                                label='Địa chỉ:'
                                placeholder='Địa chỉ'
                                register={register}
                                id='address'
                                errors={errors}
                                validate={{ required: 'Thông tin thiếu' }}
                            />
                            <Input
                                label='Số điện thoại:'
                                placeholder='Số điện thoại'
                                register={register}
                                id='phone'
                                errors={errors}
                                validate={{
                                    required: 'Thông tin thiếu',
                                    pattern: {
                                        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/gm,
                                        message: 'Số điện thoại không hợp lệ'
                                    }
                                }}
                            />
                            <div className="d-flex gap-2 mb-2 ">
                                <span className="font-text">Trạng thái:</span>
                                <span>{current?.isBlocked ? 'Khóa' : 'Hoạt động'}</span>
                            </div>
                            <div className="d-flex gap-2 mb-2">
                                <span className="font-text">Role:</span>
                                <span>{current?.role === '2004' ? 'User' : 'Admin'}</span>
                            </div>
                            <div className="d-flex gap-2 mb-2">
                                <span className="font-text">Ngày tạo:</span>
                                <span>{moment(current?.createdAt).fromNow()}</span>
                            </div>
                            <button type="submit" className="btn btn-primary my-3">Cập nhật</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
