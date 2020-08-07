import React, { useRef, useState } from 'react';

import logo from "../Images/new-cabreras-mexican-restaurant-logo.png";

export default function Header() {
    const header = useRef(null);
    const image = useRef(null);
    const [isOffScreen, setIsOffScreen] = useState(false);


    window.onscroll = () =>{
        if(document.body.scrollTop > 170 || document.documentElement.scrollTop > 170)
        {
            setIsOffScreen(true);
        }
        else
        {
            setIsOffScreen(false);
        }
        
    };

    return (
        <div className = {isOffScreen? "Header-scroll": "Header-scroll"} ref = {header}>
            <nav className = "Header-nav">
                <a href = "google.com">Home <div className = "underline right"/> </a>
                <a href = "google.com">Menu <div className = "underline"/></a>
                <a href = "google.com">Contact Us <div className = "underline left"/></a>
            </nav>

            <div className = {isOffScreen? "Header-image-container-scroll": "Header-image-container-scroll"}
            ref = {image}>
                <img className = "Header-icon" src = {logo}/>
            </div>

            <nav className = "Header-nav">
                <a href = "google.com">Delivery <div className = "underline right"/></a>
                <a href = "google.com">Reviews <div className = "underline"/></a>
                <a href = "google.com">About <div className = "underline left"/></a>
            </nav>
        </div>
    )
}
