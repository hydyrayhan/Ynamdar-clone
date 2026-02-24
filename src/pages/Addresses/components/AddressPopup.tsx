import Input from '@/components/Header/Input'
import PopupContainer from '@/components/PopupContainer'
import { useAddAddress, useEditAddress } from '@/queries/user'
import type { AddressT } from '@/types/User'
import { useEffect, useState } from 'react'



function AddressPopup({ open, setOpen, defaultValue }: { open: boolean, setOpen: (open: boolean) => void ,defaultValue?:AddressT }) {
  const [data, setData] = useState({
    address: "",
    fullname: "",
    phone: "",
    fullAddress: "",
    description: ""
  })
  
  const add = useAddAddress()
  const edit = useEditAddress()
  
  useEffect(()=>{
    if(defaultValue){
      setData(defaultValue)
    }
  },[defaultValue])

  useEffect(() => {
    if (add.isSuccess,edit.isSuccess) {
      setData({
        address: "",
        fullname: "",
        phone: "",
        fullAddress: "",
        description: ""
      })
      setOpen(false)
    }
  }, [add.isSuccess,edit.isSuccess])

  const sendData = () => {
    if(defaultValue){
      edit.mutate(data)
    }else{
      add.mutate(data)
    }
  }


  return (
    <PopupContainer open={open} setOpen={setOpen} title='Taze salgy gos' sendData={sendData}>
      <div className="my-5 flex flex-col gap-5">
        <Input label='Salgy ady*' type={'string'} value={data.address} name='address' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />
        <Input label='Doly adynyz*' type={'string'} value={data.fullname} name='fullname' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />
        <Input label='Telefon*' type={'string'} value={data.phone} name='phone' defaultValue='+993' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />
        <Input label='Salgynyz*' type={'string'} value={data.fullAddress} name='fullAddress' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />
        <Input label='Salgynyz barada ginishleyin*' type={'string'} value={data.description} name='description' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />
        <button onClick={sendData} className='bg-custom-green text-white font-bold w-full hover:opacity-80 py-2 rounded'>
          {
            defaultValue ? "Edit" : "Gosh"
          }
        </button>

      </div>
    </PopupContainer>
  )
}

export default AddressPopup