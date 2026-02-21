import { axiosInstance } from "./axiosInstance";


export type brandType = {
  id:string;
  image:string;
  name:string;
}

export type categoryBrandType = {
  category:string;
  categoryId:number;
  brands:brandType[]
}

export const getAllBrands = async(id?:string)=>{
  const {data} = await axiosInstance.get<categoryBrandType[]>(`brands?categoryId=${id||''}`)
  return data
}
export const getAllBrandsByKeyword = async(keyword?:string)=>{
  const {data} = await axiosInstance.get<brandType[]>(`brandsByKeyword`) // ?keyword=keyword => hakyky backend catylanda sheyle ulanylyar
  return data
}