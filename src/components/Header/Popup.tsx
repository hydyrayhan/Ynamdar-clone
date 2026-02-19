import { BiX } from 'react-icons/bi'
import type { PopupProps } from '../../types/Header'
import { apple, google } from '../../assets/images'

function Popup({ children, open, setOpen, title, active, setActive, sendData }: PopupProps) {

  return (
    <>
      <div onClick={() => setOpen(false)} className={'fixed top-0 left-0 h-screen bg-black/40 w-full backdrop-blur-[2px] transition-all ' + (open ? "opacity-100 visible" : "opacity-0 invisible")}></div>
      <div className={'text-black w-100 -translate-1/2 bg-white rounded py-3 px-5 fixed top-1/2 left-1/2 transition-all ' + (open ? "scale-100" : "scale-0")}>
        <div className='font-semibold text-2xl'>{title}</div>
        <button onClick={() => setOpen(false)} className='hover:opacity-70 absolute top-1 right-1 bg-red-600 rounded-full text-white p-0.5'>
          <BiX size={18} />
        </button>

        <div className='flex justify-end'>
          <button onClick={() => setActive && setActive("phone")} className={'bg-gray-200 py-1 px-3 border border-gray-300 rounded-l shadow-inner  ' + (active == "phone" && "text-blue-500 bg-white")}>Telefon</button>
          <button onClick={() => setActive && setActive("email")} className={'bg-gray-200 py-1 px-3 border border-gray-300 rounded-r shadow-inner  ' + (active == "email" && "text-blue-500 bg-white")}>Email</button>
        </div>

        <div>{children}</div>

        <button onClick={sendData} className='bg-custom-green text-white font-bold w-full hover:opacity-80 py-2 rounded'>{title}</button>

        <div className='relative flex justify-center my-3'>
          <div className='absolute top-3.5 border-b border-gray-300 w-full'></div>
          <div className='z-10 bg-white px-2'>ýa-da</div>
        </div>

        <div className='flex items-center justify-center gap-3'>
          <a className='border border-gray-500 rounded-xl h-10 w-10 flex items-center justify-center' href=""><img src={google} alt="" /></a>
          <a className='border border-gray-500 rounded-xl h-10 w-10 flex items-center justify-center' href=""><img src={apple} alt="" /></a>
        </div>
      </div>
    </>
  )
}

export default Popup