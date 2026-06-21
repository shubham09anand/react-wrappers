import React from 'react';
import { LoaderCircle } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const ApiButton = ({
     children,
     buttonStyle = '',
     actFunc,
     variantClass,
     notActive = false,
     disabled = false,
     shimmerEffect = true,
}) => {

     const baseStyle = `w-full rounded-2xl bg-[#3e898a] hover:bg-[#186b6c] cursor-pointer py-4 px-4 text-white font-bold text-sm tracking-wide shadow-xl shadow-slate-900/10 hover:shadow-slate-900/20 active:scale-[0.98] transition-all duration-150 relative overflow-hidden group`;

     const defaultButtonStyle = twMerge(baseStyle, variantClass);

     const isDisabled = notActive || disabled;

     const inactiveStyle = isDisabled
          ? 'cursor-not-allowed grayscale-100 opacity-70'
          : '';

     const buttonClass = twMerge(
          buttonStyle || defaultButtonStyle,
          inactiveStyle
     );

     return (
          <button
               type="button"
               className={`inline-flex items-center justify-center gap-2 ${buttonClass}`}
               disabled={isDisabled}
               onClick={actFunc}
          >
               <div className="flex items-center gap-2">
                    <div>{children}</div>
                    {disabled && <LoaderCircle size={24} strokeWidth={3} className="animate-spin text-white" />}
               </div>

               {!disabled && shimmerEffect && (
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
               )}
          </button>
     );
};

export default ApiButton;