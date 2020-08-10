import React, { useRef, useState } from 'react';
import {Link} from 'react-scroll';

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
                <Link to ="Landing"
                spy={true} smooth={true} offset={-90}>Home <div className = "underline"/></Link>

                <Link to ="About"
                spy={true} smooth={true} offset={-90}>About <div className = "underline"/></Link>

                <Link to ="Reviews"
                spy={true} smooth={true} offset={-90}>Reviews <div className = "underline"/></Link>
            </nav>

            <div className = {isOffScreen? "Header-image-container": "Header-image-container"}
            ref = {image}>
                <img className = "Header-icon" src = {logo} alt = "Cabreras Logo"/>
            </div>

            <nav className = "Header-nav">
                <Link to ="Delivery"
                spy={true} smooth={true} offset={-90}>Delivery<div className = "underline"/></Link>

                <Link to ="Promotional"
                spy={true} smooth={true} offset={-90}>Menu<div className = "underline"/></Link>

                <Link to ="Footer"
                spy={true} smooth={true} offset={0}>Contact Us<div className = "underline"/></Link>
            </nav>

            <button className = "Header-drop-down" onClick={toggleIsOpen}>
                <i className="fas fa-bars"/>
            </button>

            <div className = {getIsOpen()} ref={sideBar}>
                <Link to ="Landing"
                spy={true} smooth={true} offset={-90}><i className="fas fa-home"
                onClick = {() => {setIsOpen(false)}}    
                /> <div className = "underline"/></Link>

                <Link to ="Reviews"
                onClick = {() => {setIsOpen(false)}}    
                spy={true} smooth={true} offset={-90}>Reviews <div className = "underline"/></Link>

                <Link to ="Footer"
                onClick = {() => {setIsOpen(false)}}    
                spy={true} smooth={true} offset={0}>Contact<div className = "underline"/></Link>
                
                <Link to ="Delivery"
                onClick = {() => {setIsOpen(false)}}    
                spy={true} smooth={true} offset={-90}>Delivery<div className = "underline"/></Link>
            </div>
        </div>
    )
}
