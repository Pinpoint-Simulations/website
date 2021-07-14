import Navbar from "../components/utils/Navbar";
import GithubHeader from '../components/pagecomponents/GithubHeader'
import Software from "../components/pagecomponents/Software";
import PullRequests from "../components/pagecomponents/PullRequests";
import Footer from "../components/utils/Footer";
function Contributions(){
    return (
        <>
        <Navbar />
        <GithubHeader />
        <Software />
        <PullRequests />
        <Footer />
        </>
    )   
}

export default Contributions;