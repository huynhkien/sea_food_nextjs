"use client";
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const PagItem = ({ children }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handlePagination = () => {
    const queries = {};
    params.forEach((value, key) => {
      queries[key] = value;
    });

    if (Number(children)) {
      queries.page = children;
    }

    const searchParams = new URLSearchParams(queries).toString();
    router.push(`/product?${searchParams}`);
  };

  return (
    <li onClick={handlePagination}>
      <span>
          {children}
          </span>
    </li>
  );
};

export default PagItem;
