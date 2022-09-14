import React,{useState} from 'react'
import { autenticacionUsuario } from '../context/ContextAuth'
import { Link, useNavigate } from 'react-router-dom'



const Login = () => {
    const [email, setEmail]= useState("") //Estado para el email
    const [password, setPassword]= useState("") //estado para el password
    const {loguearUsuario}=autenticacionUsuario()
    const navigate=useNavigate()
    const enviarFormulario = async (e)=>{ //Funcion para enviar a la base de datos 
        e.preventDefault()
        await loguearUsuario(email,password)
        navigate("/productos")
    }
  return (
    <div>
        <h1 className= "text-red-500 font-bold">login</h1>
        <form onSubmit={enviarFormulario}>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Ingrese email' /> {/* Al crear el onChange colocamos el evento el cual nos indica e.target.value que significa que lo que vamos a enviar es el valor de donde estamos ubicados */}
            <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder='Ingrese password' />
            <button type="submit">Ingresar</button>
        </form>
    </div>
  )
}

export default Login