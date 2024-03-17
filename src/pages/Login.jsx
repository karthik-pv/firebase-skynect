import React from 'react'
import Skynect from '../components/Skynect'
import { useState } from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { motion } from 'framer-motion'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import bgimg from '../assets/Clouds.jpg'

const Home = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {

        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in');
            console.log(userCredential);
            navigate('/home');
        } 
        catch (error) {
            alert(error.message)
            setError(error.message);
        }
    };
    return (
        <div className='bg-black opacity-100 text-white h-screen flex items-center pattern-hive-white/15 px-20'>
            <Skynect />
            <motion.div animate={{ x: -100 }} className='flex flex-col justify-center w-3/5'>
                <div className='bg-white text-black m-20 p-5'>
                    <span className='text-2xl tracking-widest font-inconsolata font-extrabold'>Login</span>
                    {/* <div className='font-inconsolata flex flex-col my-5'>
                        <label for='phone'>Phone</label>
                        <div className='border border-black flex'>
                            <select>
                                <option defaultChecked>+91</option>
                            </select>
                            <input type='tel' id='phone' pattern="[789][0-9]{9}" className='text-black outline-none py-1 px-2 w-full tracking-widest' />
                        </div>
                    </div> */}
                    <div className='font-inconsolata flex flex-col my-5'>
                    <label htmlFor='email'>Email</label>
                        <div className='border border-black flex'>
                            {/* <select>
                                <option defaultValue="">Select Country Code</option>
                                <option>+91</option>
                            </select> */}
                            <input type='email' id='email' value={email} className='text-black outline-none py-1 px-2 w-full tracking-widest' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className='font-inconsolata flex flex-col'>
                        <label for='password'>Password</label>
                        <input type='password' id='password' value={password} className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='my-5'>
                        <button className='font-inconsolata flex items-center bg-black text-white border-2 py-1 px-8' onClick={handleLogin}>
                            Sign in
                            <MdOutlineKeyboardArrowRight size={25} />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Home