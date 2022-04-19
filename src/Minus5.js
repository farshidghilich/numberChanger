import React, { useState } from 'react'

const Minus5 = ({ number, setNumber }) => {
  const [state, setState] = useState(0)

  return (
    <div>
      <p>{state}</p>
      <button
        onClick={() => {
          setState(number)
          setNumber((last) => last - 5)
        }}
      >
        -5
      </button>
    </div>
  )
}

export default Minus5
