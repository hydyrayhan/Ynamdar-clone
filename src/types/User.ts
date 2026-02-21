export type UserDataT = {
    phone: string;
    fullname: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export type UserLoginDataT = {
  id?:string;
  phone:string;
  fullname?:string;
  address?:string | undefined;
  gender?:string;
  birthDate?:string;
  cashback?:number;
  email?:string;
  password?:string;
  token?:string;
}

export type AddressT = {
    id?:string;
    address: string;
    fullname: string;
    phone: string;
    fullAddress: string;
    description: string;
}