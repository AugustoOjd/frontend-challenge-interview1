import React from 'react'
import FormEdit from './FormEdit'

function FormAdmin() {
  return (
    <div className='bg-white w-full md:w-2/3 h-auto shadow-md shadow-indigo-800 rounded-sm mt-10'>
        <div className='bg-cyan-200 w-full h-12 flex justify-end'>
            <button className='mr-5 bg-blue-500 p-1 rounded-md text-white'>
                Create
            </button>
        </div>

    <FormEdit/>
    </div>
  )
}

export default FormAdmin