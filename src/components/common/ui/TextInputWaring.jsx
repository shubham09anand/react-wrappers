import React from 'react'
import TextWrapper from './Textwrapper'
import { twMerge } from 'tailwind-merge'

const TextInputWarning = ({ formik, name, className }) => {
     if (!formik?.touched?.[name] || !formik?.errors?.[name]) {
          return null
     }

     return (
          <TextWrapper textStyle={twMerge(`text-xs text-red-500 capitalize font-semibold mt-1.5 pl-1 ${className}`)}>
               {formik.errors[name]}
          </TextWrapper>
     )
}

export default TextInputWarning