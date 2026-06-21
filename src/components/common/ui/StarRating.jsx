import React, { useState } from "react";
import { Star } from "lucide-react";

const StarRating = ({ starCount = 5 }) => {
     const [rating, setRating] = useState(0);

     const handleRating = (value) => {
          setRating(value);
     };

     return (
          <div className="flex mb-4 gap-3">
               {Array.from({ length: starCount }, (_, index) => (
                    <div
                         key={index}
                         onClick={() => handleRating(index + 1)}
                         className="hover:scale-110 transition-transform duration-200 cursor-pointer"
                    >
                         <Star
                              size={26}
                              strokeWidth={1.5}
                              className={
                                   index + 1 <= rating
                                        ? "fill-violet-500 text-violet-500"
                                        : "fill-white text-[#C5CDD8]"
                              }
                         />
                    </div>
               ))}
          </div>
     );
};

export default StarRating;