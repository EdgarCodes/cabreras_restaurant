import React from 'react';
import Header from "../Header";

export default function Homepage() {
    return (
        <div className = "Homepage">
            <div className = "Landing">
                <Header/>

                <div className = "Landing-info">
                    <div className = "Landing-text">
                        <h1>Welcome To</h1>
                        <h2>Cabrera'S</h2>
                        <p>A <i>Authentic</i> Mexican Bar & Grill</p>
                        <div className = "Landing-Icons">
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-facebook-square" ></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>

                    <div className = "Landing-About">
                        <h2><i className="fas fa-map-marker-alt about-icon"></i> Bowling Green, KY</h2>
                        <h2>|</h2>
                        <h2><i className="far fa-clock about-icon"></i> Open 11AM-10PM </h2>
                        <h2>|</h2>
                        <h2><i className="fas fa-utensils about-icon"></i> Dine-In</h2>
                    </div>  

                    <button className = "Landing-button">View Our Menu!</button>
                </div>
                {/* <div className = "Landing-divider"/> */}

                <div className = "About">
                    </div>
            
            </div>
            
        </div>
    )
}
