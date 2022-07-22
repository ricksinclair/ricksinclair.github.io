import ProfileSectionProps from "./ProfileSectionProps";
import defaultImgSrc from "../../../assets/portrait.jpeg";
import MailIcon from "../../../assets/Mail.png"
import LinkedInIcon from "../../../assets/Icon/Font Awesome Free/Brands/L/linkedin.png"
import "./ProfileSection.css"

export default function ProfileSection(props: ProfileSectionProps) {

    let url: string = props.url ?? "https://www.ulrictodman.com"
    let urlViewName: string = props.urlViewName ?? "UlricTodman.com"
    let profession: string = props.profession ?? "Full Stack Java Developer"
    let name: string = props.name ?? "Ulric Todman";
    let portraitSrc: string = props.portraitSrc ?? defaultImgSrc
    let email: string = props.defaultValues ? "gulps05lacier@icloud.com" : props.email ? props.email : "user@example.com"
    let linkedIn: string = props.defaultValues ? "https://linkedin.com/in/ulric-todman" :
        props.linkedIn ? props.linkedIn : "https://linkedin.com"


    return (
        <div className={`profile-container`}>
            <img src={portraitSrc} className="portrait" alt={name + ' portrait'}>
            </img>
            <h1 className={`profile-name`}>{name}</h1>
            <h4 className={`profile-profession`}>{profession}</h4>
            {props.defaultValues || props.urlViewName ?
                <a href={url} className="url" target="_blank">{urlViewName}</a>
                : null

            }
            <div className="button-container">

                {
                    props.emailPrimary ?
                        <div className={`profile`}><a
                            href={`mailto:${email}?subject=Contact request from your website   &body=Email:%0d%0aPhone:%0d%0a Best time to call?: %0d%0a Reason for contact:`}>
                            < button className="mail-primary"><img src={MailIcon} alt="mail icon"/> <p>Mail</p></button>
                        </a></div> : <div className={`mail-linkedin`}>
                            <a href={`mailto:${email}?subject=Contact request from your website &body=Email:%0d%0aPhone:%0d%0a Best time to call?: %0d%0a Reason for contact: `}>
                                <button className="mail"><img src={MailIcon} alt="mail icon"/> <p>Mail</p></button>
                            </a>
                            <a href={linkedIn} target="_blank">
                                <button className="linkedin"><img src={LinkedInIcon} alt="linkedin icon"/><p>LinkedIn</p>
                                </button>
                            </a>
                        </div>

                }


            </div>
        </div>
    )
}