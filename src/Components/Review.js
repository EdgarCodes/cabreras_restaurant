import React, { useState, useEffect } from 'react';

import google_logo from "../Images/google-reviews-logo.png";
import yelp_logo from "../Images/yelp_logo.png";

export default function Review() {
    const reviews = 
    [
        {name: "- Edgar G.", review: `"Great restaurant. Great Food!"`},
        {name: "- Estevan S.", review: `Real Authentic Mexican Food. Will come again.`},
        {name: "- Antony G.", review: "Friendly staff, family friendly. Will come again!"}
    ];

    const [current, setCurrent] = useState(0);

    const changeReview = (next) =>{

        let newCurrent = current + next;   
        if(newCurrent < 0){newCurrent = reviews.length-1;}
        else if(newCurrent === reviews.length){ newCurrent = 0;}

        setCurrent(newCurrent);
    }

    useEffect(() => {
        const moveForward = () =>{
            setCurrent(current => {
                if(current === reviews.length-1)
                {
                    return 0;
                }

                return current+1;
            });
        }

        const interval = setInterval(() => {moveForward()}, 4000);
        return () => clearInterval(interval);
    }, [reviews.length])

    return (
        <div className = "Review">
            <button className = "Review-next"
            onClick = {() => {changeReview(-1)}}
            ><i className="fas fa-chevron-left"></i></button>

            <div className = "Review-info-container">
                <div className = "Review-img-container">
                    <img src = {yelp_logo} alt = "Yelp Reviews"/>
                    <img src = {google_logo} alt = "Yelp Reviews"/>
                </div>

                <div className = "Review-content">
                    <h1>{reviews[current].review}</h1>
                    <h2>{reviews[current].name}</h2>
                </div>  
            </div>

            <button
            onClick = {() => {changeReview(1)}}
            className = "Review-next"><i className="fas fa-chevron-right"></i></button>
        </div>
    )
}
