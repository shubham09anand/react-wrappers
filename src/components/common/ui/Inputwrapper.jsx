import React, { useState } from 'react';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

// type = text | number | password | emial

const Inputwrapper = ({
     lable,
     type = 'text',
     value,
     onChange,
     placeholder = 'Enter value',
     name = '',
     disabled = false,

     max,
     min,
     size,
     maxLength,
     minLength,
     textClass = '',
     inputClass = '',
}) => {

     const isNumberType = type === 'number';
     const textType = ['text', 'password', 'email']
     const [inputValue, setInputValue] = useState('');

     const handleTextChange = (e) => {
          const val = e.target.value;
          if (type === 'number') {
               const onlyDigits = val.replace(/[^0-9]/g, "");
               setInputValue(onlyDigits);
          } else if (textType.includes(type)) {
               setInputValue(val);
          }
     }

     return (
          <>
               <div className={twMerge('text-red-600 font-semibold mb-2', textClass)}>{lable}</div>
               <input
                    type={'text'}
                    value={inputValue}
                    onChange={(e) => handleTextChange(e)}
                    placeholder={placeholder}
                    name={name}
                    disabled={disabled}
                    max={max}
                    min={min}
                    size={size}
                    maxLength={maxLength}
                    minLength={minLength}
                    className={twMerge(
                         'w-full rounded-lg px-4 py-2 outline-none border-2 border-(--theme) focus:ring-2 ring-(--theme)/50',
                         inputClass
                    )}
               />
          </>
     );
};

export default Inputwrapper;