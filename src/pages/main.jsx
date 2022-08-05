import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import {  BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import '../styles.css';
import Posts from '../pages/posts';
import Item from '../components/item'
import Calculator from "./calculator";

const baseURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

const Main = () => {

  const [post, setPost] = useState([])
  const [search, setSearch] = useState('');
  const [selectedCoin, setSelectedCoin] = useState('test');
  const [amount, setAmount] = useState(1)
  const [resultAmount, setResultAmount] = useState('');
  const [message, setMessage] = useState('')
  const [resultCurrency, setResultCurrency] = useState('')
  const [fiatCurrensies, setFiatCurrensies] = useState('')


  useEffect(() => {
      axios.get(baseURL).then((response) => {
          setPost(response.data)
      })
      .catch(error => console.log(error))
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value)
  };

  const filteredCoins = post.filter(coin =>     
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

    /* Fiat currencies */
    
  const currenciesData = [
      {
          value: 24,
          name: "CZK",
      },
      {
          value: 0.98,
          name: "EUR",
      }
  ]

    /** Calculator **/
    
  let calcNumbers = (e) => {
      e.preventDefault();
      if (amount == 0){
         setMessage('Enter a value')
      } else {
          setMessage('')
      }
      let resultAmount = amount * selectedCoin || 0;
      setResultAmount(resultAmount);
      let resultCurrency = (resultAmount * 24);
      setResultCurrency(resultCurrency);
  };

  const navLinkStyles = ({ isActive }) => {
    return{
      fontWeight: isActive ? '700' : 'normal',
      color: isActive ? '#F5E43E' : '#fff',
    }
  }

  return(      

    <section className="main-container">

      <section>
          <Router>
            <div className="navigation-menu">
              <nav>
                <ul>
                  <li>
                    <NavLink to="/" style={navLinkStyles} >Home</NavLink>
                  </li>
                  <li>
                    <NavLink to='calculator' style={navLinkStyles} >Calculator</NavLink>
                  </li>
                  <li>
                    <NavLink to='posts' style={navLinkStyles} >List of cryptocurrencies</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <Routes>
                <Route index />
                <Route path="calculator" element={<Calculator post={post}  setPost={setPost} />} />
                <Route path='posts' element={<Posts post={post} setPost={setPost} />} />
            </Routes>
          </Router>
        </section>

  <section>
  <div>
      <h1 className="main-heading"><span className="style-color-heading">CALCULATE</span> PROFIT</h1>
  </div>

  <section className="calculator-container">

      <form className="flex-style-row" onSubmit={calcNumbers}>
          <div className="field-wrap">
              <label className="label-text">Number of units</label>
              <input className="field-calculator-input" type="number" min="0.0" step="0.001" onChange={(e) => setAmount(e.target.value)} placeholder={message}></input>
          </div>

          <div className="field-wrap">
              <label className="label-text">Select Crypto</label>
              <select className="field-calculator-input" value={selectedCoin} defaultInputValue={selectedCoin} onChange={(e) => setSelectedCoin(e.target.value)}>
                          <option key="select-coin">Select coin</option>
                  {post.map(option => (
                      <>
                          <option key={option.name}  value={option.current_price} > 
                              {option.name} ${option.current_price}
                          </option>
                      </>
                      ))}
              </select>
          </div>
          <button className="submit-btn" type="submit">Calculate</button>
      </form>

      <div className="result-div">
          <div className="label-text">Result</div>
          <div className="result-amount-style">$ {resultAmount}</div>
          <span>{resultCurrency}</span>
          <select>
              {currenciesData.map(optionCurrency => (
                  <option key={optionCurrency} value={optionCurrency.value}>
                      {optionCurrency.name}
                  </option>
              ))}
          </select>
      </div>

  </section>

    <section className="coins-list-container">
          <form className="search-form">
              <input className="search-input" type="text" placeholder="Search crypto . . ." onChange={handleChange} ></input>
          </form>

          <div className="coins-items-container">
              {filteredCoins.slice(0, 20).map(coin => {
                          return(
                              <Item
                                  key={coin.id}
                                  image={coin.image}
                                  symbol={coin.symbol}
                                  name={coin.name}
                                  price={coin.current_price}
                                  market_cap_change_percentage_24h={coin.market_cap_change_percentage_24h}
                              />
                              )
                          }
                      )
                  }

          </div>
      </section>
      
      </section>
    </section>


    
  )

}

export default Main;




