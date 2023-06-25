import { Link, NavLink } from "react-router-dom";

function ResultsContainer(props) {
    console.log(props.profiles);
    const handleBack = () => {
        props.setIsSearching(false);
        props.setIsBrowsing(false);
    }

    return(
        <div className="mr-16">
            <div className="flex justify-end">
                <button type="submit" className="border" onClick={handleBack}>Back</button>
            </div>
            <ul>
                {props.profiles.map(profile => {
                    return(
                    <li>
                        <div className=" w-full mt-4 border p-4 px-8">
                            <p>{profile.profile_name} <span className="text-sm">{profile.pronouns}</span></p>
                            {profile.position && <p>{profile.position} at {profile.company}</p>}
                            <p>{profile.cohort_name} | {profile.campus_name}</p>
                            <NavLink 
                                to={`/profile/${profile.username}`}
                                state={{username: profile.username, user_id: profile.id}}
                            > go! </NavLink>
                        </div>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ResultsContainer;