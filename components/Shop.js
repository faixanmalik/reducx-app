import React from 'react'
import { useDispatch } from 'react-redux'

const Shop = () => {
  const dispatch = useDispatch()

  const increment = () =>{
    dispatch({
      type: 'increment',
      payload: 100
    })
  }
  const decrement = () => {
    dispatch({
      type: 'decrement',
      payload: 100
    })
  }


  return (
    <div className='justify-center flex'>
        <button onClick={decrement} className='bg-blue-800 text-white rounded-lg p-4 mx-4'>-</button>
            <h1 className='mt-4'>Update Balance</h1>
        <button onClick={increment} className='bg-blue-800 text-white rounded-lg p-4 mx-4'>+</button>
    </div>
  )
}

export default Shop