import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    description: string,
    price: number,
    thumbnail: string,
    brandId: string | number
  };


function FormEdit() {

    const [isSending, setIsSending] = useState(false)
    const [errorCredentials, setErrorCredentials] = useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  return (
    <div>
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col mx-5 mt-5 h-full'
        >

          <label className='my-1 px-2 text-base text-purple-600 font-medium'> Name</label>
          <input 
            {...register("name", {required: true})}
            placeholder='Ingresa name' 
            className='bg-gray-100 border-gray-400 border my-2 px-2 h-10 rounded-md'
            />
        
        <label className='my-1 px-2 text-base text-purple-600 font-medium'> Description </label>
        <input 
            {...register("description", { required: true })} 
            placeholder='Ingresa description'
            className='bg-gray-100 border-gray-400 border my-2 px-2 h-10 rounded-md'
            />

        <label className='my-1 px-2 text-base text-purple-600 font-medium'> Price </label>
        <input 
            {...register("price", { required: true })} 
            placeholder='Ingresa price'
            className='bg-gray-100 border-gray-400 border my-2 px-2 h-10 rounded-md'
            />

        <label className='my-1 px-2 text-base text-purple-600 font-medium'> Image </label>
        <input 
            {...register("thumbnail", { required: true })} 
            placeholder='Ingresa image'
            className='bg-gray-100 border-gray-400 border my-2 px-2 h-10 rounded-md'
            />

        <label className='my-1 px-2 text-base text-purple-600 font-medium'> BrandId </label>
        <input 
            {...register("brandId", { required: true })} 
            placeholder='Ingresa brand'
            className='bg-gray-100 border-gray-400 border my-2 px-2 h-10 rounded-md'
            />
        <div className='h-8'>
            {errors.name 
                && 
            <span className='text-red-600 text-lg'>admin name es requerido</span>
                ||
            errors.description
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
                    Editar
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

export default FormEdit