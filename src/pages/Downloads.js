import '../components/styles/downloads.css'
import Footer from '../components/utils/Footer'
import Navbar from '../components/utils/Navbar';


function Downloads(){
    return (
        <>
        <Navbar />
        <section className="downloads">
        
        <h2>DOWNLOADS</h2>
        <p>Pinpoint Asphalt | Coming Soon</p>
        <img className="bannerarea" src="/imgs/pinpointasphalt.png" alt="Pinpoint Apshalt" />
        
        </section>
        <Footer />
        </>
    )
    
}

export default Downloads;