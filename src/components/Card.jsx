import React, { useState, useEffect } from 'react';
import '../css/dashboard.css';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Card = () => {
  const [post, setPost] = useState([])
  const postCollectionRef  =collection(db, "blogposts")

    useEffect(() => {
      const getPosts = async () => {
        const data = await getDocs(postCollectionRef)
        setPost(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }

      getPosts()
    }, [])
  return (
    <>
    <div className="card-container">
      {post.slice(0,3).map((pos) => {
      return (
        <div className="card" key={pos.id}>
        <div className="">
          <div className="">  
            <div className="">{pos.Title}</div>
            <h3 className="">By : {pos.Author}</h3>
          </div>
          <div className="inr">
            {pos.Introduction}
          </div>
          <h3 className="">{pos.Date}</h3>
          <div className=""></div>
          <div className="">
            <div className="">
              <i className=""></i>
              {pos.Location}
            </div>
            <Link to={`/posts/${pos.id}`} className="text" style={{ textDecoration: "none", color: "#ededed", fontSize: "1.1rem", marginLeft:"2%" }}>
              Read More
            </Link>
          </div>
        </div>
      </div> 
      
      )
    })}
    </div>
    
       
    </>
  );
};

export default Card;
