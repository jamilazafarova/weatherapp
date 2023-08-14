import React from 'react'
import './input.css'
function Input({getInput, getDatas}) {
  return (
    <form onSubmit={(e) => getDatas(e)}>
        <input onInput={e => getInput(e)} type="text" />
    </form>
  )
}

export default Input