import React from "react";
import '../styles.css';
import Posts from '../pages/posts';
import Calculator from "../pages/calculator";
import Coin from "../pages/coin";
import axios from 'axios';
import { useState, useEffect } from 'react';
import {  BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

const baseURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

const Main = () => {

  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
        setPost(response.data)
    })
    .catch(error => console.log(error))
  }, []);

  /*let getCoin = post.find(test => test.id == "solana")
  console.log(getCoin) */

  const navLinkStyles = ({ isActive }) => {
    return{
      color: isActive ? '#F5E43E' : '#fff',
    }
  }

  return(      
      
      <section className="main-container">
        
        <Router>

          <header>
            <div className="navigation-menu-conatiner">
              <nav className="navigation-menu">
                <ul>
                  <li>
                    <NavLink to='/crypto-calculator' style={navLinkStyles} className="menu-item" >Calculator</NavLink>
                  </li>
                  <li>
                    <NavLink to='/posts' style={navLinkStyles} >List of cryptocurrencies</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <Routes>
              <Route exact={true} path="/crypto-calculator" element={<Calculator post={post} setPost={setPost} />} />
              <Route path='/posts' element={<Posts post={post} setPost={setPost} />} />
              <Route path="/coin/:id" element={<Coin post={post} setPost={setPost} />} /> 
          </Routes>

          </Router>

          <footer>
            <div className="footer-container">
              <p className="signature"><a href="https://jakubjelinek.cz/" target="_blank">Designed and Code by Jakub Jelínek</a> </p>
            </div>            
          </footer>

        </section>
            
  )
}

export default Main;