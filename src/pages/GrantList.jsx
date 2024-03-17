import React, { useState, useEffect } from "react";
import { QuerySnapshot, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import GrantTile from "../components/GrantTile";
import Header from "../components/Header";

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
      setLoading(false);
    }
  };

  return (
    <div className="bg-black opacity-100 text-white min-h-screen flex flex-col align-top items-center pattern-hive-white/15 px-20">
      <Header/>
      <div>
        <h1 className="text-4xl font-bold mb-10 justify-center text-center">Grants</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="w-full flex justify-center">
            <ul className="w-full">
              {grants.map((grant) => (
                <li className="flex justify-center" key={grant.id}>
                  <GrantTile 
                    grantObj={grant}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default GrantsList;
