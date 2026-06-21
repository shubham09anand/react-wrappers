import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ChevronDown, Check, X } from 'lucide-react';

const DropDown = ({
     options = [],
     value = '',
     onChange,
     placeholder = 'Select an option',
     className = '',
}) => {
     const [isOpen, setIsOpen] = useState(false);
     const wrapperRef = useRef(null);

     useEffect(() => {
          const handleOutsideClick = (event) => {
               if (!wrapperRef.current?.contains(event.target)) {
                    setIsOpen(false);
               }
          };

          document.addEventListener('mousedown', handleOutsideClick);

          return () => {
               document.removeEventListener('mousedown', handleOutsideClick);
          };
     }, []);

     const selectedOption = options.find((option) => option === value);

     return (
          <div ref={wrapperRef} className={twMerge(`relative ${className}`)}>
               <div
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between rounded-xl border border-slate-300 bg-white px-4 py-3 text-left text-sm text-slate-900 transition focus:border-violet-500"
               >
                    <div className={`font-semibold ${selectedOption ? 'text-slate-900' : 'text-slate-400'}`}>
                         {selectedOption || placeholder}
                    </div>
                    {selectedOption ? (
                         <button
                              onClick={(e) => {
                                   e.stopPropagation();
                                   onChange?.('');
                              }}
                              className="bg-white hover:bg-white p-0"
                         >
                              <X className="h-4 w-4 text-slate-500" />
                         </button>
                    ) : (
                         <ChevronDown
                              className={`h-4 w-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''
                                   }`}
                         />
                    )}
               </div>

               {isOpen && (
                    <div className="absolute max-h-60 overflow-y-scroll left-0 right-0 top-[calc(100%+8px)] z-20 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                         {options.map((option, index) => {
                              const isSelected = option === value;

                              return (
                                   <button
                                        key={index}
                                        type="button"
                                        onClick={() => {
                                             onChange?.(option);
                                             setIsOpen(false);
                                        }}
                                        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-slate-50"
                                   >
                                        <div className={isSelected ? 'font-semibold text-[#2b7071]' : 'text-slate-700'}>
                                             {option}
                                        </div>
                                        {isSelected && <Check className="h-4 w-4 text-[#2b7071]" />}
                                   </button>
                              );
                         })}
                    </div>
               )}
          </div>
     );
};

export default DropDown;
