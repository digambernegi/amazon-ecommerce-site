import React from 'react'
import "./Home.css"
import homebg from "./asset/homebg.jpg"
import Product from "./Product"
import book from "./asset/book.jpg"
import {Link} from "react-router-dom" 


const Home = () => {
    return (
        <div className="home">
        <img className="home__background" src={homebg} alt="homeimage" />
        
        <div className="home__Row">
        <Product
        id="123"
        title="Success in the key"
        price={1200}
        rating={4}
        image={book}
        />

        <Product
        id="123"
        title="Success in the key"
        price={1200}
        rating={4}
        image={book}
        />
        </div>


        <div className="home__Row">
        <div className="female">
        <h3>Styles for Women | Up to 70% off</h3>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/5-min._SY116_CB666463598_.jpg
        "alt=""/>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/6-min._SY116_CB666463598_.jpg
        "alt=""/>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/8-min._SY116_CB666463598_.jpg
        "alt=""/>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/7-min._SY116_CB666463598_.jpg
        "alt=""/>
        <Link className="seemore" to="#">See more</Link>
        </div>

        <div className="female">
        <h3>Styles for Men | Up to 70% off</h3>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/1-min._SY116_CB666463598_.jpg
        "alt="clothing"/>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/2-min._SY116_CB666463598_.jpg
        "alt="bags"/>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/4-min._SY116_CB666463598_.jpg
        "alt="watches"/>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/3-min._SY116_CB666463598_.jpg
        "alt="jwellery"/>
        <Link className="seemore" to="#">See more</Link>
        </div>

        <div className="female">
        <h3>Bill payments got fast & convenient</h3>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Recharge_186x116._SY116_CB663599035_.jpg
        "alt=""/>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Electricity_186x116._SY116_CB663599035_.jpg
        "alt=""/>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/DTH_186x116._SY116_CB663599035_.jpg
        "alt=""/>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Broadband_186x116._SY116_CB663599035_.jpg
        "alt=""/>
        <Link className="seemore" to="#">See more</Link>

        </div>

        </div>
        </div>
    )
}

export default Home
