import React, { useContext, useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { apiAuth } from '../../api/apiShoes';
import Cookies from 'js-cookie';
import AuthContext from '../../context/AuthContext';

type Inputs = {
  userName: string,
  password: string,
};

function LoginCard() {

    const [isSending, setIsSending] = useState(false)
    const [errorCredentials, setErrorCredentials] = useState(false)
    const { login, error } = useContext(AuthContext)

    const sendCrendentials = async (userName: string, password: string)=>{
        try {
            setIsSending(true)
            // console.log(userName, password)
            // const log = await apiAuth.post('/', {userName, password})
            // const {user, xtoken} = log.data.payload
            // if(!log) throw new Error("Error credentials");
            
            // Cookies.set('xtoken', xtoken, {expires: 1})
            login(userName, password)

            
            setIsSending(false)
        } catch (e) {
            // console.log(error)
            error
            setErrorCredentials(true)
            setIsSending(false)

        }
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => sendCrendentials(data.userName, data.password)

    
    

    // console.log(watch("userName")) // watch input value by passing the name of it
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    return (
    <div className=''>
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col mx-5 mt-5 h-full'
        >

          <label className='my-1 px-2 text-base text-purple-600 font-medium'> Admin name</label>
          <input 
            {...register("userName", {required: true})}
            placeholder='Ingresa Admin name' 
            className='bg-gray-100 border-gray-400 border my-2 px-2 h-10 rounded-md'
            />
        
        <label className='my-1 px-2 text-base text-purple-600 font-medium'> Admin password </label>
        <input 
            {...register("password", { required: true })} 
            placeholder='Ingresa admin password'
            className='bg-gray-100 border-gray-400 border my-2 px-2 h-10 rounded-md'
            />
            

        <div className='h-8'>
            {errors.userName 
                && 
            <span className='text-red-600 text-lg'>admin name es requerido</span>
                ||
            errors.password
                &&
            <span className='text-red-600 text-lg'>admin password</span>
            }
        </div>

            {
                isSending
                ?
                <button disabled className='bg-purple-300 hove:bg-purple-100 h-8 rounded-md mt-7'>
                    ...sending
                </button>
                :
                <button type="submit" className='bg-purple-600 text-white hove:bg-purple-300 h-8 rounded-md mt-7'>
                    Login
                </button>
            }

        <div className='h-8'>
            {
                errorCredentials
                &&
                <span className='text-red-600 text-lg'>Error credentials</span>
            }
            
        </div>

        </form>
    </div>
  )
}

export default LoginCard