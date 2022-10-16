import React from "react";

const Item = ({ symbol, name, current_price, image, market_cap_change_percentage_24h, id }) => {
    
    return(
        
        <article className="coin-item" id="coin-item-container" key={name}>
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
                <span><span className="currency-symbol">$ </span>{current_price}</span>
            </div>
            <div className="percentage-change-coin">
                <span style={{color: market_cap_change_percentage_24h < 0 ? "#ff3a3a" : "#60c460"}} >{market_cap_change_percentage_24h} %</span>
            </div>
        </article>

    )
}

export default Item;