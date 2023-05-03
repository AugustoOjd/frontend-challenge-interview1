import React from 'react'

interface Props {
    children: React.ReactNode
}

function BodyHome({children}:Props) {
  return (
    <>
      <div className='flex w-full h-100 md:h-128 px-4 sm:px-8 md:px-20 py-8 justify-center bg-indigo-300 overflow-y-hidden'>
        {children}
    </div>
    </>

  )
}

export default BodyHome