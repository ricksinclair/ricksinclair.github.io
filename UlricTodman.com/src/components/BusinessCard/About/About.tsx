import AboutProps from "./AboutProps";
import "./About.css"

export default function About(props:AboutProps){
    let about = props.about ?? "A full-stack Java developer familiar with both React and Angular,  looking to contribute in a team environment full of positive people."

    return(
        <div className="body-text-container">
            <h4 className="subheading">About</h4>
            <p className="copy-text">{about}</p>
        </div>
    )
}