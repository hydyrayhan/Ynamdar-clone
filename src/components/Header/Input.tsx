import React, { useState } from 'react'
import type { InputProp } from '../../types/Header'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

function Input(props: InputProp) {
  const [focus, setFocus] = useState(props.defaultValue || props.value || props.type==="date" ? true : false)
  const [validate, setValidate] = useState(true)
  const [visible, setVisible] = useState(false)
  const {t} = useTranslation()

  const checkValidate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.regex) setValidate(props.regex.test(e.target.value))
    if (!e.target.value) setValidate(true)
  }
  return (
    <div className='relative'>
      <label className={'absolute  px-1 transition-all text-sm rounded ' + (focus ? "-top-3 left-3 " : "top-2 left-2 ") + (validate ? "text-black bg-white" : "text-red-500 bg-red-50")} htmlFor={props.name}>{t(props.label)}</label>

      <div className={'border rounded flex items-center transition-all ' + (validate ? "border-blue-500" : "border-red-500 bg-red-50")}>
        <label htmlFor={props.name} className='ml-3'>{props.defaultValue}</label>
        <input
          onBlur={() => !props.defaultValue && !props.value && setFocus(false)}
          onFocus={() => setFocus(true)}
          className={'w-full py-2 pl-1 pr-3 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'}
          id={props.name}
          value={props.value}
          onChange={(e) => { props.onChange(e), checkValidate(e) }}
          name={props.name}
          type={props.type !== "password" ? props.type : visible ? "text" : "password"}
          autoComplete={props.type == "password" ? 'off' : "on"}
          onKeyDown={(e)=>e.key === "Enter" && props.enterFunc && props.enterFunc()}
        />

        {
          props.type === "password" &&
          <button className='mr-2 text-xl' onClick={() => setVisible(!visible)}>
            {
              visible ? <BsEye /> : <BsEyeSlash />
            }
          </button>
        }
      </div>
    </div>
  )
}

export default Input