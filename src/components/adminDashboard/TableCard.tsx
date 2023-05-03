import React, { useEffect, useState } from 'react'
import { apiShoes } from '../../api/apiShoes';
import FormEdit from './FormEdit';

interface Props {
    id?: number, 
    name: string, 
    description: string,
    price: number,
    img: string,
    brand: number,

}

function TableCard({id, name, description, price, img, brand }:Props) {

    const [showModal, setShowModal] = useState(false)
    
    const deleteById = async (id: number)=>{
        try {
            console.log(id)

            const deleteData = await apiShoes.delete(`/${id}`, {withCredentials: true})
            if(deleteData) alert('Shoe delete')
        } catch (error) {
            console.log(error)
            return
        }
    }

    return (
    <>
        {
        showModal
        ?
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Editar shoe</h3>
                        <div className="mt-2">
                            <FormEdit id={id} name={name} description={description} price={price} thumbnail={img} brandId={brand}/>
                        </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button onClick={()=> setShowModal(!showModal)} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        :
        null
    }
        <tbody className='w-full'>
          <tr>
            <td>{name}</td>
                <td >{description}</td>
            <td>{price}</td>
            
            <td>
                <img src={img} width={'30px'} height={'30px'} />
            </td>
            <td>{brand}</td>
            <td className='h-6 bg-blue-500 p-1 rounded-md text-cyan-50'>
                <button onClick={()=> {setShowModal(true)}}>
                    Edit
                </button>
            </td>
            <td className='h-6 bg-red-500 p-1 rounded-md text-cyan-50'>
                <button onClick={()=> deleteById(id!)}>
                    Delete
                </button>
            </td>
          </tr>
          
        </tbody>
    </>
  )
}

export default TableCard