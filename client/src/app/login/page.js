"use client";
import { useState, useCallback, useEffect} from 'react';
import { FaUserLock, FaRegUser, FaAddressBook, FaPhone, FaKey, FaRegistered } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import {Input , Button, Loading} from '../../components/Index';
import { apiLogin, apiRegister} from '../../api';
import Swal from 'sweetalert2';
import {validate} from '../../util/helper'
import {login} from '../../store/user/userSlice';
import { useRouter } from 'next/navigation';
import {showModal} from '../../store/app/appSlice'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
const Login = () => {
  const router = useRouter(); 
  const dispatch = useDispatch();
  const [payload, setPayLoad] =useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    address: ''

  });
  const [invalidFields, setInValidFields] = useState('');
  const [isRegister, setIsRegister] =useState(false);
  const resetPayload = () => {
    setPayLoad({
      email: '',
      password: '',
      name: '',
      phone: '',
      address: ''
    })
  }


  useEffect(() => {
    resetPayload();
  }, [isRegister])
  const handleSubmit = useCallback( async() => {
    const {name,numberPhone, ...data} = payload;

    const invalids = isRegister ? validate(payload, setInValidFields) : validate(data, setInValidFields);
      if(isRegister){
        dispatch(showModal({ isShowModal: true, modalChildren: <Loading /> }));
        const response = await apiRegister(payload);
        dispatch(showModal({ isShowModal: false, modalChildren: null }));
        if(response.success){
        Swal.fire( 'Congratulations' , response.message, 'success' ).then(() => {
          setIsRegister(false);
          resetPayload();
        })
        }else Swal.fire( 'Oop!' , response.message, 'error' );
      }else{
        const response = await apiLogin(data);
      if (response.success) {
        dispatch(login({ isLogin: true, token: response.accessToken, userData: response.userData }));
        if (response.role === '2002') {
          router.push("/admin");
        } else if(response.role === '2004') {
          router.push('/');
        }
      } else {
        Swal.fire('Oop!', response.message, 'error');
      }

       
      }
   },[payload, isRegister]);
  return (
    <section class="track-area pb-10">
    
    <div class="row justify-content-center">
       <div class="col-lg-6 col-sm-12 ">
          <div class="tptrack__product py-5 ">
             <div class="tptrack__content bg-light">
                <div class="tptrack__item d-flex mb-20">
                   <div class="tptrack__item-icon">
                      {!isRegister ? <FaUserLock/> : <FaRegistered/>}
                   </div>
                   <div class="tptrack__item-content">
                      <h4 class="tptrack__item-title">{isRegister ? "Đăng kí" : "Đăng nhập" }</h4>
                      <p>{isRegister ? "Điền đầy đủ các thông tin để đăng lý tài khoản " : "Vui lòng đăng nhập tài khoản và mật khẩu" }</p>
                   </div>
                </div>
                   <Input
                        iconClass={<CiMail/>}
                        value={payload.email}
                        setValue={setPayLoad}
                        nameKey='email'
                        placeholder='Email'
                        invalidFields={invalidFields}
                        setInValidFields={setInValidFields}/>
               
                   <Input
                        iconClass={<FaKey/>}
                        value={payload.password}
                        setValue={setPayLoad}
                        nameKey='password'
                        type='password'
                        placeholder='Mật khẩu'
                        invalidFields={invalidFields}
                        setInValidFields={setInValidFields}/>
              
                {isRegister && (
                    <>
                            <Input
                                iconClass={<FaRegUser/>}
                                value={payload.name}
                                setValue={setPayLoad}
                                nameKey='name'
                                placeholder='Tên người dùng'
                                invalidFields={invalidFields}
                                setInValidFields={setInValidFields}
                            />
                            <Input
                                iconClass={<FaPhone/>}
                                value={payload.phone}
                                setValue={setPayLoad}
                                nameKey='phone'
                                placeholder='Số điện thoại'
                                invalidFields={invalidFields}
                                setInValidFields={setInValidFields}
                            />
                            <Input
                                iconClass={<FaAddressBook/>}
                                value={payload.address}
                                setValue={setPayLoad}
                                nameKey='address'
                                placeholder='Địa chỉ nhà'
                                invalidFields={invalidFields}
                                setInValidFields={setInValidFields}
                            />
                    </>
                )}

               
                {!isRegister &&
                <div class="tpsign__remember d-flex align-items-center justify-content-between mb-15">
                    <div class="tpsign__pass">
                      <a style={{cursor: 'pointer'}} onClick={() => setIsRegister(true)}>Tạo tài khoản</a>
                   </div>
                   <div class="tpsign__pass">
                      <a href='/forgot-password' >Quên mật khẩu?</a>
                   </div>
                </div>
                }
                
                <Button
                    name={isRegister ? "Đăng kí" : "Đăng nhập"}
                    handleOnClick={handleSubmit}
                    />
                    {
                      isRegister &&
                      <div class="text-center mt-3">
                        <a style={{cursor: 'pointer'}} onClick={() => setIsRegister(false)}>Đăng nhập</a>
                      </div>
                    }
                </div>
                
             </div>
          </div>
       </div>
    
</section>
  );
}

export default Login;
