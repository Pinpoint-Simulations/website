
import Navbar from '../components/utils/Navbar'
import Footer from '../components/utils/Footer'
import Boeing777Header from '../components/pagecomponents/Boeing777Header'
import AboutUs from '../components/pagecomponents/AboutUs'
import JoinDiscord from '../components/pagecomponents/JoinDiscord'


function Home(){
    
    return (
        <div>
            <Navbar />
            
            <Boeing777Header />
            <AboutUs />
            <JoinDiscord />
            <Footer />
        </div>
        
    )
}


export default Home;