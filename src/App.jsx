import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import Context from './Components/Context/Context'

function App() {
  const [count, setCount] = useState(0);
const [signup, setSignup] = useState('');
const datas = {
      signup:signup,
      setSignup: setSignup
}
  return (
    <Context.Provider value={datas}>
      <Home/>
    </Context.Provider>
  )
}

export default App
