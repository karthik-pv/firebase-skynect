import React from 'react'
import { IoMenu } from "react-icons/io5"

const Header = () => {
    return (
        <div className='p-2 flex items-center justify-between'>
            <span className='text-2xl tracking-widest font-inconsolata capitalize'>SKYNECT</span>
            <IoMenu size={25} className='cursor-pointer' />
        </div>
    )
}

export default Header