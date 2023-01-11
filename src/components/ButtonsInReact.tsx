import React, { useState } from 'react'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ButtonsInReact = () => {
  const [counter, setCounter] = useState(1)

  const notify = () => {
    toast.success('Notifyyyy!')
  }
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>
        Click to count {counter}
      </button>

      <hr />
      <button onClick={() => notify()}>Click to show toast</button>

      <ToastContainer />
    </>
  )
}
