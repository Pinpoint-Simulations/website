import '../styles/boeingheader.css'
import '../styles/discontinued.css'
import React from 'react'

class Boeing777Header extends React.Component{
    constructor(){
        super();
        this.state = {text: "777"} // 777
        

    }
    tick() {
        function getNewText(prevText){
            var newText = ""
            if (prevText === ''){
                newText = '777'
            } else if (prevText === '7'){
                newText = '777'
            } else if (prevText === '77'){
                newText = '777'
            } else if (prevText === '777'){
                newText = '777'
            }
            return newText;
        }
        
        this.setState(state => ({
            text: getNewText(state.text)
            
        }));
        
      }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 800);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
        <section className="boeingHeader">
            <section className="discontinued">
            <div className="box">
                <h3 className="titletext">DISCONTINUED</h3>
                <p className="desc">We are sad to announce that our project has been discontinued</p>            
            </div>
        </section>
            
            
            <div>
                <h1>BOEING <span className="_777">{this.state.text }</span></h1>

            </div>
        </section>
        )
    }
    
    
    
}







export default Boeing777Header;