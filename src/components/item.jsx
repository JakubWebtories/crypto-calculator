import React from "react";

const Item = ({symbol, name, price, image, market_cap_change_percentage_24h }) => {


    
    return(
        <section className="coin-item">
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
            <div>
                <span style={{color: market_cap_change_percentage_24h < 0 ? "#ff3a3a" : "#60c460"}} className="percentage-change-coin">{market_cap_change_percentage_24h}</span>
            </div>
        </section>
    )
}

export default Item;