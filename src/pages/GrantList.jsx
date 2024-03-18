import React, { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import GrantTile from "../components/GrantTile";
import Header from '../components/Header';

const GrantsList = () => {
  const [grants, setGrants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'grants'));
      const grantData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setGrants(grantData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center px-4 py-8">
      <Header />
      <div className="mt-8 w-full max-w-lg">
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          <ul className="w-full">
            {grants.map((grant) => (
              <li key={grant.id} className="mb-4">
                <GrantTile grantObj={grant} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default GrantsList;
