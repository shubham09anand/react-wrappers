import React from "react";
import { CheckIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Checkbox = ({ checked = false, actFucn }) => {
     return (
          <button
               onClick={actFucn}
               className={`h-5 w-5 shrink-0 rounded flex items-center justify-center cursor-pointer transition-all duration-200 ${checked ? "bg-violet-500" : "border-2 border-black/80"}`}
          >
               <AnimatePresence mode="wait">
                    {checked && (
                         <motion.div
                              key="check"
                              initial={{ scale: 0, opacity: 0, rotate: -90 }}
                              animate={{ scale: 1, opacity: 1, rotate: 0 }}
                              exit={{ scale: 0, opacity: 0, rotate: 90 }}
                              transition={{
                                   type: "spring",
                                   stiffness: 1400,
                                   damping: 25,
                              }}
                         >
                              <CheckIcon className="h-3.5 w-3.5 text-white" />
                         </motion.div>
                    )}
               </AnimatePresence>
          </button>
     );
};

export default Checkbox;