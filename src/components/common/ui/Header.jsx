import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const Header = ({
     title,
     subtitle,
     onBack,
     rightContent,
}) => {

     const headerRef = useRef();
     const [headerHeight, setHeaderHeight] = useState(0);

     useEffect(() => {
     if (headerRef.current) {
          const height = headerRef.current.getBoundingClientRect().height;
          setHeaderHeight(height);
     }
}, []);

     return (
          <>
               <div ref={headerRef} className="flex w-screen items-center justify-between py-4 fixed top-0 z-9999 h-18 bg-black">
                    
               </div>
               <div style={{paddingBottom:`${headerHeight}px`}}></div>
          </>
     );
};

export default Header;