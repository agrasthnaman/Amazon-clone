import React from "react";
import "./Home.css";
import Product from "./Product";
// import Slider from "./Slider";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2020/img/DVD/XCM_Manual_1200x445_1217661_1130674_IDx231217661_uk_dvd_digital_readiness_primevideo_banner_2_44c2b7ea_2f3b_4de2_ab69_9968a9e8112a_jpg_LOWER_QL85_.jpg"          alt=""
        />
        {/* <Slider /> */}

        <div className="home__row">
          <Product
            id='1'
            title="Whirlpool 292 L 2 Star Frost-Free Double Door Refrigerator (NEOFRESH GD PRM 305 2S, Crystal Black, Glass Door)" 
            price={28233.99}
            image='https://images-na.ssl-images-amazon.com/images/I/81afSsSwiXL._SL1500_.jpg'
            rating={4}  
          />
          <Product
            id='2' 
            title="New Apple iPhone 11 (64GB) - Black" 
            price={51999.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg'
            rating={4}  
          />
        </div>

        <div className="home__row">
          <Product
            id='3'
            title="Echo Dot (3rd Gen), Certified Refurbished, Black – Improved smart speaker with Alexa – Like new, backed with 1-year warranty" 
            price={2999.99} 
            image='https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg'
            rating={4}  
          />
          <Product
            id='4'
            title="Philips HD6975/00 25 Litre Digital Oven Toaster Grill, Grey, 25 liter" 
            price={6799.00} 
            image='https://images-na.ssl-images-amazon.com/images/I/618O0ywM1SL._SL1000_.jpg'
            rating={5}  
          />
          <Product
            id='5'
            title="PHILIPS HL7707/00 750W Mixer Grinder with Jars, Black" 
            price={6449.99} 
            image='https://images-na.ssl-images-amazon.com/images/I/51tpIbLm24L._SL1000_.jpg'
            rating={4}  
          />
        </div>

        <div className="home__row">
          <Product
            id='6'
            title="2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 2TB) - Silver (5th Generation)" 
            price={198900.00} 
            image='https://images-na.ssl-images-amazon.com/images/I/815KnP2wjDS._SL1500_.jpg'
            rating={5}  
          />
        </div>

        <div className="home__row">
          <Product
            id="7"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="8"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="9"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;