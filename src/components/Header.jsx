import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';


const Header = () => {

    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/home')
    }

    const GoToProfile = () =>{
        window.location.href=`/profile?uid=${auth.currentUser.uid}`
    }

    const onSignout = () => {
        auth.signOut().then(()=>{
            navigate('/')
        })
    }

    const goToGrants = () => { 
        navigate('/grantlist')
    }

    return (
        <div className='flex flex-col items-center justify-center pb-10 px-2 w-full'>
            <div className='pb-3'>
                <span className='text-white text-6xl tracking-widest font-inconsolata capitalize'>SKYNECT</span>
            </div>
            <div>
                <table>
                    <tr>
                        <td>
                            <button className="text-xl font-bold text-white bg-black py-2 px-4 rounded-md" onClick={goToGrants}>Grants</button>
                        </td>
                        <td>
                            <button className="text-xl font-bold text-white bg-black py-2 px-4 rounded-md" onClick={goToHomePage}>Skynectors</button>
                        </td>
                        <td>
                            <button className="text-xl font-bold text-white bg-black py-2 px-4 rounded-md" onClick={GoToProfile}>My Profile</button>
                        </td>
                        <td>
                            <button className="text-xl font-bold text-white bg-black py-2 px-4 rounded-md" onClick={onSignout}>Sign Out</button>
                        </td>
                    </tr>
                </table>
                
            </div>
        </div>
    )
}

export default Header
