import { memo } from 'react';

const InputSelect = ({ value, changeValue, options }) => {
  return (
    <select
      className=' border-1 p-3 w-sm-50 z-1 '
      value={value}
      onChange={e => changeValue(e.target.value)}
    >
      {options?.map(el => (
        <option key={el.id} value={el.value}>{el.text}</option>
      ))}
    </select>
  );
};

export default memo(InputSelect);
