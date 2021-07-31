// import react from 'react'
import '../styles/footer.css'

function GetLink({fileName}){
    const links = {
        "discord" : "https://discord.gg/MdtbBnVK9Y",
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
                <GetLink fileName="discord"/>
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
            <div className="copyright">
                <footer>©️ Pinpoint Simulations 2021</footer>
            </div>
        </section>
        
    )
}


export default Footer;
