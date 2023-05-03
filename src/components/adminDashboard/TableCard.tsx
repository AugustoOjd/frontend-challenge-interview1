import React from 'react'

interface Props {
    id?: number, 
    name: string, 
    description: string,
    price: number,
    img: string,
    brand: string | number,

    editById?:(id:number)=>void
    deleteById?:(id:number)=>void
}

function TableCard({id, name, description, price, img, brand, editById, deleteById}:Props) {
  
  
    return (
    <>
        <tbody className='w-full'>
          <tr>
            <td>{name}</td>
                <td >{description}</td>
            <td>{price}</td>
            
            <div className='w-20 overflow-x-auto'>
                <td className=''>{img}</td>
            </div>

            <td>{brand}</td>
            <td className='h-6 bg-blue-500 p-1 rounded-md text-cyan-50'>
                <button onClick={()=> console.log(id)}>
                    Edit
                </button>
            </td>
            <td className='h-6 bg-red-500 p-1 rounded-md text-cyan-50'>
                <button onClick={()=> console.log(id)}>
                    Delete
                </button>
            </td>
          </tr>
          
        </tbody>

    {/* <div className='flex flex-row w-full pt-2 justify-between px-3'>
        <div className='flex flex-1 h-9 items-center'>
            <p>Title</p>
        </div>
        <div className='flex flex-1 h-9 items-center'>
            <p>description</p>
        </div>
        <div className='flex flex-1 h-9 items-center'>
            <p>price</p>
        </div>
        <div className='flex flex-1 h-9 items-center'>
            <p>thumbnail</p>
        </div>
        <div className='flex flex-0 mr-5 h-9 bg-blue-500 p-1 rounded-md text-cyan-50'>
            <button>
                Edit
            </button>
        </div>

        <div className='flex flex-0 h-9 bg-red-500 p-1 rounded-md text-cyan-50'>
            <button>
                Delete
            </button>
        </div>
    </div>
            <div className='border-b my-1'></div> */}
    </>
  )
}

export default TableCard