// import react from 'react'
import '../styles/footer.css'

function GetLink({fileName}){
    const links = {
        "youtube" : "https://www.youtube.com/channel/UCLwmhnbgYkvLHCKDCsFkTJw",
        "reddit" : "https://www.reddit.com/user/MegaPackDesigns/",
        "github" : "https://github.com/Pinpoint-Simulations/"
    }
    const link = links[fileName]
    return (
        <a href={link} target="__blank">
            <img className="social" src={`/imgs/${fileName}.png`} alt={fileName}/>
            
        </a>
        
    )
}


function Footer(){
    return (
        <section id="footer" >
            <div className="socials">
                <GetLink fileName="reddit"/>
                <GetLink fileName="youtube"/>
                <GetLink fileName="github"/>
                
            </div>
            <div className="links">
                <a href="https://github.com/Pinpoint-Simulations/website" target="__blank">SOURCE CODE</a>
                <a href="/tos">TERMS OF SERVICE</a>
                <a href="/privacy">PRIVACY POLICY</a>
                <a href="mailto:admin@pinpointsimulations.net" target="__blank">EMAIL</a>
            </div>
            <div className="copyright2">
                <a href="https://vercel.com/?utm_source=Pinpoint-Simulations&utm_campaign=oss" target="__blank"><img src='/imgs/powered-by-vercel.svg' alt='powered-by-vercel.svg' width='220px'/></a>
            </div>
            <div className="copyright">
                <footer>©️ Pinpoint Simulations 2022</footer>
            </div>
            <div className="space">
                <footer></footer>
            </div>
        </section>
        
    )
}


export default Footer;
