import React from 'react'

interface Props {
    children: React.ReactNode
}

function BodyAdmin({children}:Props) {
  return (
    <div className='flex w-full h-150 md:h-128 px-4 py-5 justify-center bg-indigo-300'>
        {children}
    </div>
  )
}

export default BodyAdmin