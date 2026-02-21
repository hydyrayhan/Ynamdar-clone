import Button from "./Button"
import { useState } from "react"
import OutClick from "../OutClick"
import { BsPerson } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useUserStore } from "../../store/user"
import { usePopupStore } from "../../store/popup"

function Profile() {
  const [open, setOpen] = useState<boolean>(false)
  const {setToken, setUser} = useUserStore(state => state)
  const {setOpenInfo} = usePopupStore(state=>state)
  const Logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setToken('')
    setUser(null)
  }

  return (
    <OutClick action={() => setOpen(false)}>
      <Button action={() => setOpen(true)}>
        <BsPerson className='text-custom-blue font-bold' size={20} />
        <span className='ml-2'>Hasabym</span>
      </Button>

      <div className={"absolute top-12 bg-white py-1 border border-gray-300 px-2 rounded flex flex-col shadow transtion-all duration-200 " + (open ? "opacity-100 visible" : "opacity-0 invisible")}>
        <Link to={'/addresses'} onClick={()=>setOpen(false)} className={"flex items-center p-2 rounded hover:bg-gray-200 "}>Salgylarym</Link>
        <div onClick={()=>(setOpenInfo(true),setOpen(false))} className="border-y border-gray-200">
          <button className={"flex items-center p-2 rounded hover:bg-gray-200 "}>Maglumatlarym</button>
        </div>
        <button onClick={Logout} className={"flex items-center p-2 rounded hover:bg-gray-200 "} >Çyk</button>
      </div>
    </OutClick>
  )
}

export default Profile