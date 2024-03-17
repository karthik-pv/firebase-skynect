import React from "react";
import { useState , useEffect } from "react";
import { collection , getDocs ,query , where } from 'firebase/firestore';
import { db , auth } from '../firebase';
import Header from '../components/Header'
import StartupDetailTile from "../components/StartupDetailTile";

const Home = () => {

  const currentUser = auth.currentUser;
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchPrefix , setSearchPrefix] = useState('');

  useEffect(() => {
    filterDataByPrefix(searchPrefix);
  }, [searchPrefix]);

  const setPrefixandSearch = (prefix) => {
    setSearchPrefix(prefix);
    filterDataByPrefix(searchPrefix);
  }

  const filterDataByPrefix = async(prefix) => {

    const collectionRef = collection(db, 'skynect');

    const nameQuery = query(
      collectionRef,
        where('name', '>=', prefix),
        where('name', '<', prefix + '\uf8ff')
    )

    const startUpQuery = query(
      collectionRef,
      where('startupName', '>=', prefix),
      where('startupName', '<', prefix + '\uf8ff')
    )

    try {
      const nameQuerySnapshot = await getDocs(nameQuery);
      const startUpQuerySnapshot = await getDocs(startUpQuery);

      const nameData = nameQuerySnapshot.docs.map(doc => ({
        ...doc.data()
      }));

      const startupData = startUpQuerySnapshot.docs.map(doc => ({
        ...doc.data()
      }));

      const filteredData = [...nameData, ...startupData]; 

      const uniqueIdentifiers = new Set();

      const uniqueData = filteredData.filter(doc => {
        const identifier = doc.email + doc.password;
        if (!uniqueIdentifiers.has(identifier)) {
          uniqueIdentifiers.add(identifier);
          return true;
        }
        return false;
      });

      setDocuments(uniqueData);
      setLoading(false);

    } catch (e) {
      console.error('Error getting documents: ', e);
    }
  }
  
  return (
    <div className="bg-black opacity-100 text-white min-h-screen flex flex-col align-top items-center pattern-hive-white/15 px-20">
      <Header/>
      <input
        type="text"
        value={searchPrefix}
        onChange={(e) => setPrefixandSearch(e.target.value)}
        placeholder="Search Skynect Users"
        className="text-black mb-10 w-1/2 py-2 px-4 rounded-lg border border-gray-300 text-center"
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full flex justify-center">
          <ul className="w-full">
            {documents.map((doc) => (
             currentUser.uid !== doc.id &&
              <li className="flex justify-center" key={doc.id}>
                  <StartupDetailTile
                      userObj={doc}
                  />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
  
  export default Home;