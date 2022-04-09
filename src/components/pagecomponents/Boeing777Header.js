import '../styles/boeingheader.css'
import '../styles/discontinued.css'
import React from 'react'

class Boeing777Header extends React.Component{
    render() {
        return (
        <section className="boeingHeader">
            <section className="discontinued">
            <div className="box">
                <h3 className="titletext">DISCONTINUED</h3>
                <p className="desc">Effective Feb 5th, 2022, the project was discontinued and no further plans have been revised to re-open.</p>            
            </div>
        </section>
            
            
            <div>
                <h1>BOEING <span className="_777">777</span></h1>
            </div>
        </section>
        )
    }
    
    
    
}







export default Boeing777Header;
