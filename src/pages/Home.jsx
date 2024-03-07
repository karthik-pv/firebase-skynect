import React from "react";
import { useState , useEffect } from "react";
import { collection , getDocs ,query , where , or} from 'firebase/firestore';
import { db } from '../firebase';

const Home = () => {

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
      <div>
        <h2>Firestore Data:</h2>
        <input
          type="text"
          value={searchPrefix}
          onChange={(e) => setPrefixandSearch(e.target.value)}
          placeholder="Search Prefix"
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {documents.map((doc) => (
              <li key={doc.id}>
                <pre>{JSON.stringify(doc, null, 2)}</pre>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Home;