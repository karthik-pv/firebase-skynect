import React, { useState } from 'react';
import Skynect from '../components/Skynect';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import { db, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

const OnBoard = () => {

  const navigate = useNavigate();

  const [stage,setStage] = useState(0);

  const [formDetails, setFormDetails] = useState({
    isStartup: false,
    name: '',
    email: '',
    password: '',
    phoneCode: '',
    phone: '',
    startupName: '',
    startupStage: '',
    startupOneLine: '',
    startupBrief: '',
    others: '',
    othersOneLine: '',
    othersBrief: '',
    othersFirmName: '',
    othersFirmBrief: '',
  });

  const onDone = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, formDetails.email, formDetails.password);
      console.log(user);
      const usersCollectionRef = collection(db, 'skynect');

      if (formDetails.isStartup) {
        await addDoc(usersCollectionRef, {
          name: formDetails.name,
          email: formDetails.email,
          phoneCode: formDetails.phoneCode,
          phone: formDetails.phone,
          password: formDetails.password,
          startupName: formDetails.startupName,
          startupOneLine: formDetails.startupOneLine,
          startupBrief: formDetails.startupBrief,
          startupStage: formDetails.startupStage,
        });
      } else {
        await addDoc(usersCollectionRef, {
          name: formDetails.name,
          email: formDetails.email,
          phoneCode: formDetails.phoneCode,
          phone: formDetails.phone,
          password: formDetails.password,
          others: formDetails.others,
          othersOneLine: formDetails.othersOneLine,
          othersBrief: formDetails.othersBrief,
          othersFirmName: formDetails.othersFirmName,
          othersFirmBrief: formDetails.othersFirmBrief,
        });
      }
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      phoneCode: e.target.phoneCode.value,
      phone: e.target.phone.value
    }));
    setStage(1);
  };

  const handleIsStartup = (e) => {
    e.preventDefault();
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      isStartup: e.target[0].checked
    }));
    setStage(2);
  };

  const handleDetailsStartup = async (e) => {
    e.preventDefault();
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      startupName: e.target.startupName.value,
      startupOneLine: e.target.startupOneLine.value,
      startupStage: e.target.startupStage.value,
      startupBrief: e.target.startupBrief.value
    }));
    setStage(3);
  };

    const handleDetails = async (e) => {
        e.preventDefault();
        setFormDetails((prevDetails) => ({
            ...prevDetails,
            others: e.target.others.value,
            othersOneLine: e.target.othersOneLine.value,
            othersBrief: e.target.othersBrief.value,
            othersFirmName: e.target.othersFirmName.value,
            othersFirmBrief: e.target.othersFirmBrief.value
        }));
        setStage(3);
    };

    return (
        <div className='bg-black opacity-100 text-white h-screen flex items-center justify-center pattern-hive-white/15 px-20'>
            {
                stage === 0 &&
                <>
                    <Skynect />
                    <motion.div animate={{ x: -100 }} className='flex flex-col justify-center w-1/2'>
                        <div className='bg-white text-black m-10 p-5'>
                            <span className='text-2xl tracking-widest font-extrabold font-inconsolata'>On Boarding</span>
                            <form className='flex flex-col gap-5' onSubmit={handleRegister}>
                                <div className='font-inconsolata flex flex-col'>
                                    <label htmlFor='name'>Name</label>
                                    <input type='text' name='name' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' required />
                                </div>
                                <div className='font-inconsolata flex flex-col'>
                                    <label htmlFor='email'>Email</label>
                                    <input type='email' name='email' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' required />
                                </div>
                                <div className='font-inconsolata flex flex-col'>
                                    <label htmlFor='phone'>Phone</label>
                                    <div className='border border-black flex'>
                                        <select name='phoneCode'>
                                            <option defaultChecked>+91</option>
                                        </select>
                                        <input type='tel' name='phone' pattern="[789][0-9]{9}" className='text-black outline-none py-1 px-2 w-full tracking-widest' required />
                                    </div>
                                </div>
                                <div className='font-inconsolata flex flex-col'>
                                    <label htmlFor='password'>Password</label>
                                    <input type='password' name='password' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' required />
                                </div>
                                <div>
                                    <button className='font-inconsolata flex items-center bg-black text-white py-1 px-8 hover:underline'>
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
                    <form className='font-inconsolata flex flex-col gap-5' onSubmit={handleIsStartup}>
                        <div>
                            <label className='font-bold'>Are you a Startup? (do you manage your startup)</label>
                            <div className='flex gap-5'>
                                <div className='flex items-center'>
                                    <input className='cursor-pointer' type='radio' name='startup' value='true' required />
                                    <label>Yes</label>
                                </div>
                                <div className='flex items-center'>
                                    <input className='cursor-pointer' type='radio' name='startup' value='false' required />
                                    <label>No</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='font-inconsolata flex items-center bg-black text-white py-1 px-8 hover:underline'>
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
                        formDetails.isStartup ? <motion.div animate={{ x: -20 }} className='bg-white text-black p-5 w-full'>
                            <form className='flex flex-col gap-5' onSubmit={handleDetailsStartup}>
                                <div className='font-inconsolata flex flex-col'>
                                    <label htmlFor='startupName' className='font-bold'>Name of the Startup</label>
                                    <input type='text' name='startupName' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' required />
                                </div>
                                <div className='font-inconsolata flex flex-col'>
                                    <label htmlFor='startupOneLine' className='font-bold'>One line about the Startup</label>
                                    <input type='text' name='startupOneLine' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' required />
                                </div>
                                <div className='font-inconsolata flex flex-col'>
                                    <label htmlFor='startupBrief' className='font-bold'>Brief Description about the Startup</label>
                                    <textarea name='startupBrief' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' required />
                                </div>
                                <div className='font-inconsolata flex flex-col'>
                                    <label className='font-bold'>Brief Description about the Startup</label>
                                    <div className='flex gap-5'>
                                        <div className='flex items-center'>
                                            <input className='cursor-pointer' type='radio' name='startupStage' value='ideation' required />
                                            <label>Ideation</label>
                                        </div>
                                        <div className='flex items-center'>
                                            <input className='cursor-pointer' type='radio' name='startupStage' value='development' required />
                                            <label>Development</label>
                                        </div>
                                        <div className='flex items-center'>
                                            <input className='cursor-pointer' type='radio' name='startupStage' value='prototype' required />
                                            <label>Prototype</label>
                                        </div>
                                        <div className='flex items-center'>
                                            <input className='cursor-pointer' type='radio' name='startupStage' value='functional' required />
                                            <label>Functional</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className='font-inconsolata flex items-center bg-black text-white py-1 px-8 hover:underline'>
                                        Done
                                        <MdOutlineKeyboardArrowRight size={25} />
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                            :
                            <motion.div animate={{ x: -20 }} className='bg-white text-black p-5 w-full'>
                                <form className='flex flex-col gap-5' onSubmit={handleDetails}>
                                    <div className='font-inconsolata flex flex-col'>
                                        <label className='font-bold'>What are you?</label>
                                        <div className='flex gap-5'>
                                            <div className='flex items-center'>
                                                <input className='cursor-pointer' type='radio' name='others' value='eventOrganizer' required />
                                                <label>Event Organizer</label>
                                            </div>
                                            <div className='flex items-center'>
                                                <input className='cursor-pointer' type='radio' name='others' value='mentor' required />
                                                <label>Mentor</label>
                                            </div>
                                            <div className='flex items-center'>
                                                <input className='cursor-pointer' type='radio' name='others' value='investor' required />
                                                <label>Investor</label>
                                            </div>
                                            <div className='flex items-center'>
                                                <input className='cursor-pointer' type='radio' name='others' value='employee' required />
                                                <label>Employee</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='font-inconsolata flex flex-col'>
                                        <label htmlFor='othersOneLine' className='font-bold'>One line about yourself</label>
                                        <input type='text' name='othersOneLine' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' required />
                                    </div>
                                    <div className='font-inconsolata flex flex-col'>
                                        <label htmlFor='othersBrief' className='font-bold'>Brief Description about yourself</label>
                                        <textarea name='othersBrief' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' required />
                                    </div>
                                    <div className='font-inconsolata flex flex-col'>
                                        <label htmlFor='othersFirmName' className='font-bold'>Name of the Firm(optional)</label>
                                        <input type='text' name='othersFirmName' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' />
                                    </div>
                                    <div className='font-inconsolata flex flex-col'>
                                        <label htmlFor='othersFirmBrief' className='font-bold'>Brief Description about Firm(optional)</label>
                                        <textarea name='othersFirmBrief' className='text-black border border-black outline-none py-1 px-2 w-full tracking-widest' />
                                    </div>
                                    <div>
                                        <button className='font-inconsolata flex items-center bg-black text-white py-1 px-8 hover:underline'>
                                            Done
                                            <MdOutlineKeyboardArrowRight size={25} />
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                    }
                </>
            }
            {
                stage === 3 &&
                    <>
                        <motion.div animate={{ x: -20 }} className='bg-white text-black p-5 w-full'>
                            <button className='font-inconsolata flex items-center bg-black text-white py-1 px-8 hover:underline' onClick={onDone}>
                                Let's Fly Now
                                <MdOutlineKeyboardArrowRight size={25} />
                            </button>
                        </motion.div>
                    </>
            }
        </div>
    )
}

export default OnBoard