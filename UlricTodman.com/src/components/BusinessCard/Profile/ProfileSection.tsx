import ProfileSectionProps from "./ProfileSectionProps";
import defaultImgSrc from "../../../assets/portrait.jpeg";
import MailIcon from "../../../assets/Mail.png"
import LinkedInIcon from "../../../assets/Icon/Font Awesome Free/Brands/L/linkedin.png"
import "./ProfileSection.css"

export default function ProfileSection(props:ProfileSectionProps){

    let url = props.url ?? "https://www.ulrictodman.com"
    let urlViewName = props.urlViewName ?? "UlricTodman.com"
    let profession = props.profession ?? "Full Stack Java Developer"
    let name = props.name ?? "Ulric Todman";
    let portraitSrc = props.portraitSrc ?? defaultImgSrc
    let email = props.defaultValues ?? "gulps05lacier@icloud.com"
    let linkedIn = props.defaultValues ? "https://linkedin.com/in/ulric-todman" : props.linkedIn


    return(
        <>
            <img src={portraitSrc} className="portrait" alt={name + ' portrait'}>
            </img>
        <h1>{name}</h1>
    <h4>{profession}</h4>
            {props.defaultValues || props.urlViewName ?
                <div className="link-container">
                    <a href={url} className="url" target="_blank">{urlViewName}</a>
                </div> : null

            }
            <div className="button-container">

            {
                props.emailPrimary ?
                    <><a href={`mailto:${email}`}>< button className="mail-primary"><img src={MailIcon} alt="mail icon" /> <p>Mail</p></button></a> </>: <>
                        <a href={`mailto:${email}`}><button className="mail"><img  src={MailIcon} alt="mail icon" /> <p>Mail</p></button></a>
                        <a href={linkedIn} >  <button className="linkedin"><img src={LinkedInIcon} alt="linkedin icon"/><p>LinkedIn</p></button></a>
                    </>

            }


        </div>
        </>
    )
}