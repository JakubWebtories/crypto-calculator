import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import Item from '../components/item'

const baseURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
// const baseURL = ""

const Posts = ({post, setPost}) => {
    
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data)
            console.log(response.data)
        })
        .catch(error => console.log(error))
    }, []);
    
    const submitSearchHandler = (e) => {
        e.preventDefault()
       /* console.log('click')
        setSearch()*/        
    }
    
    const searchInput = (e) => {
        setSearch()
        setSearch(e.target.value)
        console.log(e.target.value)
    }
    
    const filteredCoins = post.filter(coin => 
            coin.name.toLowerCase().includes(search.toLowerCase())
        )
    

    return(
        <section>
            <div>
                <h1 className="main-heading"><span className="style-color-heading">Crypto</span>currencies</h1>
            </div>

            <section className="coins-list-container">
                <form className="search-form" onSubmit={submitSearchHandler}>
                    <input className="search-input" type="text" placeholder="Search crypto . . ." onChange={searchInput} ></input>
                    <button className="search-button hover-element">Search</button>
                </form>
                <div className="coins-items-container">
                {filteredCoins.slice().map(coin => {
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
                <div className="btn-container">
                    <button className="btn-more hover-element" /*onClick={loadMore}*/>+</button>
                </div>
            </section>
        </section>
    )
};

export default Posts;