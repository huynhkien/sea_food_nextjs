"use client";
import { memo } from 'react';

export const Input = ({ label, disabled, register, errors, id, validate, placeholder, defaultValue, style, type }) => {
  return (
    <div className="form-group w-100 mb-2">
      <label className='mb-2' htmlFor={id}>{label} </label>
      <input
        type={type || 'text'}
        id={id}  
        {...register(id, validate)} 
        disabled={disabled}
        className={style ? style : 'form-control'}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {errors[id] && <small>{errors[id]?.message}</small>}
    </div>
  );
};

export default memo(Input);
