import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link, Outlet, useLocation } from 'react-router-dom'

const Home = () => {

    const location = useLocation()

    return (
        <div className='bg-black opacity-100 text-white h-screen flex pattern-hive-white/15'>
            <div className='w-1/2 flex flex-col justify-center pl-60 gap-10'>
                <div className='flex flex-col'>
                    <span className='text-6xl tracking-widest font-inconsolata capitalize'>SKYNECT</span>
                    <div>
                        <TypeAnimation
                            sequence={[
                                'Be Limitless.',
                                1000,
                                'Be Connected.',
                                1000,
                                'Be Skynect.',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', fontFamily: 'Inconsolata', fontWeight: 'lighter' }}
                            repeat={Infinity}
                        />
                    </div>
                </div>
                <div>
                    {
                        location.pathname === '/onboard' ?
                            <Link to='/'>
                                <button className='font-inconsolata flex items-center bg-black text-white border-2 py-1 px-8 hover:bg-white hover:text-black'>
                                    Login
                                    <MdOutlineKeyboardArrowRight size={25} />
                                </button>
                            </Link>
                            :
                            <Link to='/onboard'>
                                <button className='font-inconsolata flex items-center bg-black text-white border-2 py-1 px-8 hover:bg-white hover:text-black'>
                                    Get On Board
                                    <MdOutlineKeyboardArrowRight size={25} />
                                </button>
                            </Link>
                    }
                </div>
            </div>
            <div className='flex flex-col justify-center w-1/2'>
                <Outlet />
            </div>
        </div>
    )
}

export default Home