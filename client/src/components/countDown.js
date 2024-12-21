import { memo } from 'react';

const countDown = ({ unit, number }) => {
  return (
    <div className='bg-light d-flex flex-column mx-3 w-25 p-3 rounded shadow justify-content-center align-items-center text-center'>
      <h6 className='text-center text-dark'>{number}</h6>
      <h6 className='text-center text-dark'>{unit}</h6>
    </div>
  );
}

export default memo(countDown);
