import React from "react";

const Item = ({symbol, name, price, image}) => {

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
                <span>${price}</span>
            </div>
        </section>
    )
}

export default Item;