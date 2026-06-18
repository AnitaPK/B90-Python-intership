import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterCounter from './components/CharacterCounter'
import ProductQuantity from './components/ProductQuantity'
import ColorPicker from './components/ColorPicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CharacterCounter />
    <hr />
    <ProductQuantity />
    <hr /> 
    <ColorPicker />
    </>
  )
}

export default App
