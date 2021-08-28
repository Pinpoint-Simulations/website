import '../styles/boeingheader.css'
import React from 'react'
// function Boeing777Header(){
    
//     return (
//         <section className="boeingHeader">
//             <div>
//                 <h1>BOEING <span className="_777">777</span></h1>
//                 <p>THE WORLDS FIRST FREEWARE 777-300ER FOR MICROSOFT FLIGHT SIMULATOR</p>
//             </div>
//         </section>
        
//     )
    
    
    
// }

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
            
            
            
            <div>
                <h1>BOEING <span className="_777">{this.state.text }</span></h1>
                <p>The world's first freeware 777-300ER for Microsoft Flight Simulator</p>

            </div>
        </section>
        )
    }
    
    
    
}







export default Boeing777Header;