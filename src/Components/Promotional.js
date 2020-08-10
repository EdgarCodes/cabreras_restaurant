import React from 'react';

//Images
import taco_image from "../Gallery/authentic-taco-cabreras.jpg";
import burrito_image from "../Gallery/burrito-cabreras.jpg";
import enchilada_image from "../Gallery/enchilada-cabreras.jpg";

export default function Promotional() {
    const gallery = [
        {
            name: "Authentic Mexican Street Tacos", 
            image: taco_image,
            desc: "Corn tortilla filled with your choice of meat topped with onions and cilantro. Enjoy it with a side of Chile verde and Lime",
            price: "$2.99 Per Taco"
        },
        {
            name: "Burrito California",
            image: burrito_image,
            desc: "A flour tortilla filled with lettuce, Mexican rice, beans, and your choice of meat! All topped with delicious cheese.",
            price: "$7.99"
        },
        {
            name: "Enchiladas Ala Mexicana",
            image: enchilada_image,
            desc: "A traditional Mexican dish that includes rice, beans, and 2 Enchiladas topped with a mild Mexican tomato sauce.",
            price: "$8.99"
        }
    ]

    return (
        <div className= "Promotional">
            <div className = "Promotional-items">
                <div className = "Promotional-gallery-container">
                    <div className = "Promotional-gallery">
                        <img src = {gallery[0].image} alt= {gallery[0].name}/>
                    </div>

                    <div className = "Promotional-description">
                        <h1>{gallery[0].name}</h1>
                        <p>{gallery[0].desc}</p>
                        <p>{gallery[0].price}</p>
                    </div>
                </div>

                <div className = "Promotional-gallery-container">
                    <div className = "Promotional-gallery">
                        <img src = {gallery[1].image} alt= {gallery[1].name}/>
                    </div>

                    <div className = "Promotional-description">
                        <h1>{gallery[1].name}</h1>
                        <p>{gallery[1].desc}</p>
                        <p>{gallery[1].price}</p>
                    </div>
                </div>

                <div className = "Promotional-gallery-container">
                    <div className = "Promotional-gallery">
                        <img src = {gallery[2].image} alt= {gallery[2].name}/>
                    </div>

                    <div className = "Promotional-description">
                        <h1>{gallery[2].name}</h1>
                        <p>{gallery[2].desc}</p>
                        <p>{gallery[2].price}</p>
                    </div>
                </div>
            </div>

            <a className = "Promotional-btn" 
            href = "https://secureservercdn.net/198.71.233.109/vza.dfc.myftpupload.com/wp-content/uploads/2020/05/cabreras-menu-2020.pdf"
            target= "_blank"
            rel="noopener noreferrer"
            >View Full Menu</a>  
        </div>
    )
}
