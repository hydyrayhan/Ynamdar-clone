import PopupContainer from '../PopupContainer'
import { usePopupStore } from '../../store/popup'
import Input from './Input'
import { useUserStore } from '../../store/user'
import { useState } from 'react'
import { BsInfo } from 'react-icons/bs'
import { Forward, KeySquareIcon } from 'lucide-react'
import { type UserLoginDataT } from '@/types/User'
import toast from 'react-hot-toast'
import { useUpdateUser } from '@/queries/user'

function InfoPopup() {
  const { setUser } = useUserStore(state => state)
  const { mutate } = useUpdateUser()
  const [data, setData] = useState<UserLoginDataT>({
    id: JSON.parse(localStorage.getItem("user")!).id,
    phone: JSON.parse(localStorage.getItem("user")!).phone,
    fullname: JSON.parse(localStorage.getItem("user")!).fullname,
    address: JSON.parse(localStorage.getItem("user") || "").address,
    gender: JSON.parse(localStorage.getItem("user") || "").gender,
    birthDate: JSON.parse(localStorage.getItem("user") || "").birthDate,
    cashback: JSON.parse(localStorage.getItem("user") || "0").cashback,
  })
  const { openInfo, setOpenInfo } = usePopupStore(state => state)
  const sendData = () => {
    if(!data.fullname){
      toast.error("Boshluklary dolduryn!!!")
      return
    }
    setUser(data)
    mutate(data)
    localStorage.setItem("user",JSON.stringify(data))
    setOpenInfo(false)
  }
  return (
    <PopupContainer title='Hasabym' open={openInfo} setOpen={setOpenInfo} sendData={sendData}>
      <div className='space-y-6 mt-6'>
        <Input label={"Telefon"} type="string" defaultValue='+993' name='phone' onChange={() => { }} value={data.phone} />
        <Input label={"Doly adynyz*"} type="string" name='fullname' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} value={data.fullname} />
        <Input label={"Salgynyz"} type="string" name='address' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} value={data.address} />
        <div className='flex gap-3'>
          <label className='flex items-center gap-2'>
            <div className='bg-gray-300 h-5 w-5 rounded-full flex items-center justify-center'>
              <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.5" cy="10.5" r="10.5" fill="currentColor" className="text-gray-300"></circle>
                {
                  data.gender === "male" &&
                  <circle cx="10.5" cy="10.5001" r="7" fill="currentColor" className="text-custom-orange"></circle>
                }
              </svg>
            </div>
            <input onChange={(e) => { setData({ ...data, "gender": e.target.value }) }} className='hidden' type="radio" name="gender" value={'male'} />
            Erkek
          </label>
          <label className='flex items-center gap-2'>
            <div className='bg-gray-300 h-5 w-5 rounded-full flex items-center justify-center'>
              <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.5" cy="10.5" r="10.5" fill="currentColor" className="text-gray-300"></circle>
                {
                  data.gender === "female" &&
                  <circle cx="10.5" cy="10.5001" r="7" fill="currentColor" className="text-custom-orange"></circle>
                }
              </svg>
            </div>
            <input onChange={(e) => setData({ ...data, "gender": e.target.value })} className='hidden' type="radio" name="gender" value={'female'} />
            Ayal
          </label>
        </div>
        <Input label={"Doglan senaniz"} type="date" name='birthDate' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} value={data.birthDate} />
        <div className='border border-blue-600 text-blue-900 rounded-lg px-2 py-1'>
          <div className='flex items-center font-semibold'>
            <div className='w-1/2 text-center'>
              Keşbek balansyňyz:
            </div>
            <div className='h-10 border-r border-blue-900'></div>
            <div className='w-1/2 text-center flex items-center justify-between'>
              <span className='w-full'>
                {data.cashback ? data.cashback : "0.00"} m
              </span>
              <div className='relative group transition-all duration-200 whitespace-nowrap group-hover:opacity-100'>
                <BsInfo className='border bg-blue-900 rounded-full text-white w-5 h-5 mr-1' />
                <div className='bg-gray-500 w-max absolute transition-all bottom-7 -right-4 invisible opacity-0 group-hover:visible group-hover:opacity-100  text-white rounded px-2 py-1 text-center text-sm'>
                  Kesbek balansynyz her taze yylda bosadylyar!
                  <span className='absolute -bottom-1 right-6 h-2 w-2 rotate-45 transform bg-gray-500' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <button className='flex items-center justify-between py-2 px-4 bg-gray-500 text-white rounded gap-3 text-sm'>
            <KeySquareIcon size={18} />
            Acar sozuni uytget
          </button>
        </div>
        <button onClick={sendData} className='bg-custom-green text-white font-bold w-full hover:opacity-80 py-2 rounded flex items-center justify-center gap-3'>
          <Forward />
          Yatda sakla
        </button>
        <div className='flex items-center justify-center -mt-4'>
          <button className='text-red-500 text-sm text-center'>Hasabymy pozun</button>
        </div>
      </div>
    </PopupContainer>
  )
}

export default InfoPopup