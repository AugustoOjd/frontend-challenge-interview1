import React from 'react'
import PaginateFooter from './PaginateFooter'
import ShoeCard from './ShoeCard'
import MapingShoes from './MapingShoes'

function ShoesContainer() {
  return (
    <>
    <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-0 md:grid-rows-2 lg:grid-rows-2 gap-4 overflow-y-auto'>
      <MapingShoes/>
    </div>
    </>
  )
}

export default ShoesContainer