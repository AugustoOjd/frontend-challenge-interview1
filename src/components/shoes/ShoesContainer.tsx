import React from 'react'
import PaginateFooter from './PaginateFooter'
import ShoeCard from './ShoeCard'
import MapingShoes from './MapingShoes'

function ShoesContainer() {
  return (
    <>
    <div className='overflow-y-scroll lg:overflow-y-visible mb-20'>
      <MapingShoes/>
    </div>
    </>
  )
}

export default ShoesContainer