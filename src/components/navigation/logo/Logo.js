import React from 'react';
import Tilt from 'react-parallax-tilt';
import logo from './logo.png';

function Logo() {
    return(
        <Tilt className="Tilt br-3 shadow-3" style={{ height: 60, width: 60, backgroundColor: "#ff70a6"}} >
            <div className="Tilt-inner flex justify-center"> 
                <img className="" src={logo}  alt='logo'/>
            </div>
        </Tilt>
    ); 
}

export default Logo;