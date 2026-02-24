import { useEffect, useState } from 'react'
import { product2 } from '../assets/images'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'
import { BsCart2 } from 'react-icons/bs'
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'
import type { ProductCardProps } from '../types/Product'
import { useCartStore } from '@/store/cart'

function ProductCard({ data }: { data: ProductCardProps }) {
  const [like, setLike] = useState(false)
  const [count, setCount] = useState(0)
  const {addToCart,removeFromCart,updateToCart} = useCartStore(state=>state)

  const remove = ()=>{
    setCount(count - 1) 
    updateToCart(data.id,count-1)
    if(count===1) removeFromCart(data.id)
  }

  useEffect(()=>{
    const carts = JSON.parse(localStorage.getItem("cart") || "")
    for(let i = 0; i<carts.length; i++){
      if(carts[i].id === data.id){
        setCount(carts[i].amount)
      }
    }
  },[])

  return (
    <div className={' bg-white rounded-md border p-5 flex flex-col justify-between ' + (count ? "border-custom-orange" : "border-gray-300")}>
      <div>
        <div className='relative border border-gray-200 rounded-xl overflow-hidden'>
          <img src={product2} alt="" />
          {
            data.discount > 0 &&
            <div className="absolute bg-red-600 rounded-xl text-white font-semibold py-1 px-3 bottom-2 left-2">
              -{data.discount}%
            </div>
          }
          {
            data.isNew &&
            <div className="absolute bg-red-600 rounded-br-xl text-white font-semibold p-0.5 top-0 left-0">
              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M6 0L4.36364 4.36364L0 6L4.36364 7.63636L6 12L7.63636 7.63636L12 6L7.63636 4.36364L6 0Z" fill="white"></path></svg>
            </div>
          }
        </div>
        <div className='py-2 font-semibold line-clamp-2'>{data.name}</div>
        <div className='py-1 text-gray-500 line-clamp-2'>{data.definition}</div>
      </div>
      <div>
        <div className="flex items-end py-1">
          <div className='text-xl font-bold'>{data.price - (data.price / 100 * data.discount)} m.</div>
          {
            data.discount > 0 &&
            <del className='text-gray-500 px-2 font-semibold'>{data.price} m.</del>
          }
        </div>
        <div className='flex items-center'>
          <button onClick={() => setLike(!like)} className='border h-10 w-10 border-gray-300 rounded-md p-2 text-center'>
            {like ? <IoMdHeart size={24} className='text-custom-orange ' /> : <IoMdHeartEmpty size={24} className='text-custom-orange ' />}
          </button>
          {
            count ?
              <div className='w-full h-10 ml-3 text-white bg-custom-orange flex justify-between items-center rounded-md overflow-hidden'>
                <button onClick={remove} className='hover:bg-[#f39357] active:bg-[#ca4619] h-10 w-10 flex items-center justify-center bg-custom-orange'><BiSolidLeftArrow size={20} /></button>
                <span className='font-bold'>{count} Sany</span>
                <button onClick={() => (setCount(count + 1),updateToCart(data.id,count+1))} className='hover:bg-[#f39357] active:bg-[#ca4619] h-10 w-10 flex items-center justify-center bg-custom-orange'><BiSolidRightArrow size={20} /></button>
              </div> :
              <button onClick={() => {setCount(1),addToCart(data)}} className='w-full transition-all hover:opacity-75 h-10 ml-3 text-white bg-custom-orange flex justify-center items-center rounded-md'>
                <BsCart2 size={24} />
              </button>
          }

        </div>
      </div>

    </div>
  )
}

export default ProductCard