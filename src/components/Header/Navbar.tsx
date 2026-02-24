import Category from './Category'
import { useLocation, useNavigate } from 'react-router-dom'
import { FiLayers } from "react-icons/fi";
import Button from './Button';
import Search from './Search';
import Language from './Language';
import Stick from './Stick';
import { RxArchive } from 'react-icons/rx';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart2 } from 'react-icons/bs';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Login from './Login';
import Register from './Register';
import { useUserStore } from '../../store/user';
import Profile from './Profile';
import InfoPopup from './InfoPopup';
import { useCartStore } from '@/store/cart';

function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation()
  const [open, setOpen] = useState<boolean>(false)
  const { user, token } = useUserStore(state => state)
  const {cart} = useCartStore(state=>state)

  return (
    <div className='bg-white py-2 text-custom-blue h-15 shadow-lg sticky top-0 z-10'>
      <div onClick={() => setOpen(false)} className={"absolute top-15 left-0 w-full h-[calc(100vh-118px)] backdrop-blur-[2px] " + (open ? "scale-100" : "scale-0")}></div>
      <div className="relative container mx-auto px-3 flex items-center h-full">
        <Category open={open} setOpen={setOpen} />
        <Stick />
        <Button title={t('brands')} action={() => navigate('brands')} active={pathname == '/brands'}>
          <FiLayers size={20} className='text-custom-blue font-bold mr-3' />
        </Button>
        <Search />
        <Language />
        <Stick />

        {
          !token
            ?
            <>
              <Login />
              <Stick />
              <Register />
            </>
            :
            <>
              <Profile />
              <InfoPopup />
            </>
        }

        <Stick />
        <Button action={() => navigate('orders')} active={pathname === "/orders"}>
          <RxArchive size={20} className='text-custom-blue font-bold' />
        </Button>
        <Stick />
        <Button action={() => navigate('wishlist')} active={pathname === "/wishlist"}>
          <IoMdHeartEmpty size={20} className='text-custom-blue font-bold' />
        </Button>
        <Stick />
        <div className='relative'>
          <Button action={() => navigate('cart')} active={pathname === "/cart"}>
            <BsCart2 size={20} className='text-custom-blue font-bold' />
          </Button>
          {
            cart.length>0 && <span className='absolute -bottom-1 right-0 bg-custom-orange text-white w-5 h-5 rounded-full flex items-center justify-center text-xs'>{cart.length}</span>
          }
        </div>
      </div>

    </div>
  )
}

export default Navbar