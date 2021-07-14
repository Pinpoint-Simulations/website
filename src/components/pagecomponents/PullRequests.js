import '../styles/pullrequests.css'

function PullRequests(){
    return(
        <section className="pullrequests" id="pullrequests">
            <h1 className="pullrequests_title">Making Pull Requests</h1>
            <div className="pullrequests_steps">
                <div className="pullrequests_step">1. Create a fork of our Pinpoint-Sims-777 repository
                </div>
                <div className="pullrequests_step">
                2. Make a new branch on your forked repository with a simple name that represents what changes you are making for example “Fix strobe lights”
                </div>
                <div className="pullrequests_step">
                3. Download the forked repository to your system.
                </div>
                <div className="pullrequests_step">
                4. Open the file you would like to edit or add the file you would like to create to the repository folder.
                </div>
                <div className="pullrequests_step">
                5. Run build.py inside of the (TBD) folder and test that your addition/edition works in sim
                </div>
                <div className="pullrequests_step">
                6. Commit and push to the branch and make a pull request and follow the template
                </div>
            </div>
            <div className="pullrequests_desc_container">
                <p className="pullrequest_desc">Your pull request will be reviewed by members of the dev team for code issues. After 2 dev team members have checked your pull request, it will be moved to the QA testing team to check for any inside of sim issues, functionality, and realism. After it has been QA tested your pull request will be merged.</p>
            </div>
        </section>
    
    )
}


export default PullRequests;