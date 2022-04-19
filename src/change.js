import React, { useState } from 'react'

const Change = ({ number, setNumber }) => {
  const [state, setState] = useState({
    '+5': 0,
    '+10': 0,
    '-5': 0,
    '-10': 0,
  })
  return (
    <>
      {Object.keys(state).map((item, index) => (
        <div key={index}>
          <button
            onClick={() => {
              setState((last) => {
                const temp = { ...last }
                temp[item] = parseInt(number)
                return temp
              })
              setNumber((prev) => prev + parseInt(item))
            }}
          >
            {item}
          </button>
          <p>{state[item]}</p>
        </div>
      ))}
    </>
  )
}

export default Change
