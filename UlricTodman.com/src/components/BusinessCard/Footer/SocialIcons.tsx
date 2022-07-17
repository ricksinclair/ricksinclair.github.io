import LinkedInIconGray from "../../../assets/Linkedin Icon Grey.png";
import FacebookLogo from "../../../assets/Facebook Icon.png";
import InstagramLogo from "../../../assets/Instagram Icon.png";
import GithubLogo from "../../../assets/GitHub Icon.png";
import TwitterLogo from "../../../assets/Twitter Icon.png";
import SocialIconsProps from "./SocialIconsProps";
import "./SocialIcons.css"


export default function SocialIcons(props:SocialIconsProps){
    let name = props.name ?? "Ulric Todman";
    let linkedInUrl = props.linkedIn ?? "https://linkedin.com/in/ulric-todman"
    let gitHubUrl = props.github ?? "https://github.com/ricksinclair"


    return(
    <div className="business-card-footer">

        {
            (name == "Ulric Todman" && props.emailPrimary && linkedInUrl == "https://linkedin.com/in/ulric-todman") || (props.linkedIn != null && props.emailPrimary) ?
                <a href={linkedInUrl} target="_blank"><img src={LinkedInIconGray} alt="LinkedIn Logo"
                                                           className="footer-icon"></img></a> : null
        }

        {
            props.facebook ?
                <a href={props.facebook} target="_blank"><img src={FacebookLogo} alt="LinkedIn Logo"
                                                              className="footer-icon"></img></a> : null

        }
        {
            props.instagram ?
                <a href={props.instagram} target="_blank"><img src={InstagramLogo} alt="LinkedIn Logo"
                                                               className="footer-icon"></img></a> : null

        }
        {
            (name == "Ulric Todman") || props.github != null ?
                <a href={gitHubUrl} target="_blank"><img src={GithubLogo} alt="LinkedIn Logo"
                                                         className="footer-icon"></img></a> : null

        }

        {
            props.twitter ?
                <a href={props.twitter} target="_blank"><img src={TwitterLogo} alt="LinkedIn Logo"
                                                             className="footer-icon"></img></a> : null

        }

    </div>
    )
}