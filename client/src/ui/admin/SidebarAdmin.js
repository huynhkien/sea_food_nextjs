
"use client";
import { MdDashboard } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { FaProductHunt, FaUser, FaCartArrowDown } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import {FaStoreAlt} from "react-icons/fa";
import { CiShop } from "react-icons/ci";




const SidebarAdmin = () => {
  const router = useRouter();
  return (
    <div className="sidebar">
      <Link href={'admin'} className="logo mx-5">
        <FaStoreAlt/>
        <div className="logo-name"><span>Sea</span>Food</div>
      </Link>
      <ul className="side-menu">
        <li><a onClick={() => router.push("/admin")} ><MdDashboard/><span>Admin</span></a></li>
        <li><a onClick={() => router.push("/admin/graph")} ><FcStatistics/><span>Thống kê</span></a></li>
        <li><a onClick={() => router.push("/")}><CiShop /><span>Shop</span></a></li>
        <li><a onClick={() => router.push("/admin/product")} ><FaProductHunt/><span>Sản phẩm</span></a></li>
        <li><a onClick={() => router.push("/admin/category")} ><BiCategory /><span>Danh Mục</span></a></li>
        <li><a onClick={() => router.push("/admin/user")} ><FaUser/><span>Khách hàng</span></a></li>
        <li><a onClick={() => router.push("/admin/order")} ><FaCartArrowDown/><span>Đơn hàng</span></a></li>
      </ul>
    </div>
  );
}

export default SidebarAdmin;
