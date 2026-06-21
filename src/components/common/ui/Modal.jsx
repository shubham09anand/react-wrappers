import React from 'react'

const Modal = () => {

     return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
               <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                    <div className="text-lg font-bold text-[#25293A]">{'Modal Title'}</div>
                    <div className="mt-2 text-sm font-medium text-[#6D7383]">
                         {'Modal Message'}
                    </div>

                    <div className="mt-5 flex items-center justify-end gap-3">
                         <button className="w-fit px-4 py-2 rounded-xl border border-[#D9E3E7] bg-white text-[#374056] cursor-pointer">
                              Cancel
                         </button>
                         <button className="w-fit px-4 py-2 rounded-xl border border-[#EBA9B7] bg-[#FFECEE] text-[#B42318] cursor-pointer">
                              Confirm
                         </button>
                    </div>
               </div>
          </div>
     )
}

export default Modal
