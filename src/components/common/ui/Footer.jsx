import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const Footer = ({
     title,
     subtitle,
     onBack,
     rightContent,
}) => {

     const fotterRef = useRef();
     const [footerHeight, setFooterHeight] = useState(0);

     useEffect(() => {
     if (fotterRef.current) {
          const height = fotterRef.current.getBoundingClientRect().height;
          setFooterHeight(height);
     }
}, []);

     return (
          <>
               <div ref={fotterRef} className="flex w-screen items-center justify-between py-4 fixed bottom-0 h-14 bg-black">
                    Footer
               </div>
               <div style={{paddingBottom:`${footerHeight}px`}}></div>
          </>
     );
};

export default Footer;