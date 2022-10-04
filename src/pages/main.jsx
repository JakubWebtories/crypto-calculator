import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles.css';
import Posts from '../pages/posts';
import Calculator from "../pages/calculator";
import Coin from "../pages/coin";
import Navbar from "../components/navbar";

const baseURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

const Main = () => {

 const [post, setPost] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
        setPost(response.data)
    })
    .catch(error => console.log(error))
  }, []);

  return(      
      
       <section className="main-container">
       
          <Router>

            <Navbar />

            <Routes>              
              <Route exact={true} path="/" element={<Calculator post={post} setPost={setPost} />} />
              <Route path='/posts' element={<Posts post={post} setPost={setPost} />} />
              <Route path="/:id" element={<Coin post={post} setPost={setPost} />} /> 
            </Routes>

          </Router>          
          
          <footer>
            <div className="footer-container">
              <p className="signature"><a href="https://jakubjelinek.cz/" target="_blank" rel="noreferrer">Designed and Code by Jakub Jelínek</a> </p>
            </div>            
          </footer>

        </section>
            
  )
}

export default Main;