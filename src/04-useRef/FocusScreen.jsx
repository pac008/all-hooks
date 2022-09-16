import React, { useRef } from 'react'

export const FocusScreen = () => {
    const inputRef = useRef()

    const onFocusInput = () => {
        inputRef.current.select();
    }
  return (
      <>
        <h1>FocusScreen</h1>
        <hr />
        <input type="text" 
                placeholder='ingrese nombre' 
                className='form-control'
                ref={inputRef}
                />

        <button className='btn btn-primary mt-2'
                onClick={onFocusInput}
        >
            Set Focus
        </button>
      </>
    
  )
}
