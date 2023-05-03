import React, { useState, useEffect } from 'react'
import TableCard from './TableCard'
import { apiShoes } from '../../api/apiShoes';

function TableAdmin() {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState<any>([])
    const [errorFetch, setErrorFetch] = useState(false)

    const fetchShoes = async ()=>{
        try {
            const shoes = await apiShoes.get('/')
            console.log(shoes.data.payload.data)
            shoes && setData(shoes.data.payload.data)
            setIsLoading(false)
        } catch (error) {
            setErrorFetch(true)
        }

    }

    useEffect(() => {
        fetchShoes()
    }, [])

  return (
    <div className='bg-white w-full md:w-2/3 h-1/3 shadow-md shadow-indigo-800 rounded-sm  overflow-x-auto'>
        <table className="table-auto w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Desciption</th>
                <th>Price</th>
                <th>Image</th>
                <th>Brand</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
        {
            isLoading
            ?
            <p>...loading</p>
            :
            data.map((s:any)=> ( <TableCard key={s.id} id={s.id} name={s.name} description={s.description} price={s.price} img={s.thumbnail} brand={s.brandId} /> ))
        }
        </table>

        <div className='flex w-48 ml-10 justify-evenly'>
            <button className='bg-blue-300 p-1'>
                back
            </button>
            <button className='bg-blue-300 p-1'>
                next
            </button>
        </div>
    </div>
  )
}

export default TableAdmin