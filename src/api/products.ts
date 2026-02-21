import { axiosInstance } from "./axiosInstance";
import type { ProductCardProps } from "../types/Product";

export const getAllProducts = async(id:string|undefined,order:string,brands:string[])=>{
  let newOrder = ""
  if (order == 'asc'){
    newOrder = "-price"
  }else if(order == 'desc'){
    newOrder = "price"
  }
  const {data} = await axiosInstance.get<ProductCardProps[]>(`products?categoryId=${id}&_sort=${newOrder}`)
  return data
}

export const getAllProductsByKeyword = async(keyword:string|undefined,order:string,brands:string[])=>{
  let newOrder = ""
  if (order == 'asc'){
    newOrder = "-price"
  }else if(order == 'desc'){
    newOrder = "price"
  }
  const {data} = await axiosInstance.get<ProductCardProps[]>(`products?name=${keyword}&_sort=${newOrder}`)
  return data
}

// _sort=price , _sort=-price