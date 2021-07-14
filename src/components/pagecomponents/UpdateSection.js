import '../styles/updates.css'
import airplane from '../../imgs/airplaneTopShot.jpg'

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
                title="FUSELAGE SNEAK PEEK"
                description="Here’s the latest look at the rework for our fuselage. Our rework will consist of a revamped fuselage, wings, and rescaling of the marvelous GE90-115B engines, stay tuned!"
                image={airplane}
            />
            
        </section>
    )
}

export default UpdateSection;