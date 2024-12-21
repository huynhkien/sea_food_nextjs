"use client";
import React, { useEffect, useState } from 'react'
import {apiGetProducts, apiGetUsers, apiGetCategory, apiGetCountOrder} from "../../api"
import { FaProductHunt } from "react-icons/fa6";
import { TbCategoryFilled } from "react-icons/tb";
import { FaUser, FaCartArrowDown  } from "react-icons/fa";


const Insights = () => {
    const [countProduct, setCountProduct] = useState(null);
    const [countUser, setCountUser] = useState(null);
    const [countCategory, setCountCategory] = useState(null);
    const [countOrder, setCountOrder] = useState(null);
    const fetchCountProduct = async () => {
        const response = await apiGetProducts();
        if(response.success) setCountProduct(response.counts);
    }
    const fetchCountUser = async () => {
        const response = await apiGetUsers();
        if(response.success) setCountUser(response.counts);
    }
    const fetchCountCategory = async () => {
        const response = await apiGetCategory();
        if(response.success) setCountCategory(response.counts);
    }
    const fetchCountOrder = async () => {
        const response = await apiGetCountOrder();
        if(response.success) setCountOrder(response.data);
    }
    useEffect(() => {
        fetchCountProduct();
        fetchCountUser();
        fetchCountCategory();
        fetchCountOrder();
    })
  return (
    <div>
        <ul class="insights">
                <a >
                    <li>
                        <FaProductHunt fontSize={50}  />
                        <span class="info">
                            <h3>
                               {countProduct}
                            </h3>
                            <p>Sản phẩm </p>
                        </span>
                    </li>
                </a>
                <a >
                    <li>
                        < TbCategoryFilled  fontSize={50}/>
                        <span class="info">
                            <h3>
                               {countCategory}
                            </h3>
                            <p>Danh mục </p>
                        </span>
                    </li>
                </a>
                <a >
                    <li>
                        <FaUser  fontSize={50}/>
                        <span class="info">
                            <h3>
                               {countUser}
                            </h3>
                            <p>Khách hàng </p>
                        </span>
                    </li>
                </a>
                <a >
                    <li>
                        <FaCartArrowDown  fontSize={50}/>
                        <span class="info">
                            <h3>
                               {countOrder}
                            </h3>
                            <p>Đơn hàng </p>
                        </span>
                    </li>
                </a>
            </ul>
    </div>
  )
}

export default Insights