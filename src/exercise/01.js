// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const initialCountState = {
  count: 0,
}

const userIncrementedCount = step => {
  return {
    type: 'userIncrementedCount',
    payload: step,
  }
}

const countReducer = (state, action) => {
  switch (action.type) {
    case 'userIncrementedCount':
      return {...state, count: state.count + action.payload}
    default:
      return state
  }
}

function Counter({step = 1}) {
  const [store, dispatch] = React.useReducer(countReducer, initialCountState)

  const increment = () => dispatch(userIncrementedCount(step))
  return <button onClick={increment}>{store.count}</button>
}

function App() {
  return <Counter />
}

export default App
