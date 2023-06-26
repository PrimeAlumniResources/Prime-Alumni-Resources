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
                            > 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>

                             </NavLink>
                        </div>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ResultsContainer;