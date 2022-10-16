import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ post }) => {
    
    const [search, setSearch] = useState('')
   
    const submitSearchHandler = (e) => {
        e.preventDefault()
    }
    
    const searchInput = (e) => {
        setSearch(e.target.value)
    }
    
    const filteredCoins = post.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
    )
    
    return(
        <section className="box-container">
            <div>
                <h1 className="main-heading"><span className="style-color-heading">Crypto</span>currencies</h1>
            </div>

            <section className="coins-list-container">
                <form className="search-form" onSubmit={submitSearchHandler}>
                    <input className="search-input" type="text" placeholder="Search crypto . . . (e.g. Bitcoin)" onChange={searchInput} ></input>
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

export default Posts;