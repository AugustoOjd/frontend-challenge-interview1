import React, { useState } from 'react'


import { useForm, SubmitHandler } from "react-hook-form";
import { apiShoes } from '../../api/apiShoes';

type Inputs = {
    name: string,
    description: string,
    price: number,
    thumbnail: string,
    brandId: string | number
  };

function FormCreate() {

    const [isSending, setIsSending] = useState(false)
    const [errorDatos, setErrorDatos] = useState(false)
    const [sended, setSended] = useState(false)

    
    const createNewShoe = async (name: string, description: string, price: number, thumbnail: string)=>{
        try {
            setIsSending(true)
            const create = await apiShoes.post('/', {name, description, price, thumbnail}, {withCredentials: true})

            if(create) setIsSending(false)
            setSended(true)
            return alert('shoe creado')
        } catch (error) {
            console.log(error)
            setErrorDatos(true)
            setIsSending(false)
        }
        finally{
            setSended(false)
        }
        
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
    // cambiar la data por los datos enviados
    const onSubmit: SubmitHandler<Inputs> = data => createNewShoe(data.name, data.description, data.price, data.thumbnail).finally(()=> reset({...data}))



  return (
    <div>
    <form 
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col mx-5 mt-5 h-full'
    >

      <label className='my-1 px-2 text-base text-blue-600 font-medium'> Name</label>
      <input 
        {...register("name", {required: true})}
        placeholder='Ingresa name' 
        className='bg-gray-100 border-gray-400 border my-2 px-2 h-10 rounded-md'
        />
    
    <label className='my-1 px-2 text-base text-blue-600 font-medium'> Description </label>
    <input 
        {...register("description", { required: true })} 
        placeholder='Ingresa description'
        className='bg-gray-100 border-gray-400 border my-2 px-2 h-10 rounded-md'
        />

    <label className='my-1 px-2 text-base text-blue-600 font-medium'> Price </label>
    <input 
        {...register("price", { required: true })} 
        placeholder='Ingresa price'
        className='bg-gray-100 border-gray-400 border my-2 px-2 h-10 rounded-md'
        />

    <label className='my-1 px-2 text-base text-blue-600 font-medium'> Image </label>
    <input 
        {...register("thumbnail", { required: true })} 
        placeholder='Ingresa image'
        className='bg-gray-100 border-gray-400 border my-2 px-2 h-10 rounded-md'
        />
    <div className='h-8'>
        {
        errors
            &&
        <span className='text-red-600 text-lg'>todos los campos son requeridos</span>
        }
    </div>

        {
            isSending
            ?
            <button disabled className='bg-blue-300 hove:bg-purple-100 h-8 rounded-md mt-7'>
                ...creando
            </button>
            :
            <button type="submit" className='bg-blue-600 text-white hove:bg-purple-300 h-8 rounded-md mt-7'>
                Crear
            </button>
        }

    <div className='h-8'>
        {
            errorDatos
            &&
            <span className='text-red-600 text-lg'>Error en datos enviados</span>
        }
        
    </div>

    </form>
</div>
  )
}

export default FormCreate