import "./BusinessCard.css"
import BusinessCardProps from "./BusinessCardProps";
import SocialIcons from "./Footer/SocialIcons";
import SocialIconsProps from "./Footer/SocialIconsProps";
import About from "./About/About";
import Interests from "./Interests/Interests";
import ProfileSection from "./Profile/ProfileSection";
import ProfileSectionProps from "./Profile/ProfileSectionProps";

export default function BusinessCard(props: BusinessCardProps) {
    let name = props.name ?? "Ulric Todman";


    let iconsProps: SocialIconsProps = {
        name: name,
        emailPrimary: props.emailPrimary,
        linkedIn: props.linkedIn,
        facebook: props.facebook,
        instagram: props.instagram,
        twitter: props.twitter,
        github: props.github
    }

    let profileSectionProps: ProfileSectionProps = {
        name: props.name,
        defaultValues: props.defaultValues,
        url: props.url,
        urlViewName: props.urlViewName,
        portraitSrc: props.portraitSrc,
        emailPrimary: props.emailPrimary
    }


    return (
        <div className="canvas">
            <div className="business-card">


                <div className="business-card-body">


                    <ProfileSection {...profileSectionProps} />

                    <About about={props.about}/>

                    <Interests interests={props.interests}/>

                    <SocialIcons {...iconsProps}/>

                </div>

            </div>
        </div>
    )


}

