import React, { useEffect, useRef } from 'react';

const OtpInput = ({ formik, otpLength = 6, disabled }) => {

     const inputRefs = useRef([]);

     const formikOtp = (formik.values.otp || '').slice(0, 6);
     const otp = Array.from({ length: otpLength }, (_, i) => formikOtp[i] || '');

     useEffect(() => {
          inputRefs.current[0]?.focus();
     }, []);

     const handleChange = (value, index) => {
          if (!/^\d?$/.test(value)) return;

          const newOtp = [...otp];
          newOtp[index] = value;

          formik.setFieldValue('otp', newOtp.join(''));

          if (value && index < newOtp.length - 1) {
               inputRefs.current[index + 1]?.focus();
          }
     };

     const handleKeyDown = (e, index) => {
          if (e.key === 'Backspace' && !otp[index] && index > 0) {
               inputRefs.current[index - 1]?.focus();
          }
     };

     return (
          <div className="flex justify-between mt-4">
               {otp.map((digit, index) => (
                    <input
                         key={index}
                         ref={(el) => (inputRefs.current[index] = el)}
                         type="text"
                         disabled={disabled}
                         inputMode="numeric"
                         maxLength={1}
                         value={digit}
                         onChange={(e) => handleChange(e.target.value, index)}
                         onKeyDown={(e) => handleKeyDown(e, index)}
                         className="w-12 h-16 text-center text-lg font-semibold bg-gray-50 hover:bg-gray-100 border-2 border-[#54a4a5] rounded-xl outline-none focus:outline-none focus:border-[#23989a] focus:ring-4 focus:ring-[#54a4a5]/20"
                    />
               ))}
          </div>
     );
};

export default OtpInput;