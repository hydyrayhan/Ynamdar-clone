import { getAllCategories } from "@/api/categories";
import { useQuery } from "@tanstack/react-query";

export const useGetAllCategories = ()=>{
  return useQuery({
    queryKey: [`categories`],
    queryFn:getAllCategories,
    staleTime: Infinity,
    // staleTime:1000*5,
    // gcTime:1000*10,
  });
}