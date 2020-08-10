import React from 'react';
import ContactForm from "./ContactFom";

export default function Footer() {
    return (
        <div className = "Footer">
            <div className = "Footer-top">
                <ContactForm/>
            </div>
            <div className = "Footer-bottom">
                <div  className = "Footer-copyright">@Copyright Cabreras Mexican Bar & Grill, 2020</div>

                <div className = "Footer-Icons">
                    <i className="fab fa-twitter"/>
                    <i className="fab fa-facebook-square"/>
                    <i className="fab fa-instagram"/>
                </div>
            </div>
        </div>
    )
}
