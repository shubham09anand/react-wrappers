import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';

const ComponentWrapper = ({ children, className = '' }) => {
     const theme = useSelector((state) => state.themeReducer.mode);

     return (
          <div
               className={twMerge(
                    theme === 'dark'
                         ? 'bg-black'
                         : 'bg-white',
                    className
               )}
          >
               {children}
          </div>
     );
};

export default ComponentWrapper;