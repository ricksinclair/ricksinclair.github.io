import InterestProps from "./InterestsProps";
import "./Interests.css"

export default function Interests(props: InterestProps) {
    let interests = props.interests ?? "I love technology, movies, video games, music, and documentaries. I would like to find some like-minded folks to build the future with."

    return (
        <div className="body-text-container">
            <h4 className="subheading">Interests</h4>
            <p className="copy-text">{interests}</p>
        </div>
    )
}