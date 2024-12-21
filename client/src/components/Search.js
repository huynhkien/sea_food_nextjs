"use client";
import { useRouter } from 'next/navigation';
import {memo, useState} from 'react'
import { MdCancel } from "react-icons/md";

const Search = ({searchProduct, setSearchProduct}) => {
    const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };
  return (
    <div className="tpsearchbar tp-sidebar-area">
            <button onClick={() =>setSearchProduct(false)} className="tpsearchbar__close"><i><MdCancel/></i></button>
            <div className="search-wrap text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-6 pt-100 pb-100">
                            <h2 className="tpsearchbar__title">What Are You Looking For?</h2>
                            <div className="tpsearchbar__form">
                                <form action={`/search?${encodeURIComponent(searchQuery)}`}  onSubmit={handleSearch}>
                                    <input onChange={(e) => setSearchQuery(e.target.value)} type="text" name="search" placeholder="Search Product..."/>
                                    <button className="tpsearchbar__search-btn"><i className="icon-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>      
  )
}

export default memo(Search);