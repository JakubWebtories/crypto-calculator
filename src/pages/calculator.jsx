import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react'
import Item from '../components/item'

const baseURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

const Calculator = ({post, setPost, image}) => {    
    
    const [search, setSearch] = useState('');
    const [selectedCoin, setSelectedCoin] = useState('');
    const [amount, setAmount] = useState('')
    const [resultAmount, setResultAmount] = useState('');

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data)
            console.log(response.data)
        })
        .catch(error => console.log(error))
    }, []);
    
    const handleChange = (e) => {
            setSearch(e.target.value)
        };

    const filteredCoins = post.filter(coin =>     
            coin.name.toLowerCase().includes(search.toLowerCase())
        );
    
    /** Calculator **/

    let calcNumbers = (e) => {
        e.preventDefault();
        let resultAmount = (amount * selectedCoin)
        setResultAmount(resultAmount)
        //setResultAmount(resultAmount.toFixed(1))
      };

    return(
        <section>
            <div>
                <h1 className="main-heading"><span className="style-color-heading">CALCULATE</span> PROFIT</h1>
            </div>

            <section className="calculator-container">

                <form className="flex-style-row" onSubmit={calcNumbers}>
                    <div className="field-wrap">
                        <label className="label-text">Number of units</label>
                        <input className="field-calculator-input" type="number" min="0.0" step="0.001" onChange={(e) => setAmount(e.target.value)}></input>
                    </div>

                    <div className="field-wrap">
                        <label className="label-text">Select Crypto</label>
                        <select className="field-calculator-input" value={selectedCoin} onChange={(e) => setSelectedCoin(e.target.value)}>
                            {post.map(option => (
                                    <option key={option.name} value={option.current_price} > 
                                        <img src={option.image} alt="test"></img><span className="inner-select-style">{option.name}</span><span>${option.current_price}</span>
                                </option>
                                ))}
                        </select>
                    </div>
                    <button className="submit-btn" type="submit">Calculate</button>
                </form>

                <div className="result-div">
                    <div className="label-text">Result</div>
                    <div className="result-amount-style">$ {resultAmount}</div>
                </div>

            </section>

            <section className="coins-list-container">
                <form className="search-form">
                    <input className="search-input" type="text" placeholder="Search crypto" onChange={handleChange} ></input>
                </form>

                <div className="coins-items-container">
                    {filteredCoins.map(coin => {
                                return(
                                    <Item
                                        key={coin.id}
                                        image={coin.image}
                                        symbol={coin.symbol}
                                        name={coin.name}
                                        price={coin.current_price}
                                    />
                                    )
                                }
                            )
                        }

                </div>
            </section>
        </section>
    )
};

export default Calculator;