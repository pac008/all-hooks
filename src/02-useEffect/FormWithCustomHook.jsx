import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"
import { Message } from "./Message"

export const CustomHookForm = () => {

    const { formState, onInputChange, onResetForm} = useForm({
            userName: '',
            email: '',
            password: '',
        })


    const {userName,
        email,
        password} = formState



  return (
    <>
     <h1>Custom Hook Form</h1>
     <hr />
     <input type="text" onChange={onInputChange} className="form-control" placeholder="userName" value={userName} name="userName" />
     <input type="email" onChange={onInputChange} className="form-control mt-2" placeholder="miguel@gmail.com" value={email} name="email" />
     <input type="password" onChange={onInputChange} className="form-control" placeholder="password" value={password} name="password" />

     <button className="btn btn-primary mt-2" onClick={onResetForm} >
         Reset
     </button>
    
    </>
  )
}
