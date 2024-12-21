"use client";
import { usePathname } from 'next/navigation';
import Header from "./public/Header";
import HeaderAdmin from "./admin/HeaderAdmin";
import Modal from 'react-modal';
import { customStyles } from '../util/contant';
import { useSelector } from 'react-redux';



export default function ConditionalHeader() {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');
  const isUserRoute = pathname.startsWith('/user');
  const { isShowModal, modalChildren} = useSelector((state) => state.app);


  return (
    <div>
    {isShowModal && <Modal style={customStyles} isOpen={isShowModal}>{modalChildren}</Modal>}
    {isAdminRoute || isUserRoute ? <HeaderAdmin /> : <Header/>}
    </div>);
}
