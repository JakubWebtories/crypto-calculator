import React from "react";
import '../styles.css';
import Posts from '../pages/posts';
import Calculator from "./calculator";
import { useState } from 'react';
import {  BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

const Main = () => {

  const [post, setPost] = useState([])

  const navLinkStyles = ({ isActive }) => {
    return{
      color: isActive ? '#F5E43E' : '#fff',
      textDecoration: isActive ? 'underline' : 'none',
    }
  }

  return(      
      
      <section className="main-container">

        <Router>
        <div className="navigation-menu">
          <nav>
            <ul>
              <li>
                <NavLink to='/' style={navLinkStyles} >Calculator</NavLink>
              </li>
              <li>
                <NavLink to='posts' style={navLinkStyles} >List of cryptocurrencies</NavLink>
              </li>
              <li>
                1
              </li>
            </ul>
          </nav>
        </div>
          <Routes>
            <Route path="" exact element={<Calculator post={post}  setPost={setPost} />} />
            <Route path='posts' element={<Posts post={post} setPost={setPost} />} />
          </Routes>
        </Router>
        </section>
    
  )

}

export default Main;