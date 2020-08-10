import React from 'react';

import Paragraph from "../Paragraph";
import Review from "../Review";
import Video from "../Video";
import Delivery from "../Delivery";



export default function Homepage() {
    return (
        <div className = "Homepage">
            <div className = "Landing">
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
            </div>

            
            <div className = "About">
                <div className = "About-intro">
                    <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Paragraph>
                    <Video/>
                </div>
            </div>

            <div className = "Reviews">
                <Review/>
            </div>
            
            <Delivery/>
            
        </div>
    )
}
