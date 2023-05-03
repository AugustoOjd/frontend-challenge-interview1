import React, { useEffect, useState } from 'react'
import RenderBrand from './RenderBrand'
import { apiShoes } from '../../api/apiShoes';

interface Props {
    ShoeId: number,
    BrandId: number
}

function MapingBrand({ShoeId, BrandId}:Props) {

    const [isLoading, setIsLoading] = useState(true)
    const [brandData, setBrandData] = useState<any>({})

    const fetchBrand = async ()=>{
        try {
            const brands = await apiShoes.get(`/${ShoeId}/brand/${BrandId}`)
            // console.log(brands.data.payload.data)
            const RenderBrand = brands.data.payload.data

            if(!RenderBrand) return <p>Error en cargar marca</p>

            setBrandData(RenderBrand)

            if(RenderBrand) setIsLoading(false)
        } catch (error) {
            return <p>Error en cargar marca</p>
        }
    }

    useEffect(() => {
        fetchBrand()
    }, [])
    

  return (
    <>
        {
            isLoading
            ?
            <p>...loading</p>
            :
            <RenderBrand brandLogo={brandData.logo} brandName={brandData.name} />
        }
    </>
  )
}

export default MapingBrand