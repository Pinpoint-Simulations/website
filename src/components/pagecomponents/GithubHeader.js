import '../styles/githubheader.css'

function LinkButton({label, url}){
    return (
        <a href={url} target="__blank"><div className="linkbtn">{label}</div></a>
    )
}

function GithubHeader(){
    return (
        <section className="header">
            <h1 className="title">GITHUB</h1>
            <div className="flexcontainer">
                <div className="text">Contribute to our Github repository with <span>pull requests.</span></div>
                <div className="linkbuttons">
                    <LinkButton label="Contribute" url="https://github.com/Pinpoint-Simulations/PPS777/blob/master/.github/Contributing.md" />
                    <LinkButton label="Repository" url="https://github.com/Pinpoint-Simulations/PPS777"/>
                    <LinkButton label="Pull Requests" url="https://github.com/Pinpoint-Simulations/PPS777/pulls"  />
                </div>
            </div>
            <div class="learnmoresection">
                <div className="learnmoretext">Learn More</div>
                {/* <svg class="downarrow" id="Layer_1" dataName="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.46 17.6"><defs style={{fill:"none", stroke:"rgb(250, 250, 250)", strokeMiterlimit: 10, strokeWidth:"4px"}}> </defs><path class="cls-1" d="M556,436l17.94,13.49a4.73,4.73,0,0,0,4.33,0L595,436" transform="translate(-554.8 -434.4)"></path></svg> */}
                <a href="#pullrequests">
                <svg className="downarrow" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.46 17.6"><defs><style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;stroke:rgb(250, 250, 250);stroke-miterlimit:10;stroke-width:4px;}" }} /></defs><path className="cls-1" d="M556,436l17.94,13.49a4.73,4.73,0,0,0,4.33,0L595,436" transform="translate(-554.8 -434.4)" /></svg>
                </a>
                
            </div>
        </section>
    )
    
}



export default GithubHeader;