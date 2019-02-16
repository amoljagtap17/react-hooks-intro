import React, { useState } from 'react'

const AppFunc = () => {
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  const toggleColor = () => {
    setIsOn(prevIsOn => !prevIsOn)
  }

  return (
    <>
      <h2>Counter</h2>
      <button onClick={incrementCount}>I was clicked {count} times</button>

      <h2>Toggle Color</h2>
      <img
        src={
          isOn
            ? 'https://icon.now.sh/highlight/fd0'
            : 'https://icon.now.sh/highlight/aaa'
        }
        style={{
          width: '100px',
          height: '100px'
        }}
        alt="FlashLight"
        onClick={toggleColor}
      />
    </>
  )
}

export default AppFunc
