import React, { useState, useRef, useEffect } from 'react';

import ReactMapGL, {Marker, NavigationControl} from "react-map-gl";
import logo from "../Images/c_1.png";

export default function Map() {
    const TOKEN = "pk.eyJ1IjoiZWRnNjkyNzkiLCJhIjoiY2s3d2xsYTN4MDI2NDNmb3lrMmdibjIzciJ9.KCUIXTDp5nKGeUMASLB6bQ";

    const [viewport, setViewport] = useState({
        // width: "100%",
        height: "500px",
        latitude: 36.972161,
        longitude: -86.477107,
        zoom: 13.75
    });

    const container = useRef(null);
    const [mapWidth, setMapWidth] = useState("100%");

    useEffect(() =>{
        function onresize(){
            setMapWidth(container.current.getBoundingClientRect().width);
        }

        window.addEventListener("resize", onresize)
    });

    //mapbox://styles/edg69279/ckdm9epjg1dcy1inxq0tk3flx
    return (
        <div className = "Map" ref = {container}>
            <ReactMapGL {...viewport}
            width ={mapWidth} 
            mapboxApiAccessToken = {TOKEN}
            mapStyle = "mapbox://styles/mapbox/streets-v11"
            onViewportChange={nextViewport => setViewport(nextViewport)}
            scrollZoom = {false}
            >
                <div style={{position: 'absolute', right: 10, top: 10}}>
                    <NavigationControl />
                </div>
                <Marker latitude = {36.972161} longitude = {-86.477107} offsetLeft = {-90/2} offsetTop = {-95}>
                    <div className = "map-marker">
                        <div className = "map-marker-log">
                            <img src = {logo} alt= "Cabreras location"/>
                        </div>
                        <i className="fas fa-map-marker-alt"/>
                    </div>
                </Marker>
            </ReactMapGL>
            {/* <h2 className = "Map-location">2225 Russellville Rd, Bowling Green, KY 42101</h2> */}
        </div>
    )
}