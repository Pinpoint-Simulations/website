import Navbar from '../components/utils/Navbar'

function PageNotFound(){
    const styles = {
        
        backgroundColor: "lightgrey", 
        fontSize: "4rem",
        color: "red",
        
        textAlign: "center"
    }
    const big = {
        backgroundColor: "lightgrey", 
        fontSize: "4rem",
        color: "white",
        position: "relative",
        
        textAlign: "center",
        height: "100vh", 
        width: "100vw", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
    
    return (
        <div >
            <Navbar />
            <div className="big" style={big}>
            <div style={styles}> 404. Did you arrive at the wrong plane?
            </div>
            </div>
            
        </div>

    )
}

export default PageNotFound;