
import Navbar from '../components/utils/Navbar'
import Footer from '../components/utils/Footer'
import Boeing777Header from '../components/pagecomponents/Boeing777Header'
import AboutUs from '../components/pagecomponents/AboutUs'


function Home(){
    
    return (
        <div>
            <Navbar />
            <Boeing777Header />
            <AboutUs />
            <Footer />
        </div>
        
    )
}


export default Home;