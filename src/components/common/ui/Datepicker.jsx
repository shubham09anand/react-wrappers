import { useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import DatePicker from 'react-datepicker';
import { CalendarDays } from 'lucide-react';
import 'react-datepicker/dist/react-datepicker.css';

const Datepicker = ({
     date,
     setDate,
     minDate,
     maxDate,
     placeholder = 'Select Date',
     className
}) => {
     const datePickerRef = useRef(null);

     return (
          <div className={twMerge(`w-full mt-3 rounded-xl overflow-hidden border border-gray-300 focus-within:border-gray-400 ${className}`)}>
               <div className="relative">
                    <DatePicker
                         ref={datePickerRef}
                         selected={date ?? null}
                         onChange={(selectedDate) => setDate(selectedDate)}
                         onChangeRaw={(e) => {
                              e.target.value = e.target.value.replace(/[^\d/]/g, '');
                         }}
                         dateFormat="dd/MM/yyyy"
                         minDate={minDate}
                         maxDate={maxDate}
                         portalId="root"
                         popperPlacement="bottom-start"
                         placeholderText={placeholder}
                         className="w-full bg-white px-4 py-2 pr-12 outline-none focus:border-violet-500"
                    />

                    <CalendarDays
                         size={18}
                         onClick={() => datePickerRef.current?.setOpen(true)}
                         className="absolute cursor-pointer active:opacity-90 z-50 right-4 top-1/2 -translate-y-1/2 text-black/80"
                    />
               </div>
          </div>
     );
};

export default Datepicker;