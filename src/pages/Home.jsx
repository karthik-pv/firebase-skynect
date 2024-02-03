import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

const Home = () => {
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
                    <button className='font-inconsolata flex items-center bg-black text-white border-2 py-1 px-8 hover:bg-white hover:text-black'>
                        Get On Board
                        <MdOutlineKeyboardArrowRight size={25} />
                    </button>
                </div>
            </div>
            <div className='flex flex-col justify-center w-1/2'>
                <div className='bg-white text-black m-20 p-5'>
                    <span className='text-2xl tracking-widest font-inconsolata font-extrabold'>Login</span>
                    <div className='font-inconsolata flex flex-col my-5'>
                        <label for='phone'>Phone</label>
                        <div className='border border-black flex'>
                            <select>
                                <option defaultChecked>+91</option>
                                <option>+1</option>
                                <option>+600</option>
                            </select>
                            <input type='tel' id='phone' pattern="[789][0-9]{9}" className='text-black outline-none py-1 px-2 w-full tracking-widest' />
                        </div>
                    </div>
                    <div className='font-inconsolata flex flex-col'>
                        <label for='password'>Password</label>
                        <input type='password' id='password' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' />
                    </div>
                    <div className='my-5'>
                        <button className='font-inconsolata flex items-center bg-black text-white border-2 py-1 px-8'>
                            Sign in
                            <MdOutlineKeyboardArrowRight size={25} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home