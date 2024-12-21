// "use client";
// import { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';

// import { FaKey } from 'react-icons/fa';
// import { Button, Input } from '../../../components/Index';
// import { apiResetPassword } from '../../../api';
// import { toast } from 'react-toastify';
// // import {showModal} from "../../store/app/appSlice"

// const ResetPassword = () => {
//   const [password, setPassword] = useState('');
  
//   const {token} = useParams();

//   useEffect(() => {
//     if (!token) {
//       toast.error('Token is missing!');
//     }
//   }, [token]);

//   const handleResetPassword =async () => {
//     showModal({isShowModal: true, modalChildren: <Loading/>})
//     const response = await apiResetPassword({password, token});
//     showModal({isShowModal: false, modalChildren: null})
//     if(response.success){
//       toast.success(response.message);
//     }else{
//       toast.info(response.message);
//     }
//   }

//   return (
//     <section className="track-area pb-10">
//       <div className="row justify-content-center">
//         <div className="col-lg-6 col-sm-12">
//           <div className="tptrack__product py-5">
//             <div className="tptrack__content bg-light">
//               <div className="tptrack__item d-flex mb-20">
//                 <div className="tptrack__item-icon">
//                   <FaKey />
//                 </div>
//                 <div className="tptrack__item-content">
//                   <h4 className="tptrack__item-title">Quên mật khẩu</h4>
//                   <p>Vui lòng nhập mật khẩu mới.</p>
//                 </div>
//               </div>
//               <Input
//                         iconClass={<FaKey/>}
//                         type='password' 
//                         id='password'
//                         value={password}
//                         onChange={e => setPassword(e.target.value)}
//                         placeholder='New pass'
//                         />
//               <Button
//                 name="Đặt mật khẩu mới"
//                 handleOnClick={handleResetPassword}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ResetPassword;
