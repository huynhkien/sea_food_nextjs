"use client";
import { useState} from 'react';
import { CiMail } from "react-icons/ci";
import {Input , Button, Loading} from '../../components/Index';
import {apiForgotPassword } from '../../api';
import { toast } from 'react-toastify';
import {showModal} from "../../store/app/appSlice"
const Forgot = () => { 
  const [email, setEmail] = useState('');
  const handleForgotPassword = async () => {
    showModal({isShowModal: true, modalChildren: <Loading/>})
    const response = await apiForgotPassword({ email })
    showModal({isShowModal: false, modalChildren: null})
    console.log(response)
    if(response.success){
      toast.success(response.message);
    }else{
      toast.info(response.message);
    }
  }
  return (
    <section class="track-area pb-10">
    
    <div class="row justify-content-center">
       <div class="col-lg-6 col-sm-12 ">
          <div class="tptrack__product py-5 ">
             <div class="tptrack__content bg-light">
                <div class="tptrack__item d-flex mb-20">
                   <div class="tptrack__item-icon">
                      <CiMail/>
                   </div>
                   <div class="tptrack__item-content">
                      <h4 class="tptrack__item-title">Quên mât khẩu</h4>
                      <p>Vui lòng nhập email để lấy lại mật khẩu.</p>
                   </div>
                </div>
                   <Input
                        iconClass={<CiMail/>}
                        type='text' 
                        id='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Example@gmai.com'
                        />
               
                  
                
                <Button
                    name='Lấy lại mật khẩu'
                    handleOnClick={handleForgotPassword}
                    />
                </div>
                
             </div>
          </div>
       </div>
    
</section>
  );
}

export default Forgot;
