export type ProductCardProps = {
  id:number;
  name:string;
  definition:string;
  price:number;
  image:string;
  quantity:number;
  discount:number;
  isNew:boolean;
  amount?:number;
}