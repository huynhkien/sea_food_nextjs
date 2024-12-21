
"use client"
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { useRouter } from 'next/navigation';
import { FaHome } from "react-icons/fa";


const Breadcrumb = ({ category, categoryUrl, name}) => {
    const items = [
    ];

    if (category) {
        items.push({ label: category, url: categoryUrl});
    }
    if (name) {
        items.push({ label: name });
    }

    const home = { icon: <FaHome/>, url: '/' };

    return (
        <div className="breadcrumb__area pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-breadcrumb__content">
                <div className="tp-breadcrumb__list">
                <BreadCrumb model={items} home={home} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Breadcrumb;
         