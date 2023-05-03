import React, { FC, useState } from 'react'
import MapingBrand from './MapingBrand'

// function ShoeCard() {
//   return (
//     <button className='bg-white rounded-md shadow-pink-300 shadow-sm hover:shadow-lg hover:shadow-pink-300'>
//         <div className='flex flex-col items-center w-full h-full'>
//             <div className='w-full h-2/3 bg-slate-500 justify-center items-center rounded-t-md'>
//                 <img 
//                 src='https://images.lululemon.com/is/image/lululemon/blissfeel2_ece_minkberry_mar23' 
//                 className='w-full h-full object-cover rounded-t-md'
//                 />
//             </div>
//             <div>
//                 <p>Snikes talon</p>
//             </div>
//             <div>
//                 <p>price: 293</p>
//             </div>
//             <div>
//                 <p>
//                     envio gratis
//                 </p>
//             </div>
//         </div>
//     </button>
//   )
// }

interface Props {
    id?: number,
    description: string,
    name: string,
    price: number
    img: string
    brandId: number
}


const ShoeCard: FC<Props> = ({id, name, description, price, img, brandId}) => {

    const [showModal, setShowModal] = useState(false)

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
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-row h-60">
                        <div className='h-full w-1/2 flex flex-col justify-evenly'>
                            <h3 className="text-lg font-bold leading-6 text-purple-600">{name.toUpperCase()}</h3>
                            <p className='text-base text-purple-900"'>detalles: {description}</p>
                            <p className='text-green-500 font-semibold'>Precio: $ {price}</p>
                            {/* <p>{brandId}</p> */}
                            <MapingBrand ShoeId={id!} BrandId={brandId}/>
                        </div>
                        <div className='bg-red-100 h-full w-1/2 flex justify-center items-center'>
                            <img src={img} className='object-fit w-full h-full' />
                        </div>


                      </div>
                      
                      {/* Botton cancel */}
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
        
        <button onClick={()=> setShowModal(true)} className='bg-white rounded-md shadow-pink-300 shadow-sm hover:shadow-lg hover:shadow-pink-300'>
            <div className='flex flex-col items-center w-full h-full'>
                <div className='w-full h-2/3 bg-slate-500 justify-center items-center rounded-t-md'>
                    <img 
                    src={img} 
                    className='w-full h-full object-fit rounded-t-md'
                    />
                </div>
                <div>
                    <p className='text-lg text-purple-600 font-bold'>{name.toLocaleUpperCase()}</p>
                </div>
                <div>
                    <p className='text-green-500 font-semibold'>$ {price}</p>
                </div>
                <div>
                    <p className='text-green-600 font-bold'>
                        envio gratis !
                    </p>
                </div>
            </div>
        </button>
    </>

  )
}

export default ShoeCard