import React, { useState } from 'react'
import FormEdit from './FormEdit'
import FormCreate from './FormCreate'

function FormAdmin() {

  return (
    <div className='bg-white w-full md:w-2/3 h-auto shadow-md shadow-indigo-800 rounded-sm mt-10'>
        <div className='bg-cyan-100 w-full h-12 flex justify-end items-center'>
            <h2 className='mr-5 font-medium'>
                Estas creando un nuevo producto
            </h2>
        </div>
          <FormCreate/>
    </div>
  )
}

export default FormAdmin