import { use, useEffect, useState } from 'react'
import Button from './Button'
import { GrLogin } from 'react-icons/gr'
import { useTranslation } from 'react-i18next'
import Popup from './Popup'
import Input from './Input'
import { useLogin } from '../../queries/user'
import { useUserStore } from '../../store/user'

function Login() {
  const [openLogin, setOpenLogin] = useState(false)
  const [openForget, setOpenForget] = useState(false)
  const [active, setActive] = useState<"phone" | "email">("phone")
  const { t } = useTranslation()
  const [data, setData] = useState({
    phone: "",
    email: "",
    password: "",
  })
  const [dataForget, setDataForget] = useState("")
  const { mutate, isSuccess } = useLogin()
  const { token,user,setUser, setToken } = useUserStore(state => state)
  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setData({ ...data, [name]: value })
  }

  const sendData = () => {
    mutate(data)
  }

  useEffect(() => {
    setOpenLogin(false)
    setData({
      phone: "",
      email: "",
      password: "",
    })

    setUser(JSON.parse(localStorage.getItem("user") || "{}"))
    setToken(localStorage.getItem("token") || "")

  }, [isSuccess])

  const sendDataForget = () => {
    console.log(dataForget)
  }

  return (
    <div>
      <Button title={t('login')} action={() => setOpenLogin(true)}>
        <GrLogin size={20} className='text-custom-blue font-bold mr-3' />
      </Button>

      <Popup sendData={sendData} open={openLogin} setOpen={setOpenLogin} title={t('login')} active={active} setActive={setActive}>
        {
          active === "phone" ?
            <div className='my-5'>
              <Input enterFunc={sendData} regex={/^(6[0-5]|71)\d{6}$/} key={1} name="phone" label="phone" type="number" defaultValue="+993" onChange={handleData} value={data.phone} />
            </div> :
            <div className='my-5'>
              <Input enterFunc={sendData} key={2} name="email" label="email" type="email" onChange={handleData} value={data.email} />
            </div>
        }
        <div className='mb-3'>
          <Input enterFunc={sendData} name='password' label="password" type='password' onChange={handleData} value={data.password} />
        </div>

        <div className='text-end'>
          <button onClick={() => { setOpenLogin(false), setOpenForget(true) }} className="text-gray-500 mb-3">Açar sözümi unutdym</button>
        </div>
      </Popup>

      <Popup sendData={sendDataForget} title={active === 'phone' ? "Telefon belgiňizi girizň" : "Email-yňyzy giriziň"} open={openForget} setOpen={setOpenForget} active={active} setActive={setActive}>
        {
          active === "phone" ?
            <div className='my-5'>
              <Input key={3} name="phone" label="phone" type="number" defaultValue="+993" onChange={(e) => setDataForget(e.target.value)} value={dataForget} />
            </div> :
            <div className='my-5'>
              <Input key={4} name="email" label="email" type="email" onChange={(e) => setDataForget(e.target.value)} value={dataForget} />
            </div>
        }
      </Popup>
    </div>
  )
}

export default Login