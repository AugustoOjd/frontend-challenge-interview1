import { createContext, useEffect, useReducer } from "react"
import { AuthState, authReducer } from "./authReducer"
import Cookies from "js-cookie"
import { apiAuth } from "../api/apiShoes"
import { PathString } from "react-hook-form"
import { useRouter } from "next/router"

interface IAuthContext {
    user:   any
    login:  (userName: string, password: PathString)=> void
    logOut: () => void
    status: 'cheking' | 'authenticated' | 'not-authenticated'
    error: boolean
}

const authInitialState: AuthState = {
    status: 'cheking',
    user: null,
    error: false
}

export const AuthContext = createContext({} as IAuthContext)

export const AuthProvider = ({children}:any)=>{

    const [ state, dispatch] = useReducer(authReducer, authInitialState)
    const router = useRouter()

    const checkAuth = () =>{
        const user = Cookies.get('xtoken')
        if(!user){
            return dispatch({ type: 'notAuthenticated'})
        }else{
            dispatch({ type: 'logIn', payload: user as any})
            router.push('/AdminPage')
            return
        }

    }
    
    // useEffect(() => {
    //     const auth = checkAuth()
    //     return auth
    // }, [])
    
    const login = async (userName: string, password:string)=>{
        try {
            const log = await apiAuth.post('/', {userName, password})
            const {user, xtoken} = log.data.payload
            if(!log) throw dispatch({type: 'error', payload: true})
            
            if(!xtoken){
                dispatch({ type: 'notAuthenticated'})
            }

            Cookies.set('xtoken', xtoken, {expires: 1})
            dispatch({type: 'logIn', payload: user})
            router.push('/AdminPage')
            
        } catch (error) {
            console.log(error)
        }
    }


    const logOut = ()=>{
        dispatch({type: 'logout'})
        Cookies.remove('xtoken')
        router.push('/AppPage')
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            login,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext