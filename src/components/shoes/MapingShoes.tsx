import React, { useEffect, useState } from 'react'
import { apiShoes } from '../../api/apiShoes'
import axios from 'axios'
import ShoeCard from './ShoeCard'

function MapingShoes() {

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
    <>
        {
            isLoading
            ?
            <p>
            ...loading
            </p>
            :
            data.map((s:any)=> 
                <ShoeCard 
                    key={s.id}
                    id={s.id} 
                    name={s.name} 
                    price={s.price} 
                    img={s.thumbnail} 
                    
                    />)
        }

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