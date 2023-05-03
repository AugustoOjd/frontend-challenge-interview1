import React, { useState } from 'react'
import FormEdit from './FormEdit'
import FormCreate from './FormCreate'

function FormAdmin() {

  const [changeToCreate, setchangeToCreate] = useState(true)

  return (
    <div className='bg-white w-full md:w-2/3 h-auto shadow-md shadow-indigo-800 rounded-sm mt-10'>
        <div className='bg-cyan-100 w-full h-12 flex justify-end items-center'>
            <h2 className='mr-5 font-medium'>
              {
                changeToCreate
                ?
                'Estas creando un nuevo producto'
                :
                'Estas editando un producto seleccionado'
              }
            </h2>
            {
              !changeToCreate
              &&
              <button onClick={()=> setchangeToCreate(true)} className='mr-5 bg-blue-500 h-10 p-1 rounded-md text-white'>
                Create +
              </button>
            }
        </div>

      {
        changeToCreate
        ?
        <>
          <FormCreate/>
        </>
          :
          null
      }
    </div>
  )
}

export default FormAdmin