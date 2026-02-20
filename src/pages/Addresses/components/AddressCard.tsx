import React from 'react'

function AddressCard() {
  return (
    <div className='border border-custom-orange rounded p-3'>
      <div className='flex items-center justify-between'>
        <div className='font-bold text-xl'>
          Gurtly
        </div>
        <div className='text-custom-orange h-5 w-5'>
          <svg className='h-full w-full ' viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_2)"><rect width="17" height="17" rx="4" fill="currentColor" className="text-gray-300"></rect><path d="M13 3L7.99999 13L4 8.55559" stroke="currentColor" className="text-accent-500" strokeWidth="2.5"></path></g><defs><clipPath id="clip0_1_2"><rect width="17" height="17" fill="white"></rect></clipPath></defs></svg>
        </div>
      </div>
      <div className='flex-col py-3'>
        <div>
          <span className='text-custom-orange font-semibold'>Musderi: </span>
        </div>
        <div>
          <span className='text-custom-orange font-semibold'>Telefon: </span>
        </div>
        <div>
          <span className='text-custom-orange font-semibold'>Salgy: </span> 
        </div>
      </div>
      
    </div>
  )
}

export default AddressCard