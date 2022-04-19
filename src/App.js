import React, { useState } from 'react'
import Change from './change'
import Minus10 from './Minus10'
import Minus5 from './Minus5'
import Plus10 from './Plus10'
import Plus5 from './Plus5'

const App = () => {
  const [input, setInput] = useState(0)
  const [number, setNumber] = useState(0)

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <input type='number' onChange={(e) => setInput(e.target.value)}></input>
        <button type='button' onClick={() => setNumber(+input)}>
          ADD
        </button>
        <p>{!!number && number}</p>
      </div>

      <Change number={number} setNumber={setNumber} />
    </>
  )
}

export default App
