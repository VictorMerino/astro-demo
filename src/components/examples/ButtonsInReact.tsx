import React, { useState } from 'react'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ButtonsInReact = () => {
  const [counter, setCounter] = useState(1)

  const notify = () => {
    toast.success('Notifyyyy (with React)!')
  }
  return (
    <>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-4"
        onClick={() => setCounter(counter + 1)}
      >
        Click to count {counter}
      </button>

      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-4"
        onClick={notify}
      >
        Click to show toast
      </button>

      <ToastContainer />
    </>
  )
}
