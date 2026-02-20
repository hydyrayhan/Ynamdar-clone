import { useState } from 'react'
import AddressCard from './components/AddressCard'
import AddressPopup from './components/AddressPopup'

function index() {
  const [open, setOpen] = useState(false)

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
        <AddressCard />
      </div>
      {
        open && <AddressPopup open={open} setOpen={setOpen} />
      }
    </div>
  )
}

export default index