import React from "react";
import { Link } from "react-router-dom";
import {  BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Coin from "../pages/coin"

const Item = ({ symbol, name, price, image, market_cap_change_percentage_24h, id }) => {
    
    return(
        
        <article className="coin-item" id="coin-item-container" key={id}>
            <div className="img-coin">
                <img src={image}></img>
            </div>
            <div className="short-name-coin">
                <span>{symbol}</span>
            </div>
            <div className="name-coin">
                <span>{name}</span>
            </div>
            <div className="price-coin">
                <span><span className="currency-symbol">$ </span>{price}</span>
            </div>
            <div className="percentage-change-coin">
                <span style={{color: market_cap_change_percentage_24h < 0 ? "#ff3a3a" : "#60c460"}} >{market_cap_change_percentage_24h} %</span>
            </div>
        </article>

    )
}

export default Item;