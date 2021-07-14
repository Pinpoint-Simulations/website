import Navbar from '../components/utils/Navbar'

function PageNotFound(){
    const styles = {
        
        backgroundColor: "black", 
        fontSize: "4rem",
        color: "lightgrey",
        fontFamily: "brandon",

        textAlign: "center"
    }
    const big = {
        backgroundColor: "black", 
        fontSize: "4rem",
        color: "gray",
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
            <div style={styles}> 404! DID YOU ARRIVE AT THE WRONG PLANE?
            </div>
            </div>
            
        </div>

    )
}

export default PageNotFound;