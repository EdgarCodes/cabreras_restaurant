import React, { useRef, useState } from 'react';

//Images
import logo from "../Images/c_1.png";

export default function Header() {
    const header = useRef(null);
    const image = useRef(null);
    const [isOffScreen, setIsOffScreen] = useState(false);

    const [isOpen, setIsOpen] = useState(null);
    const sideBar = useRef(null);

    const toggleIsOpen = () =>{
        if(isOpen != null){setIsOpen(!isOpen);}
        else{setIsOpen(true)}
    }

    const getIsOpen = () =>{
        if(isOpen === null)
        {
            return "close";
        }
        else if(isOpen === true)
        {
            return "Header-sidebar";
        }

        return "Header-sidebar close";
    }


    window.onscroll = () =>{
        if(document.body.scrollTop > 95 || document.documentElement.scrollTop > 95)
        {
            setIsOffScreen(true);
        }
        else
        {
            setIsOffScreen(false);
        }
        
    };

    return (
        <div className = {isOffScreen? "Header scroll": "Header"} ref = {header}>
            <nav className = "Header-nav">
                <a href = "Home">Home <div className = "underline"/> </a>
                <a href = "Menu">Menu <div className = "underline"/></a>
                <a href = "Contact">Contact Us <div className = "underline"/></a>
            </nav>

            <div className = {isOffScreen? "Header-image-container": "Header-image-container"}
            ref = {image}>
                <img className = "Header-icon" src = {logo} alt = "Cabreras Logo"/>
            </div>

            <nav className = "Header-nav">
                <a href = "Delivery">Delivery <div className = "underline"/></a>
                <a href = "Reviews">Reviews <div className = "underline"/></a>
                <a href = "About">About <div className = "underline"/></a>
            </nav>

            <button className = "Header-drop-down" onClick={toggleIsOpen}>
                <i className="fas fa-bars"/>
            </button>

            <div className = {getIsOpen()} ref={sideBar}>
                <a href = "Delivery"><i className="fas fa-home"></i><div className = "underline"/></a>
                <a href = "Reviews">Menu<div className = "underline"/></a>
                <a href = "About">Contact<div className = "underline"/></a>
                <a href = "Delivery">Delivery <div className = "underline"/></a>
            </div>
        </div>
    )
}
