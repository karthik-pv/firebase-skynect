import React from 'react';
import { useNavigate } from "react-router-dom";

const VCTile = ({VCObj}) => {

    const navigate = useNavigate();

    const gotoVC = () => {
        navigate(`/vc?id=${VCObj.id}`);
    }

    return (
        <div
            className="bg-white text-black p-4 m-4 rounded-lg shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
            onClick={gotoVC}
        >
        <div>
            <h2 className="text-xl font-bold pb-3 text-center">{VCObj.name}</h2>
            <p className="text-lg">Domain : <span className='font-semibold'>{VCObj.domain}</span></p>
        </div>
        <div className="mt-4">
            <h3 className="text-lg">Stage of Investment : <span className='font-semibold'>{VCObj.stage}</span> </h3>
        </div>
        </div>
    )
}

export default VCTile;