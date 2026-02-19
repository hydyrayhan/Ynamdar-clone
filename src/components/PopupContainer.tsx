import { BiX } from 'react-icons/bi'
import type { PopupProps } from '../types/Header'

function PopupContainer({ children, open, setOpen, title, sendData }: PopupProps) {

  return (
    <>
      <div onClick={() => setOpen(false)} className={'fixed z-10 top-0 left-0 h-screen bg-black/40 w-full backdrop-blur-[2px] transition-all ' + (open ? "opacity-100 visible" : "opacity-0 invisible")}></div>
      <div className={'text-black w-100 -translate-1/2 bg-white rounded py-3 px-5 fixed top-1/2 left-1/2 transition-all z-11 ' + (open ? "scale-100" : "scale-0")}>
        <div className='font-semibold text-2xl'>{title}</div>
        <button onClick={() => setOpen(false)} className='hover:opacity-70 absolute top-1 right-1 bg-red-600 rounded-full text-white p-0.5'>
          <BiX size={18} />
        </button>

       {children}
      </div>
    </>
  )
}

export default PopupContainer