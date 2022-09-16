import { useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"


export const Memories = () => {
    const {counter, increment } = useCounter(10)
    const [ show, setShow ] = useState(true)

  return (
    <>
        <h1>Counter <Small counter={counter}/> </h1>]

        <button className="btn btn-primary mt-2"
                onClick={() => increment(1)}
            >
            +1
        </button>
        <button className="btn btn-primary mt-2"
                onClick={() => setShow(!show)}
            >
            show/hide { JSON.stringify( show) }
        </button>
    </>
  )
}
