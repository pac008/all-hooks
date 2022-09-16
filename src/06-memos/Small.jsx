import { memo } from "react"

export const Small = memo(({counter}) => {

    console.log('first')
  return (
    <small>{counter}</small>
 )
}
)