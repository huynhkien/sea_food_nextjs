"use client";
import { FaSearch } from "react-icons/fa";
import { logout } from '../../store/user/userSlice';
import withBaseComponents from "../../hocs/withBaseComponents";

const HeaderAdmin = ({dispatch}) => {
  return (
   
      <nav>
      <i className='bx bx-menu'></i>
      <form action="#">
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button className="search-btn" type="submit"><FaSearch/></button>
        </div>
      </form>
      <span style={{cursor: "pointer"}} onClick={() => dispatch(logout())}>Logout</span>
    </nav>
    
  );
}

export default withBaseComponents(HeaderAdmin);
