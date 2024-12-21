"use client";
const Input = ({id,style, value, setValue, nameKey, type, invalidFields, setInValidFields, iconClass, placeholder, onChange }) => {
    
    const isInvalidFieldsArray = Array.isArray(invalidFields);

    const handleChange = (e) => {
        if (onChange) {
            onChange(e);
        } else {
            setValue(prev => ({ ...prev, [nameKey]: e.target.value }));
        }
    };

    return (
      <div className="tptrack__id mb-10">
        <div>
          <span>{iconClass}</span>
          <input 
            id={id}
            type={type || 'text'}
            className={style}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onFocus={() => setInValidFields && setInValidFields([])}
          />
          {isInvalidFieldsArray && invalidFields?.some(el => el.name === nameKey) && (
            <small className='text-danger'>
              {invalidFields.find(el => el.name === nameKey)?.message}
            </small>
          )}
        </div>
      </div>
    );
};

export default Input;
