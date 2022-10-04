import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../components/item';

const Calculator = ({ post }) => {

    const [search, setSearch] = useState('');
    const [selectedCoin, setSelectedCoin] = useState('');
    const [amount, setAmount] = useState('')
    const [resultAmount, setResultAmount] = useState('');
    const [message, setMessage] = useState('')
    const [resultCurrency, setResultCurrency] = useState('')
    
    const submitSearchHandler = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
            setSearch(e.target.value)
        };
    
    const filteredCoins = post.filter(item =>     
            item.name.toLowerCase().includes(search.toLowerCase())
        );
    
    /** Calculator **/
    
      let calcNumbers = (e) => {
        e.preventDefault();
        if (amount == 0){
           setMessage('Enter a value')
        } else {
            setMessage('')
        }
        let resultAmount = amount * selectedCoin || 0;
        
        /** Handle decimal numbers **/
        const numberFormatter = Intl.NumberFormat('en-US');
        const formatted = numberFormatter.format(resultAmount);
        setResultAmount(formatted);
        
        /** Convert to another currency **/ 
        let resultCurrency = (resultAmount * 24.5);

        /** Handle decimal numbers **/
        const numberFormatterCurrency = Intl.NumberFormat('en-US');
        const formattedCurrency = numberFormatterCurrency.format(resultCurrency);
        setResultCurrency(formattedCurrency);
      };

    return(
        <section className="box-container">
            <div>
                <h1 className="main-heading"><span className="style-color-heading">Calculate</span> Value</h1>
            </div>

            <section className="calculator-container">

                <form className="flex-style-row" onSubmit={calcNumbers}>
                    <div className="field-wrap">
                        <label className="label-text">Number of units</label>
                        <input className="field-calculator-input" type="number" min="0.0" step="0.001" onChange={(e) => setAmount(e.target.value)} placeholder={message}></input>
                    </div>

                    <div className="field-wrap">
                        <label className="label-text">Select Crypto</label>
                        <select className="field-calculator-input" value={selectedCoin} onChange={(e) => setSelectedCoin(e.target.value)}>
                            <option key="select-coin">Select coin</option>
                                {post.map(option => (
                                <>
                                    <option className="select-item" key={option.name}  value={option.current_price} > 
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
                    <span>CZK {resultCurrency}</span>
                </div>

            </section>

            <section className="coins-list-container">

                <form className="search-form" onSubmit={submitSearchHandler}>
                    <input className="search-input" type="text" placeholder="Search crypto . . . (e.g. Bitcoin)" onChange={handleChange} ></input>
                </form>

                <div className="coins-items-container">
                    {filteredCoins.map((coin) => {
                            return(
                                <article key={coin.id}>
                                    <section className="coin-item" id="coin-item-container">
                                        <div className="img-coin">
                                            <img src={coin.image}></img>
                                        </div>
                                        <div className="short-name-coin">
                                            <span>{coin.symbol}</span>
                                        </div>
                                        <div className="name-coin">
                                            <span>{coin.name}</span>
                                        </div>
                                        <div className="price-coin">
                                            <span><span className="currency-symbol">$ </span>{coin.current_price}</span>
                                        </div>
                                        <div className="percentage-change-coin">
                                            <span style={{color: coin.market_cap_change_percentage_24h < 0 ? "#ff3a3a" : "#60c460"}} >{coin.market_cap_change_percentage_24h} %
                                            </span>
                                        </div>
                                        <Link to={`/${coin.id}`}>
                                        <button className="coin-detail-btn">Explore</button>
                                        </Link>
                                    </section>
                                </article>
                            )
                        })}
                </div>
            </section>
        </section>
    )
};

export default Calculator;