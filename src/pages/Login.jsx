import React from 'react'
import Skynect from '../components/Skynect'
import { useState } from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {auth } from '../firebase'

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
        <div className='bg-black opacity-100 text-white min-h-screen flex items-center flex-col justify-center px-8'>
            <Skynect />
            <div className='bg-white text-black mt-8 p-5 rounded-lg mx-auto max-w-md'>
                <span className='text-2xl tracking-widest font-inconsolata font-extrabold text-center block mb-5'>Login</span>
                <div className='font-inconsolata flex flex-col mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' value={email} className='text-black border border-black outline-none py-1 px-2' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='font-inconsolata flex flex-col mb-5'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' value={password} className='text-black border border-black outline-none py-1 px-2' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='text-center'>
                    <button className='font-inconsolata flex items-center bg-black text-white border-2 py-1 px-4 rounded-lg' onClick={handleLogin}>
                        Sign in
                        <MdOutlineKeyboardArrowRight size={25} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
