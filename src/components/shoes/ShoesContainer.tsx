import React from 'react'
import PaginateFooter from './PaginateFooter'
import ShoeCard from './ShoeCard'

function ShoesContainer() {
  return (
    <>
    <div className='w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-0 md:grid-rows-3 gap-4'>
      <ShoeCard/>
      <ShoeCard/>
      <ShoeCard/>
      <ShoeCard/>
      <ShoeCard/>
      <ShoeCard/>
      <ShoeCard/>
      <ShoeCard/>
      <ShoeCard/>
      <ShoeCard/>
      <ShoeCard/>
      <ShoeCard/>

    </div>
    {/* <div >
      <PaginateFooter/>
    </div> */}
    </>
  )
}

export default ShoesContainer