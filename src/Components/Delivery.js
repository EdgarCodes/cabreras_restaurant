import React from 'react';

import Map from "./Map";

//Temp images
import grubhub_logo from "../Images/GrubHub_logo.png";
import doordash_logo from "../Images/doordash_logo.jpg";

export default function Delivery() {
    return (
        <div className = "Delivery">
            {/* <div className="fb-page" 
            data-href="https://www.facebook.com/pg/CabrerasMexicanRestaurant/photos/?ref=page_internal"
            data-width="500" 
            data-height= "650"                	
            data-tabs = "timeline"
            data-hide-cover="false"
            data-show-facepile="false"/>  */}
            
            <div className = "Delivery-info">
                <div className = "Delivery-info-container">
                    <div className = "Delivery-info-title">
                        <h2>Delivery? Carryout?</h2>
                        <h1> No Problem!</h1>
                    </div>

                    <div className= "Delivery-info-carryout">
                        <h3><i className="fas fa-phone"/> TEL: (270) 843-4145</h3>
                        <h3><i className="fas fa-map-marker-alt"/> 2225 Russellville Rd, Bowling Green, KY 42101</h3>
                        <h3><i className="far fa-clock"/> Mon-Thur: 11AM-10PM</h3>
                        <h3><i className="far fa-clock"/> Fri-Sat: 11AM-10:30PM</h3>
                        <h3><i className="far fa-clock"/> Sun: 11AM- 9:30PM</h3>
                    </div>

                    <div className = "Delivery-info-options">
                        <a className = "Delivery-button"
                        rel="noopener noreferrer"
                        target= "_blank"
                        href= "https://www.doordash.com/store/cabrera-s-mexican-bar-and-grill-bowling-green-520828/en-US"
                        ><img src = {doordash_logo} alt = "Doordash"/></a>
                        <a className = "Delivery-button"
                        rel="noopener noreferrer"
                        target= "_blank"
                        href = "https://www.grubhub.com/restaurant/cabreras-mexican-bar-and-grill-2225-russellville-road-bowling-green/1636981"
                        ><img src = {grubhub_logo} alt = "Grubhub"/></a>
                    </div>
                </div>
            </div>
            <Map/>
        </div>
    )
}
