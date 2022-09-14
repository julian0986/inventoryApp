import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>login</h1>
        <form>
            <input type="email" name="email" id="email" placeholder='Ingrese email' />
            <input type="password" name="password" id="password" placeholder='Ingrese password' />
            <button type="submit">Ingresar</button>
        </form>
    </div>
  )
}

export default Login