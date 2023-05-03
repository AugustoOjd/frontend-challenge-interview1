import React, { useState, useEffect } from 'react'
import TableCard from './TableCard'
import { apiShoes } from '../../api/apiShoes';



function TableAdmin() {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState<any>([])
    const [errorFetch, setErrorFetch] = useState(false)



    // AGREGAR EVENT PREV Y NEXT AL ESTADO
    const [prev, setPrev] = useState(0)
    const [next, setNext] = useState(5)

    const prevPage = ()=>{
        if(prev == 0) return
        setNext( next - 5)
        setPrev( prev - 5)
    }

    const nextPage = ()=>{
        if(next >= data.length + 1) return
        setNext( next + 5)
        setPrev( prev + 5)
    }

    const fetchShoes = async ()=>{
        try {
            const shoes = await apiShoes.get('/')
            // console.log(shoes.data.payload.data)
            const allShoes = shoes.data.payload.data

            shoes && setData(allShoes.slice(prev, next))
            setIsLoading(false)
        } catch (error) {
            setErrorFetch(true)
        }

    }

    useEffect(() => {
        fetchShoes()
    }, [prev, next])

  return (
    <>

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
            isLoading && data.length < 0
            ?
            <p>...loading</p>
            :
            data.map((s:any)=> ( 
                <TableCard 
                    key={s.id} 
                    id={s.id} 
                    name={s.name} 
                    description={s.description} 
                    price={s.price} 
                    img={s.thumbnail} 
                    brand={s.brandId} 
                /> ))
        }
        </table>

        <div className='flex w-48 ml-10 justify-evenly'>
            <button onClick={()=> prevPage()} className='bg-blue-300 p-1 rounded-md font-medium'>
                {'<-'}back
            </button>
            <button onClick={()=> nextPage()} className='bg-blue-300 p-1 rounded-md font-medium'>
                next {'->'}
            </button>
        </div>
    </div>
    </>
  )
}

export default TableAdmin