import React from 'react';
import { twMerge } from 'tailwind-merge';

const Switch = ({ value = false, actFunc, disabled = false }) => {
     return (
          <button
               type="button"
               disabled={disabled}
               onClick={() => actFunc?.(!value)}
               className={twMerge(
                    'relative w-11 border-3 rounded-full transition-all duration-300 cursor-pointer',
                    value ? 'bg-violet-500 border-violet-500' : 'bg-gray-300 border-gray-300',
                    disabled && 'opacity-50 cursor-not-allowed'
               )}
          >
               <div className={twMerge('size-5 rounded-full bg-white transition-transform duration-300', value && 'translate-x-full')} />
          </button>
     );
};

export default Switch;