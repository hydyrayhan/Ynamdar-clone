import type { CategoryType } from "@/types/Category"
import { axiosInstance } from "./axiosInstance"

export const getAllCategories = async()=>{
  const {data} = await axiosInstance.get<CategoryType[]>(`categories`)
  return data
}