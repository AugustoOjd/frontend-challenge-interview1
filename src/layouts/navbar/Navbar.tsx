import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/router";


function Navbar() {
    const router = useRouter();
  return (
    <div className={'z-99 position: sticky top-0 bg-purple-900 h-12 lg:h-14 w-full flex justify-center items-center'}>
        <div className='basis-2/4 flex justify-evenly'>
            <button className={`text-lg text-pink-500 hover:border-b-2 hover:text-cyan-100 ${router.pathname == '/AppPage' ? 'border-b-2' : 'none'}`}>
                <Link href={'/AppPage'}>
                    Home
                </Link>
            </button>
            <button className={`text-lg text-pink-500 hover:border-b-2 hover:text-cyan-100 ${router.pathname == '/BrandPage' ? 'border-b-2' : 'none'}`} >
                <Link href={'/BrandPage'}>
                    Brands
                </Link>
            </button>
        </div>

        <div className='text-cyan-100 flex justify-end basis-1/4'>
            <button className='bg-pink-700 hover:bg-pink-500 px-2 py-1 rounded-md'>
                <Link href={'/LoginPage'}>
                    Login
                </Link>
            </button>
        </div>
    </div>
  )
}

export default Navbar