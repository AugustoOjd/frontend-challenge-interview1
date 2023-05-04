import React, { useEffect, useState } from 'react'
import { apiShoes } from '../../api/apiShoes'
import axios from 'axios'
import ShoeCard from './ShoeCard'

function MapingShoes() {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState<any>([])
    const [errorFetch, setErrorFetch] = useState(false)

        // AGREGAR EVENT PREV Y NEXT AL ESTADO
        const [prev, setPrev] = useState(0)
        const [next, setNext] = useState(8)
    
        const prevPage = ()=>{
            if(prev == 0) return
            setNext( next - 8)
            setPrev( prev - 8)
        }
    
        const nextPage = ()=>{
            if(next >= data.length + 1) return
            setNext( next + 8)
            setPrev( prev + 8)
        }

    const fetchShoes = async ()=>{
        try {
            const shoes = await apiShoes.get('/')
            // console.log(shoes.data.payload.data)

            const allShoes = shoes.data.payload.data
            shoes && setData(allShoes)
            setIsLoading(false)
            if(allShoes.length <= 0) return <p>No hay elementos</p>

        } catch (error) {
            setErrorFetch(true)
            return <p>Error en cargar elementos</p>
        }

    }

    useEffect(() => {
        fetchShoes()
    }, [])
    
    



  return (
    <>
        <div className='w-full h-10 mb-6 flex justify-center'>
            <button onClick={()=> prevPage()} className='mr-10 bg-blue-500 hover:bg-blue-300 p-1 px-2 rounded-md text-white'>
            {`<-`} Back 
            </button>
            <button onClick={()=> nextPage()} className='ml-10 bg-blue-500 hover:bg-blue-300 p-1 px-2 rounded-md text-white'>
                Next {`->`}
            </button>
        </div>
        <div  className='w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-0 md:grid-rows-2 lg:grid-rows-2 gap-4'>
        {
            isLoading
            ?
            <p>
            ...loading
            </p>
            :
            
            data.slice(prev, next).map((s:any)=> 
                <ShoeCard 
                    key={s.id}
                    id={s.id} 
                    name={s.name}
                    description={s.description} 
                    price={s.price} 
                    img={s.thumbnail} 
                    brandId={s.brandId}
                    />)
        }
        </div>

            {/* <ShoeCard/>
            <ShoeCard/>
            <ShoeCard/>
            <ShoeCard/>
            <ShoeCard/>
            <ShoeCard/>
            <ShoeCard/>
            <ShoeCard/> */}

    
    </>
  )
}

export default MapingShoes