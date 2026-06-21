import React from 'react';
import { twMerge } from 'tailwind-merge';

const Tooltip = ({
     children,
     info,
     triggerClass = '',
     tooltipClass = '',
     arrowClass = '',
}) => {
     return (
          <div className={twMerge('relative inline-flex group')}>
               <div className={twMerge('cursor-pointer p-2 rounded-lg hover:bg-gray-200', triggerClass)}>
                    {children}
               </div>

               <div className={twMerge('absolute left-1/2 top-full mt-2.5 -translate-x-1/2 px-3 py-1.5 text-sm text-white shadow-lg rounded bg-(--theme) whitespace-nowrap opacity-0 invisible transition-all duration-500 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible z-99', tooltipClass)}>
                    <div className={twMerge('absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-(--theme)', arrowClass)} />
                    {info || 'This is a tooltip'}
               </div>
          </div>
     );
};

export default Tooltip;