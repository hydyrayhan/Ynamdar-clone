import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addAddress, getAllAddress, login, register, updateUser } from "../api/user"
import type { AddressT, UserLoginDataT } from "../types/User"
import type { AxiosResponse } from "axios"
import toast from "react-hot-toast"

export const useRegister = ()=>{
  return useMutation({
    mutationFn:register,
    onSuccess:()=>{
      alert("Siz ustunlikli registrasiya boldunyz")
    },
    onError:()=>{
      alert("Hello yalnyshlyk")
    }
  })
}
export const useLogin = ()=>{
  return useMutation({
    mutationFn:login,
    onSuccess:(data:AxiosResponse<UserLoginDataT[]> | undefined)=>{
      if(data){
        toast.success("Siz ustinlikli iceri girdiniz!")
        localStorage.setItem("user",JSON.stringify(data.data[0]))
        localStorage.setItem("token",data.data[0].token!)
      }
    },
    onError:()=>{
      alert("Hello yalnyshlyk")
    }
  })
}

export const useUpdateUser = ()=>{
  return useMutation({
    mutationFn:updateUser,
    onSuccess:(data:AxiosResponse<UserLoginDataT[]> | undefined)=>{
      if(data){
        toast.success("Hemme zat gul yaly!")
      }
    },
    onError:()=>{
      alert("Hello yalnyshlyk")
    }
  })
}

export const useAddAddress = ()=>{
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn:addAddress,
    onSuccess:(data:AxiosResponse<AddressT> | undefined)=>{
      if(data){
        toast.success("Hemme zat gul yaly!")
        queryClient.invalidateQueries({ queryKey: ['addresses'] })
      }
    },
    onError:()=>{
      alert("Hello yalnyshlyk")
    }
  })
}

export const useGetAllAddresses = ()=>{
  return useQuery({
    queryKey: [`addresses`],
    queryFn: getAllAddress,
    staleTime: Infinity,
  });
}