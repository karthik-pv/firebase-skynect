import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db, auth } from '../firebase';
import Header from '../components/Header';
import StartupDetailTile from "../components/StartupDetailTile";

const Home = () => {
  const currentUser = auth.currentUser;
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchPrefix, setSearchPrefix] = useState('');

  useEffect(() => {
    filterDataByPrefix(searchPrefix);
  }, [searchPrefix]);

  const setPrefixandSearch = (prefix) => {
    setSearchPrefix(prefix);
    filterDataByPrefix(prefix);
  }

  const filterDataByPrefix = async (prefix) => {
    const collectionRef = collection(db, 'skynect');

    const nameQuery = query(
      collectionRef,
      where('name', '>=', prefix),
      where('name', '<', prefix + '\uf8ff')
    );

    const startUpQuery = query(
      collectionRef,
      where('startupName', '>=', prefix),
      where('startupName', '<', prefix + '\uf8ff')
    );

    try {
      const nameQuerySnapshot = await getDocs(nameQuery);
      const startUpQuerySnapshot = await getDocs(startUpQuery);

      const nameData = nameQuerySnapshot.docs.map(doc => doc.data());
      const startupData = startUpQuerySnapshot.docs.map(doc => doc.data());

      const filteredData = [...nameData, ...startupData];

      const uniqueDocuments = filteredData.filter((doc, index, self) =>
        index === self.findIndex((d) => d.id === doc.id)
      );

      setDocuments(uniqueDocuments);
      setLoading(false);
    } catch (error) {
      console.error('Error getting documents: ', error);
    }
  }

  return (
    <div className="bg-black min-h-screen flex flex-col items-center px-4 py-8">
      <Header />
      <div className="mt-8 w-full max-w-lg">
        <input
          type="text"
          value={searchPrefix}
          onChange={(e) => setPrefixandSearch(e.target.value)}
          placeholder="Search Skynect Users"
          className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
        />
      </div>
      <div className="mt-8 w-full max-w-lg">
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          <ul className="w-full">
            {documents.map((doc) => (
              currentUser.uid !== doc.id && (
                <li key={doc.id} className="mb-4">
                  <StartupDetailTile userObj={doc} />
                </li>
              )
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;
