import React from 'react'
import { useState, useEffect } from 'react';
import '../css/dashboard.css'
import Card from './Card'
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

const Title = () => {
  const [userData, setUserData] = useState([])  ;

  useEffect(() => {
    const fetchUserData = () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userDoc = doc(db, 'users', user.uid);
          const docSnap = await getDoc(userDoc);

          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            console.log("No such document!");
          }
        } else {
          console.log("No user is logged in");
        }
      });
    };

    fetchUserData();
  }, []);
  
  return (
    <>
    <div className="box">
        <h1>Welcome Back, {userData ? userData.username : 'Name'}!!!</h1>

        <div className="posts">
            <h2 className='re'>Recent BlogPosts</h2>
            <Card />
        </div>
        <div className="button">
          <button className='vbtn'>View All BlogPosts</button>
        </div>
    </div>
    </>
  )
}

export default Title
