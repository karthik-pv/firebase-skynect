import React from "react";
import { useState , useEffect } from "react";
import { collection , getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Home = () => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const collectionRef = collection(db, 'skynect'); 
          const querySnapshot = await getDocs(collectionRef);
  
          const documentsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
  
          setDocuments(documentsData);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data from Firestore:', error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h2>Firestore Data:</h2>
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