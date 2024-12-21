"use client";

import { memo, useEffect, useState } from 'react';
import { useRouter, useParams} from 'next/navigation';
import { apiGetProducts } from '../api';
import useDebounce from '../hook/useDebounce';
import {formatMoney} from "../util/helper";

const SearchItem = ({ name, activeClick, changeActiveFilter, type = 'input' }) => {
  const router = useRouter();
  const { slug , search} = useParams();

  const [bestPrice, setBestPrice] = useState(null);
  const [price, setPrice] = useState({ from: '', to: '' });

  const fetchBestPriceProduct = async () => {
    const response = await apiGetProducts({ sort: '-price', limit: 1 });
    if (response.success) setBestPrice(response.data[0]?.price);
  };

  useEffect(() => {
    if (type === 'input') fetchBestPriceProduct();
  }, [type]);

  const debouncedPriceFrom = useDebounce(price.from, 500);
  const debouncedPriceTo = useDebounce(price.to, 500);

  useEffect(() => {
    const data = {};
    if (Number(debouncedPriceFrom) > 0) data.from = debouncedPriceFrom;
    if (Number(debouncedPriceTo) > 0) data.to = debouncedPriceTo;

    const searchParams = new URLSearchParams(data).toString();
    if(slug) router.push(`/category/${slug}?${searchParams}`);
    else router.push(`/product?${searchParams}`);
    
  }, [debouncedPriceFrom, debouncedPriceTo]);

  return (
    <div onClick={() => changeActiveFilter(name)} className='position-relative border d-flex p-3 gap-5'>
      <span>{name}</span>
      {activeClick === name && (
        <div className='filter-by-price'>
          {type === 'input' && (
            <div onClick={e => e.stopPropagation()}>
              <div className='p-2 d-flex gap-4 justify-content-between'>
                <span className='text-nowrap'>{`Giá cao nhất là ${formatMoney(bestPrice).toLocaleString()} VNĐ`}</span>
                <span onClick={e => {
                  e.stopPropagation();
                  setPrice({ from: '', to: '' });
                  changeActiveFilter(null);
                }}>Reset</span>
              </div>
              <div className='d-flex gap-2'>
                <div>
                  <label htmlFor='from'>From</label>
                  <input
                    type='number'
                    id='from'
                    value={price.from}
                    onChange={e => setPrice(prev => ({ ...prev, from: e.target.value }))}
                  />
                </div>
                <div>
                  <label htmlFor='to'>To</label>
                  <input
                    type='number'
                    id='to'
                    value={price.to}
                    onChange={e => setPrice(prev => ({ ...prev, to: e.target.value }))}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default memo(SearchItem);
