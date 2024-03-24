import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import Header from '../components/Header';

const GrantPage = () => {
    const location = useLocation();
    const [grant, setGrant] = useState({});

    const getDataFromDb = async () => {
        try {
            const queryParams = new URLSearchParams(location.search);
            const grantID = queryParams.get('id');
            const q = query(collection(db, 'grants'), where('id', '==', grantID));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const documentData = querySnapshot.docs[0].data();
                setGrant(documentData);
            } else {
                alert('No document found');
            }
        } catch (error) {
            console.error('Error getting document:', error);
        }
    };

    useEffect(() => {
        getDataFromDb();
    }, []);

    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center px-8 py-12">
            <Header />
            <div className="bg-gray-200 text-black rounded-lg shadow-lg p-8 max-w-3xl w-full justify-center">
                <h1 className="text-4xl font-bold mb-6">Grant Details</h1>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Grant Amount:</h2>
                    <p className="text-lg">{grant.amt}</p>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Grant By:</h2>
                    <p className="text-lg">{grant.by}</p>
                </div>
                <div className="mb-8">
                    <a href={grant.link} target='_blank'>
                        <button className="bg-green-500 py-3 px-6 rounded-full text-xl hover:bg-green-600 transition-colors duration-300">
                            Take me to Grant Page
                        </button>
                    </a>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Eligibility:</h2>
                    <p className="text-lg">{grant.eligibility}</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-2">Description:</h2>
                    <p className="text-lg">{grant.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default GrantPage;
