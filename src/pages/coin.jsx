import React from "react";
import { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const baseURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

const Coin = () => {

    const [single, setSingle] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setSingle(response.data)
        })
        .catch(error => console.log(error))
      }, []);

    /** Loading condition **/

    if (!single) return <div>Loading...</div>;

    const coin = single.find((coin) => coin.id === id);
    const { name, current_price, market_cap_rank, symbol, image, market_cap, high_24h, low_24h, price_change_24h, price_change_percentage_24h } = coin;

    /* Handle decimal */

    const number = market_cap   
    const numberFormatter = Intl.NumberFormat('en-US');
    const formatted = numberFormatter.format(number);

    /* Reduce numbers */

    let priceChange = price_change_24h;
    let reducePrice = priceChange.toFixed(2);

    let percentageChange = price_change_percentage_24h;
    let reducePercentage = percentageChange.toFixed(2);

    /* Remove current item */

    const removeCurrentQuery = single.filter((item) => item.id !== id)

    return(    
        <section className="page-detail-coin-container">
            
            <section className="first-row">
                <section className="left-column">
                    <div className="">
                        <Link to="/coins">
                            <button className="sub-btn">Back to list</button>
                        </Link>
                    </div>

                    <div className="coins-items-container">
                        <div className="img-coin-detail">
                            <img src={image} alt={id}></img>
                        </div>
                        <div className="info-background">
                            <span className="short-name-coin">{symbol}</span>
                            <span className="rank-coin">Rank # {market_cap_rank}</span>
                        </div>
                        <div className="coin-heading"><h1>{name}</h1></div>

                    </div>
                </section>
                
                <section className="right-column spacing-top">
                    <div className="price-column">
                        <div className="info-background">
                            <span className="sub-heading">{name} price</span>
                        </div>
                        <div className="page-detail-price-coin">
                            <span><span className="currency-symbol">$ </span>{current_price}</span>
                        </div>
                    </div>
                </section>
            </section>

            <section className="second-row">

                <section className="left-column ">
                    <div className="change-table spacing-top-25">
                        <span className="info-background">Volume</span>
                        <table>
                            <tr>
                                <td>High (24h)</td>
                                <td><span className="currency-symbol">$ </span>{high_24h}</td>
                            </tr>
                            <tr>
                                <td>Low (24h)</td>
                                <td><span className="currency-symbol">$ </span>{low_24h}</td>
                            </tr>
                            <tr>
                                <td>Change (24h)</td>
                                <td><span className="currency-symbol">$ </span><span style={{color: coin.market_cap_change_percentage_24h < 0 ? "#ff3a3a" : "#60c460"}}>{reducePrice}</span></td>
                            </tr>
                            <tr>
                                <td>Change (24h)</td>
                                <td><span className="currency-symbol">% </span><span style={{color: coin.market_cap_change_percentage_24h < 0 ? "#ff3a3a" : "#60c460"}}>{reducePercentage}</span></td>
                            </tr>
                        </table>
                    </div>
                </section>

                <section className="right-column">
                    <div className="spacing-top-25">
                        <div className="info-background">
                            <span className="sub-heading" >Market Cap</span>
                        </div>
                        <div className="page-detail-market-cap">
                            <span className="currency-symbol">$ </span>
                            <span className="market-cap" title={market_cap}>{formatted}</span>
                        </div>
                    </div>
                </section>

            </section>

            <section className="row-other">
                <div>
                    <h2 className="section-sub-heading">Other cryptocurrencies</h2>
                </div>
                <div>
                    
                  <section className="other-items-conatiner">
                        {removeCurrentQuery.slice(0,5).map(coin => (

                            <div className="other-item">
                                <div className="">
                                    <img src={coin.image}></img>
                                </div>
                                <div className="other-items-sub-heading">
                                    <span className="short-name-coin">{coin.symbol}</span>
                                    <span className="rank-coin">Rank # {coin.market_cap_rank}</span>
                                </div>
                                <div className="other-name-coin">
                                    <span>{coin.name}</span>
                                </div>
                                <Link to={`/${coin.id}`}>
                                    <button className="coin-detail-btn">Explore</button>
                                </Link>
                            </div> 
                        
                        ))}
                    </section>
                    
                </div>
            </section>

        </section>
        
    )
}

export default Coin;