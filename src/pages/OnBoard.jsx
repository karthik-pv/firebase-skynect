import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const OnBoard = () => {
    return (
        <div className='bg-white text-black m-20 p-5'>
            <span className='text-2xl tracking-widest font-extrabold font-robo'>On Boarding</span>
            <form className='flex flex-col gap-5'>
                <div className='font-robo flex flex-col'>
                    <label for='name'>Name</label>
                    <input type='text' id='name' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' />
                </div>
                <div className='font-robo flex flex-col'>
                    <label for='email'>Email</label>
                    <input type='email' id='email' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' />
                </div>
                <div className='font-robo flex flex-col'>
                    <label for='phone'>Phone</label>
                    <div className='border border-black flex'>
                        <select>
                            <option defaultChecked>+91</option>
                        </select>
                        <input type='tel' id='phone' pattern="[789][0-9]{9}" className='text-black outline-none py-1 px-2 w-full tracking-widest' />
                    </div>
                </div>
                <div className='font-robo flex flex-col'>
                    <label for='password'>Password</label>
                    <input type='password' id='password' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' />
                </div>
                <div>
                    <button className='font-inconsolata flex items-center bg-black text-white border-2 py-1 px-8 hover:border-white hover:bg-white hover:text-black hover:underline'>
                        Next
                        <MdOutlineKeyboardArrowRight size={25} />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default OnBoard