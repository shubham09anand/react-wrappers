import React, { useState } from "react";

const Stepper = ({ stepperSteps }) => {
     
     const [steps, setSteps] = useState(stepperSteps);
     const [currentStep, setCurrentSteps] = useState(2);

     return (
          <div className="flex items-center w-full">
               {steps.map((item, index) => (
                    <React.Fragment key={item.id || index}>
                         <div className="flex flex-col relative">
                              <div
                                   className={`h-10 w-10 shrink-0 rounded-full flex items-center justify-center font-medium ${index <= currentStep
                                        ? "bg-violet-500 text-white"
                                        : "bg-gray-200 text-gray-500"
                                        }`}
                              >
                                   {index + 1}
                              </div>
                              <div className="-ml-11">
                                   <div className="w-32 text-center absolute top-full font-semibold">{item?.title}</div>
                              </div>
                         </div>

                         {index < steps.length - 1 && (
                              <div
                                   className={`flex-1 h-1 mx-0.5 ${index < currentStep
                                        ? "bg-violet-500"
                                        : "bg-gray-200"
                                        }`}
                              />
                         )}
                    </React.Fragment>
               ))}
          </div>
     );
};

export default Stepper;