import axios, { type AxiosResponse } from "axios"
import type { AddressT, UserDataT, UserLoginDataT } from "../types/User"

export const register = async(data:UserDataT)=>{
  try {
    const res = await axios.post("http://localhost:5000/users",data)
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
      res = await axios.get("http://localhost:5000/users?email="+data.email)
    }else if(data.phone){
      res = await axios.get("http://localhost:5000/users?phone="+data.phone)
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
    res = await axios.patch("http://localhost:5000/users/"+data.id,data)
    return res;
  } catch (error) {
    throw new Error("Ýalňyşlyk bar");
  }
}

export const addAddress = async(data:AddressT)=>{
  try {
    const res = await axios.post("http://localhost:5000/addresses",data)
    return res;
  } catch (error) {
    throw new Error("Ýalňyşlyk bar");
  }
}