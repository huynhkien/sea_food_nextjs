"use client";
import {  useSelector } from "react-redux";
import { Input } from "../../components/admin/Input";
import { useEffect } from "react";
import { apiUpdateCurrent } from "../../api";
import { toast } from "react-toastify";
import {getCurrent} from "../../store/user/asyncActions";
import { useForm } from "react-hook-form";
import withBaseComponents from "@/hocs/withBaseComponents";
const User = ({dispatch}) => {
    const { current } = useSelector((state) => state.user);
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
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
          if (response.data.success) {
              toast.success(response.mes);
              dispatch(getCurrent()); 
              reset();
          } else {
              toast.error(response.mes);
          }
  };
  return (
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
                            <button type="submit" className="btn btn-primary my-3">Cập nhật</button>
                        </form>
  )
}

export default withBaseComponents(User)