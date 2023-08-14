import React from 'react'

function Temprature({temp}) {
  return (
    <div>{temp && Math.round(temp-273, 0)}</div>
  )
}

export default Temprature