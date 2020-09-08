import React from 'react';
import './Home.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const[post,setpost] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setpost(data))
    },[])
   
    return (
       <div>
           {
               post.map(post =><Post post={post} key={post.id}></Post>)
           }

       </div>
    );
};

export default Home;