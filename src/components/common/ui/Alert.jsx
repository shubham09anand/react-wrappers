import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Wifi, WifiOff } from "lucide-react";

const Alert = () => {

     const [isToastVisible, setIsToastVisible] = useState(true);

     return (
          <div className="fixed top-4 left-1/2 -translate-x-1/2 z-9999 pointer-events-none">
               <AnimatePresence>
                    {(isToastVisible) && (
                         <motion.div
                              key="network-toast"
                              aria-live="polite"
                              initial={{ y: "-120%" }}
                              animate={{ y: 0 }}
                              exit={{ y: "-120%" }}
                              transition={{
                                   type: "spring",
                                   stiffness: 320,
                                   damping: 28,
                                   mass: 0.8,
                              }}
                              className="pointer-events-auto flex items-center justify-between gap-4 min-w-65 max-w-[90vw] px-5 py-3 rounded-xl shadow-2xl bg-white"
                         >
                              <div className="flex items-center gap-3">
                                   <WifiOff className="shrink-0 text-red-400" size={18} />

                                   <div className="leading-snug">
                                        <div textStyle="text-sm font-semibold">
                                             No Internet Connection
                                        </div>

                                        <div textStyle="text-xs font-light opacity-75 mt-0.5">
                                             Please check your network settings
                                        </div>
                                   </div>
                              </div>

                              <button
                                   className="px-3 py-1 text-xs font-bold rounded-md bg-red-500 hover:bg-red-600 transition-colors pointer-events-auto"
                              >
                                   Reload
                              </button>
                         </motion.div>
                    )}
               </AnimatePresence>
          </div>
     );
};

export default Alert;
