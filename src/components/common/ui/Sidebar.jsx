import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const Sidebar = () => {
     const sidebarRef = useRef(null);
     const [width, setWidth] = useState(0);

     useEffect(() => {
          const updateWidth = () => {
               if (sidebarRef.current) {
                    setWidth(sidebarRef.current.getBoundingClientRect().width);
               }
          };

          updateWidth();

          const observer = new ResizeObserver(updateWidth);

          if (sidebarRef.current) {
               observer.observe(sidebarRef.current);
          }

          return () => observer.disconnect();
     }, []);

     return (
          <>
               <div ref={sidebarRef} className="fixed left-0 top-0 h-screen bg-black w-64">
                    Sidebar
               </div>

               <div aria-hidden style={{ width }} className="shrink-0"/>
          </>
     );
};
export default Sidebar;