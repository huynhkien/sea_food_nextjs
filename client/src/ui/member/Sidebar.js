"use client";
import { useEffect, useState } from "react";
import { FaCartArrowDown, FaUser, FaHeart, FaStoreAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { getCurrent } from "../../store/user/asyncActions";

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { current } = useSelector(state => state.user);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  useEffect(() => {
    if (current) {
      setUserName(current?.name);
    }
  }, [current]);

  return (
    <div className="sidebar">
      <Link href="/" className="logo mx-5">
        <FaStoreAlt />
        <div className="logo-name"><span>Sea</span>Food</div>
      </Link>
      <div className="text-center">
        <a>
          <CgProfile fontSize={70} />
        </a>
        <p>
          {userName}
        </p>
      </div>
      <ul className="side-menu">
        <li><a onClick={() => router.push("/user")}><FaUser /><span>Profile</span></a></li>
        <li><a onClick={() => router.push("/")}><CiShop /><span>Shop</span></a></li>
        {current?.role == '2002' &&
        <li><a onClick={() => router.push("/admin")}><MdDashboard /><span>Admin</span></a></li>
        }
        <li><a onClick={() => router.push("/user/wishlist")}><FaHeart /><span>Wishlist</span></a></li>
        <li><a onClick={() => router.push("/user/order")}><FaCartArrowDown /><span>Đơn hàng</span></a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
