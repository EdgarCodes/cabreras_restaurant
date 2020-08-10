import React from 'react';
import {Link} from 'react-scroll';

import Paragraph from "../Paragraph";
import Review from "../Review";
import Video from "../Video";
import Delivery from "../Delivery";
import Promotional from "../Promotional";



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
                    
                    <Link className = "Landing-button" to ="About"
                    spy={true} smooth={true} offset={-90}>See More</Link>
                </div>            
            </div>

            
            <div className = "About">
                <div className = "About-intro">
                    <Paragraph>
                    Cabrera’s offers a diverse menu full of authentic Mexican options including local favorites and one of a kind dishes you can’t find anywhere else in the Southern Kentucky area.
                    <br/>
                    Our restaurant has a full bar including domestic and import beers on tap and the best margaritas in town. Make Cabrera’s your lunch spot for fast service or your weekend destination! 
                    </Paragraph>
                    <Video/>
                </div>
            </div>

            <div className = "Reviews">
                <Review/>
            </div>
            
            <Delivery/>
            <Promotional/>
        </div>
    )
}
