import Link from 'next/link'
import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

function NavbarAdmin() {

    const {logOut} = useContext(AuthContext)

  return (
    <div className={'z-99 position: sticky top-0 bg-purple-900 h-12 lg:h-14 w-full flex justify-around items-center'}>
    
    <div className='text-cyan-100 flex justify-start w-1/2 ml-5'>
        <span>
            Logo
        </span>
    </div>
    
    <div className='text-cyan-100 flex w-1/2 justify-end mr-5'>
        <button onClick={()=> logOut()} className='bg-pink-700 hover:bg-pink-500 px-2 py-1 rounded-md'>
            <Link href={'/LoginPage'}>
                logout
            </Link>
        </button>
    </div>
</div>
  )
}

export default NavbarAdmin