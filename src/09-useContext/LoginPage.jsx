import { useContext } from "react"
import { UserContext } from "./context/UserContext"

const newUser = {
      id: 123,
      name: 'Miguel'
  }
export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext)
  return (
    <>
    <h1>LoginPage</h1>
    <hr />
    <pre aria-label="pre">
      { JSON.stringify(user, null ,3)}
    </pre>

    <button className="btn btn-primary mt-2"
            onClick={() => setUser(newUser)}
    >
      Establecer Usuario
    </button>
    </>


  )
}
