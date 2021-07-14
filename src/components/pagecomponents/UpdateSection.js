import '../styles/updates.css'
import airplane from '../../imgs/workinprogress.png'

function LatesUpdate({title, description, image}){
    return (
        <div className="latest-update">
            <h3>{title}</h3>
            <img src={image} alt="Latest Update"/>
            <p className="description">{description}</p>
            </div>
    )
}

function UpdateSection(){
    return (
        <section className="updates">
            <h1>UPDATES</h1>
            <h2>LATEST UPDATE</h2>
            <LatesUpdate 
                title="COCKPIT RENDER"
                description="Here is a render of the cockpit. Keep in mind, this is a work in progress."
                image={airplane}
            />
            
        </section>
    )
}

export default UpdateSection;