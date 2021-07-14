import TosParagraph from '../components/pagecomponents/TosParagraph'
import '../components/styles/tos.css'
import Footer from '../components/utils/Footer'
import Navbar from '../components/utils/Navbar'

function Privacy(){
    return (
        <>
        <Navbar />
        <div className="tos_section" style={{height: "max-content"}}>
        <h1 className="tostitle">Privacy Policy</h1>
        <section className="tosparagraphs">
            <TosParagraph title="WHAT DO WE COLLECT FROM YOU?" description="We may collect, store and use data such as information about visits to this website or information about any transactions carried out between you and us on or in relation to this website or any of our services including but not limited to Pinpoint Simulations GitHub repositories or Discord."/>
            <TosParagraph title="WEBSITE VISITS" description="We may collect information about your visits to this website such as your IP address, geographical location, browser type, referral source, length of visit and number of page views. We may use this information in the administration of this website, to improve the website's usability, and for marketing purposes.
            We use cookies on this website. A cookie is a text file sent by a web server to a web browser, and stored by the browser. The text file is then sent back to the server each time the browser requests a page from the server. This enables the web server to identify and track the web browser.

            We may send a cookie which may be stored by your browser on your computer's hard drive. We may use the information we obtain from the cookie in the administration of this website, to improve the website's usability and for marketing purposes. We may also use that information to recognise your computer when you visit our website, and to personalise our website for you.

            Most browsers allow you to refuse to accept cookies. (For example, in Internet Explorer you can refuse all cookie by clicking Tools, Internet Options, Privacy, and selecting Block all cookies using the sliding selector.) This will, however, have a negative impact upon the usability of many websites"/>
            <TosParagraph title="USING YOUR DATA" description="Personal data submitted to this website will be used for the purposes specified in this privacy policy or in relevant parts of the website. In addition to the uses identified elsewhere in this privacy policy, we may use your personal information to:
            Improve your web browsing experience.
            Generalize the country you reside in, but we will never individually identify by any means.
            We will never share your data to third-party website without your expressed onsent. You reserve the right to request data from us at any point in time, but may take up to 4 months to arrive."/>
            <TosParagraph title="SECURITY AND SAFETY" description="We will take precautions to protect your data from misuse, loss or altercation of identifcation. Data over the Internet is highly risky and we cannot guarantee a the security of your data in a breach."/>
            <TosParagraph title="THIRD-PARTY CONTENT" description="This website contains links to third-party websites. Their privacy policy may not match ours."/>
            <TosParagraph title="QUESTIONS?" description="Questions? Please click the Email Us button below with your inquiry. Our team will get back to you."/>
        </section>
        </div>
        
        <Footer />
        </>
    )
}

export default Privacy;