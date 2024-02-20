import React, { useState } from 'react'
import Skynect from '../components/Skynect'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { motion } from 'framer-motion'

const OnBoard = () => {

    const [stage, setStage] = useState(0)
    const [isStartup, setIsStartup] = useState(false)

    return (
        <div className='bg-black opacity-100 text-white h-screen flex items-center justify-center pattern-hive-white/15 px-20'>
            {
                stage === 0 &&
                <>
                    <Skynect />
                    <motion.div animate={{ x: -100 }} className='flex flex-col justify-center w-1/2'>
                        <div className='bg-white text-black m-10 p-5'>
                            <span className='text-2xl tracking-widest font-extrabold font-inconsolata'>On Boarding</span>
                            <form className='flex flex-col gap-5'>
                                <div className='font-inconsolata flex flex-col'>
                                    <label for='name'>Name</label>
                                    <input type='text' id='name' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' />
                                </div>
                                <div className='font-inconsolata flex flex-col'>
                                    <label for='email'>Email</label>
                                    <input type='email' id='email' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' />
                                </div>
                                <div className='font-inconsolata flex flex-col'>
                                    <label for='phone'>Phone</label>
                                    <div className='border border-black flex'>
                                        <select>
                                            <option defaultChecked>+91</option>
                                        </select>
                                        <input type='tel' id='phone' pattern="[789][0-9]{9}" className='text-black outline-none py-1 px-2 w-full tracking-widest' />
                                    </div>
                                </div>
                                <div className='font-inconsolata flex flex-col'>
                                    <label for='password'>Password</label>
                                    <input type='password' id='password' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' />
                                </div>
                                <div>
                                    <button className='font-inconsolata flex items-center bg-black text-white py-1 px-8 hover:underline' onClick={(e) => {
                                        e.preventDefault()
                                        setStage(1)
                                    }}>
                                        Next
                                        <MdOutlineKeyboardArrowRight size={25} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </>
            }
            {
                stage === 1 &&
                <motion.div animate={{ x: -20 }} className='bg-white text-black p-5 w-1/2'>
                    <form className='font-inconsolata flex flex-col gap-5'>
                        <div>
                            <label className='font-bold'>Are you a Startup?</label>
                            <div className='flex gap-5'>
                                <div className='flex items-center'>
                                    <input className='cursor-pointer' type='radio' name='startup' value='true' onChange={() => setIsStartup(true)} />
                                    <label>Yes</label>
                                </div>
                                <div className='flex items-center'>
                                    <input className='cursor-pointer' type='radio' name='startup' value='false' onChange={() => setIsStartup(true)} />
                                    <label>No</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>If <b>Yes</b> do you manage your startup?</label>
                            <div className='flex gap-5'>
                                <div className='flex items-center'>
                                    <input className='cursor-pointer' type='radio' name='startupManage' value='true' />
                                    <label>Yes</label>
                                </div>
                                <div className='flex items-center'>
                                    <input className='cursor-pointer' type='radio' name='startupManage' value='false' />
                                    <label>No</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='font-inconsolata flex items-center bg-black text-white py-1 px-8 hover:underline' onClick={(e) => {
                                e.preventDefault()
                                setStage(2)
                            }}>
                                Next
                                <MdOutlineKeyboardArrowRight size={25} />
                            </button>
                        </div>
                    </form>
                </motion.div>
            }
            {
                stage === 2 &&
                <>
                    {
                        isStartup ? <motion.div animate={{ x: -20 }} className='bg-white text-black p-5 w-full'>
                            <form className='flex flex-col gap-5'>
                                <div className='font-inconsolata flex flex-col'>
                                    <label for='startupName' className='font-bold'>Name of the Startup</label>
                                    <input type='text' id='startupName' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' />
                                </div>
                                <div className='font-inconsolata flex flex-col'>
                                    <label for='startupOneLine' className='font-bold'>One line about the Startup</label>
                                    <input type='text' id='startupOneLine' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' />
                                </div>
                                <div className='font-inconsolata flex flex-col'>
                                    <label for='startupBrief' className='font-bold'>Brief Description about the Startup</label>
                                    <textarea id='startupBrief' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' />
                                </div>
                                <div className='font-inconsolata flex flex-col'>
                                    <label className='font-bold'>Brief Description about the Startup</label>
                                    <div className='flex gap-5'>
                                        <div className='flex items-center'>
                                            <input className='cursor-pointer' type='radio' name='startupStage' value='ideation' />
                                            <label>Ideation</label>
                                        </div>
                                        <div className='flex items-center'>
                                            <input className='cursor-pointer' type='radio' name='startupStage' value='development' />
                                            <label>Development</label>
                                        </div>
                                        <div className='flex items-center'>
                                            <input className='cursor-pointer' type='radio' name='startupStage' value='prototype' />
                                            <label>Prototype</label>
                                        </div>
                                        <div className='flex items-center'>
                                            <input className='cursor-pointer' type='radio' name='startupStage' value='functional' />
                                            <label>Functional</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className='font-inconsolata flex items-center bg-black text-white py-1 px-8 hover:underline' onClick={(e) => {
                                        e.preventDefault()
                                    }}>
                                        Done
                                        <MdOutlineKeyboardArrowRight size={25} />
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                            :
                            <motion.div animate={{ x: -20 }} className='bg-white text-black p-5 w-full'>
                                <form className='flex flex-col gap-5'>
                                    <div className='font-inconsolata flex flex-col'>
                                        <label className='font-bold'>What are you?</label>
                                        <div className='flex gap-5'>
                                            <div className='flex items-center'>
                                                <input className='cursor-pointer' type='radio' name='others' value='eventOrganizer' />
                                                <label>Event Organizer</label>
                                            </div>
                                            <div className='flex items-center'>
                                                <input className='cursor-pointer' type='radio' name='others' value='mentor' />
                                                <label>Mentor</label>
                                            </div>
                                            <div className='flex items-center'>
                                                <input className='cursor-pointer' type='radio' name='others' value='investor' />
                                                <label>Investor</label>
                                            </div>
                                            <div className='flex items-center'>
                                                <input className='cursor-pointer' type='radio' name='others' value='employee' />
                                                <label>Employee</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='font-inconsolata flex flex-col'>
                                        <label for='othersOneLine' className='font-bold'>One line about yourself</label>
                                        <input type='text' id='othersOneLine' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' />
                                    </div>
                                    <div className='font-inconsolata flex flex-col'>
                                        <label for='othersBrief' className='font-bold'>Brief Description about yourself</label>
                                        <textarea id='othersBrief' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' />
                                    </div>
                                    <div className='font-inconsolata flex flex-col'>
                                        <label for='othersFirmName' className='font-bold'>Name of the Firm(optional)</label>
                                        <input type='text' id='othersFirmName' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' />
                                    </div>
                                    <div className='font-inconsolata flex flex-col'>
                                        <label for='othersFirmBrief' className='font-bold'>Brief Description about Firm(optional)</label>
                                        <textarea id='othersFirmBrief' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' />
                                    </div>
                                    <div>
                                        <button className='font-inconsolata flex items-center bg-black text-white py-1 px-8 hover:underline' onClick={(e) => {
                                            e.preventDefault()
                                        }}>
                                            Done
                                            <MdOutlineKeyboardArrowRight size={25} />
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                    }
                </>
            }
        </div>
    )
}

export default OnBoard