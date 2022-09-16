import { Quotes, LoadingQuote } from "./components";
import { useCounter, useFetch } from "../hooks";


export const MultipleCustomHook = () => {


    const { counter, increment } = useCounter(1)
    const { data,
            isLoading,
            hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0]
  return (
    <>
        <h1>The Breaking Bad Phrases </h1>
        <hr />

        {
            isLoading 
            ? ( <LoadingQuote />)
            : (<Quotes author={author} quote={quote} />)
        }
        

     <button className="btn btn-primary" onClick={() => increment(1)} disabled={isLoading}>
         next Phrase
     </button>

    </>
  )
}
