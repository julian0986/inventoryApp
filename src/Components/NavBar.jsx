import React from 'react'
import {autenticacionUsuario} from "../context/ContextAuth"
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate=useNavigate()
    const {salirUSuario}=autenticacionUsuario()
    const salir = async()=>{
        await salirUSuario()
        navigate("/")
    }
  return (
    <div className='bordebarra flex justify-end pr-2'>
            <button onClick={salir} className='bg-lime-500 p-2 '>Salir</button>
        
    </div>
  )
}

export default NavBar