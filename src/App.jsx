import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Home from './pages/Home';
import Meals from './pages/Meals';
import SignUp from './pages/SignUp';

import Loading from './components/Loading';

function App(){
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('user : ', user) 
  })

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [])

  if(user === undefined){
    return <Loading />
  }else if(user === null){
    return <SignUp />
  }else{
    return(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
      </Routes>
    )
  }
}

export default App;