
import '../styles/navbar.css'
import React from 'react';

class Navbar extends React.Component{
    constructor(){
        super()
        this.state = {
            menutoggle : false // test
        }
        this.toggleButton = this.toggleButton.bind(this)
    }
    

    toggleButton(){
        console.log("clicked")
        this.setState({menutoggle: !this.state.menutoggle}, () => {
            console.log(this.state.menutoggle)
        })
        
    }
    render() {
        return (
            <nav ref="navbar" id="navbar">
            <a href="/"><img id="bannerlogo" src="/imgs/banner.png" alt="banner"/></a>
            <button onClick={this.toggleButton} className="menubtn">
                <div></div>
                <div></div>
                <div></div> 
            </button>
            <div className="navlinks" id={this.state.menutoggle ? "hidden" : ""}> 
                
                <div><a href="/">HOME</a></div>

            </div>
            </nav>
        )
        
        
    }
    
    
}






export default Navbar;