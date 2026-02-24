import { type AxiosResponse } from "axios"
import type { AddressT, UserDataT, UserLoginDataT } from "../types/User"
import { axiosInstance } from "./axiosInstance"

export const register = async(data:UserDataT)=>{
  try {
    const res = await axiosInstance.post("users",data)
    if (res.status === 201){
      return res.data
    }
  } catch (error) {
    throw new Error("Ýalňyşlyk bar");
  }
}


export const login = async(data:UserLoginDataT)=>{
  try {
    let res:AxiosResponse<UserLoginDataT[]> | undefined;
    if (data.email){
      res = await axiosInstance.get("users?email="+data.email)
    }else if(data.phone){
      res = await axiosInstance.get("users?phone="+data.phone)
    }
    if(res && res.status == 200){
      if(res.data[0].password === data.password){
        res.data[0].token = `mock-token-${Math.random().toString(36).substr(2)}`
        return res
      }else{
        throw new Error("Sizin achar sozuniz yalnysh")
      }
    }
  } catch (error) {
    throw new Error("Ýalňyşlyk bar");
  }
}


export const updateUser = async(data:UserLoginDataT)=>{
  try {
    let res:AxiosResponse<UserLoginDataT[]> | undefined;
    res = await axiosInstance.patch("users/"+data.id,data)
    return res;
  } catch (error) {
    throw new Error("Ýalňyşlyk bar");
  }
}

export const addAddress = async(data:AddressT)=>{
  try {
    const res = await axiosInstance.post("addresses",data)
    return res;
  } catch (error) {
    throw new Error("Ýalňyşlyk bar");
  }
}
export const editAddress = async(data:AddressT)=>{
  try {
    const res = await axiosInstance.patch(`addresses/${data.id}`,data)
    return res;
  } catch (error) {
    throw new Error("Ýalňyşlyk bar");
  }
}
export const deleteAddress = async(id:string)=>{
  try {
    const res = await axiosInstance.delete(`addresses/${id}`)
    return res;
  } catch (error) {
    throw new Error("Ýalňyşlyk bar");
  }
}

export const getAllAddress = async()=>{
  try {
    const res = await axiosInstance.get("addresses")
    return res.data;
  } catch (error) {
    throw new Error("Ýalňyşlyk bar");
  }
}