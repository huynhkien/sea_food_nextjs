import React, {memo} from 'react'


const Buttons = ({name, handleOnClick, style, type='button'}) => {
  return (
    <button
    type={type}
    className={style ? style : 'text-light bg-primary rounded shadow border-0 w-sm-100 btn btn-success mt-sm-3 p-sm-2'}
    onClick={() => { handleOnClick && handleOnClick() }}
    >
       
        <span>{name}</span>
        
    </button>
  )
}

export default memo(Buttons)