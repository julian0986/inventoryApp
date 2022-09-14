import { useState } from 'react'
import{Route,Routes} from "react-router-dom"
import './App.css'
import ContexAuthProvider from './context/ContextAuth'
import Login from './routes/Login'
import Productos from './routes/Productos'
import CrearProductos from './routes/CrearProductos'



function App() {
  const [count, setCount] = useState(0)

  return (
    <ContexAuthProvider>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/productos' element={<Productos/>}/>
        <Route path='/crearproductos' element={<CrearProductos/>}/>
      </Routes>
    </ContexAuthProvider>
  )
}

export default App
