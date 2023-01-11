import React, { useState } from 'react'

export const ButtonCounter = () => {
  const [counter, setCounter] = useState(1)
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>
        Click to count {counter}
      </button>
    </>
  )
}
