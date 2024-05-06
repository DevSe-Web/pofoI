import Router from './Router';
import './App.css';
import { useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';


function App() {

  // [Debug]Checking code - Firebase Connecting
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "1"));
        querySnapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
