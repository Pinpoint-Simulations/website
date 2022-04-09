
import '../styles/navbar.css'
import React from 'react';

class Navbar extends React.Component{
    render() {
        return (
            <nav ref="navbar" id="navbar">
            <a href="/"><img id="bannerlogo" src="/imgs/banner.png" alt="banner"/></a>
            </nav>
        )   
    }
}



export default Navbar;