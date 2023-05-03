import React from "react"

interface PropsBrand{
    brandName: string
    brandLogo: string
}

const RenderBrand = ({brandName, brandLogo}:PropsBrand)=>{
    return(
        <>
            <p className="font-semibold">Marca: {brandName.toUpperCase()}</p>
            <img src={brandLogo} className="w-16 h-10"/>
        </>
    )
}

export default RenderBrand
