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
                alert('no doc');
            }
        } catch (error) {
            console.error('Error getting document:', error);
        }
    };

    useEffect(() => {
        getDataFromDb();
    }, []);

    return (
        <div className="bg-black opacity-100 text-white min-h-screen flex flex-col items-center pattern-hive-white/15 px-20">
            <Header />
            <table className="bg-gray-300 text-black w-1/2 text-center items-center mb-10">
                <tbody>
                    <tr>
                        <td>
                            <h1 className="text-4xl mt-5 mb-10">Grant amount : <span className="font-bold">{grant.amt}</span></h1>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1 className="text-4xl mt-5 mb-10">Grant By : <span className="font-bold">{grant.by}</span></h1>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href={grant.link}>
                                <button className="bg-green-500 p-5 rounded-full mr-10 text-2xl">Take me To Grant Page</button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="flex flex-col">
                            <p className="text-4xl mt-5 mb-5">Eligibility :</p>
                            <p className="mb-5">{grant.eligibility}</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="flex flex-col">
                            <p className="text-4xl mt-5 mb-5">Description :</p>
                            <p className="mb-5">{grant.desc}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default GrantPage;
