import {createContext, useContext,useEffect,useState  } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";
import{auth} from "../firebase"

const UserContext = createContext()
export const ContexAuthProvider= ({children})=>{
    const [user, setUser]= useState({})

    const crearUsuario = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loguearUsuario = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

    }
    const salirUSuario=()=>{
        return signOut(auth)
    }

    useEffect(() => {
      const desmontarUsuario = onAuthStateChanged(auth,(usuarioActual)=>{setUser(usuarioActual)})
    
      return () => {
        desmontarUsuario()
      }
    }, [])
    


return(
    <UserContext.Provider value={{crearUsuario,loguearUsuario,salirUSuario,user}}>
        {children}
    </UserContext.Provider>
)
}

export const autenticacionUsuario=()=>{
    return useContext(UserContext)
}
export default ContexAuthProvider

