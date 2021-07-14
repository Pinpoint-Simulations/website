import TosParagraph from "../components/pagecomponents/TosParagraph";
import '../components/styles/tos.css'
import Footer from "../components/utils/Footer";
import Navbar from "../components/utils/Navbar";
function Tos(){
    return (
        <>
        <Navbar />
        <div className="tos_section">
        <h1 className="tostitle">Terms of Service</h1>
        <section className="tosparagraphs">
            <TosParagraph title="AGE REQUIREMENT" description="To protect the privacy of younger people it is very important that we implement an age restriction of 13 and over to join Pinpoint Simulations services such as this website and Discord or any other communication platform, other platforms may be subject to their own conditions. By using Pinpoint Simulations services, you agree that you are 13 years of age and the minimum age of digital consent in your country. Pinpoint Simulations reserve the right to remove users under the age of 13 and minimum age of digital consent in any given case from communication platforms."/>
            <TosParagraph title="COMPLAINTS" description="In the event of a user should feel the need to make a complaint against another member, with regards to violating our Terms of Service or Communication Platform Rules (Discord) , they can contact the Moderation team through Discord or by emailing admin@pinpointsimulations.net with your inquiry. When writing the report please state the members name and what they are violating. All complaints will be dealt with as professionally and as quickly as possible."/>
            <TosParagraph title="LEGAL" description="Users wishing to contribute must own a legal copy of Microsoft Flight Simulator (MSFS2020 or MSFS)"/>
            <TosParagraph title="QUESTIONS?" description="Questions? Please click the Email Us button below with your inquiry. Our team will get back to you."/>
        </section>
        </div>
        
        <Footer />
        </>
    )
}

export default Tos;