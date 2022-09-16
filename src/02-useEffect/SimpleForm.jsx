import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        userName: 'Miguel',
        email: 'miguel@gamil.com'
    })

    const {userName, email} = formState

    const onInputChange = ({target}) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }



    useEffect(() => {
        // console.log('first')
    }, [])
    
    useEffect(() => {
        // console.log('formState')
    }, [formState])
    
    useEffect(() => {
        // console.log('email')
    }, [email])

    

  return (
    <>
     <h1>Simple Form</h1>
     <hr />

     <input type="text" onChange={onInputChange} className="form-control" placeholder="userName" value={userName} name="userName" />
     <input type="email" onChange={onInputChange} className="form-control mt-2" placeholder="miguel@gmail.com" value={email} name="email" />

     
     {
         userName == 'Miguel2' && <Message />
     }
     
    </>
  )
}
