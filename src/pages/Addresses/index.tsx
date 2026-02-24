import { useEffect, useState } from 'react'
import AddressCard from './components/AddressCard'
import AddressPopup from './components/AddressPopup'
import { useGetAllAddresses } from '@/queries/user'
import Loading from '@/components/Loading'
import nProgress from 'nprogress'
import type { AddressT } from '@/types/User'

function index() {
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [index,setIndex] = useState<null | number>(null)
  const [active,setActive] = useState(Number(localStorage.getItem("address-active") || 0))
  const { data, isLoading } = useGetAllAddresses()

  useEffect(() => {
    if (isLoading) {
      nProgress.start()
    } else {
      nProgress.done()
    }
  }, [isLoading])

  const handleActive = (e:number)=>{
    setActive(e)
    localStorage.setItem("address-active",`${e}`)
  }

  if (isLoading) { return <Loading /> }

  return (
    <div className='container mx-auto py-3 px-5'>
      <div className='flex items-center justify-between'>
        <div className='font-bold text-2xl'>
          Salgylarym
        </div>
        <div>
          <button onClick={() => setOpen(true)} className='text-custom-orange font-semibold bg-white py-1 px-2 shadow rounded'>+ Taze gos</button>
        </div>
      </div>
      <div className='bg-white rounded p-3 my-3 grid grid-cols-3 gap-2'>
        {
          data && data.map((address:AddressT,i:number)=>(
            <AddressCard key={address.id} data={address} setOpenEdit={()=>{setOpenEdit(true),setIndex(i)}} index={i} active={active} setActive={handleActive}/>
          ))
        }
      </div>
      {
        open && <AddressPopup open={open} setOpen={setOpen} />
      }
      {
        openEdit && index !== null && <AddressPopup open={openEdit} setOpen={setOpenEdit} defaultValue={data[index]}/>
      }
    </div>
  )
}

export default index