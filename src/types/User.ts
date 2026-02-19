export type UserDataT = {
    phone: string;
    fullname: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export type UserLoginDataT = {
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