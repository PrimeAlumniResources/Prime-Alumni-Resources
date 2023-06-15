function ResultsContainer(props) {
    console.log(props.profiles);

    const handleBack = () => {
        props.setIsSearching(false);
        props.setIsBrowsing(false);
    }

    return(
        <div>
            <button type="submit" className="border" onClick={handleBack}>Back</button>
            <ul>
                {props.profiles.map(profile => {
                    return(
                    <li>
                        {profile.profile_name} {profile.pronouns} {profile.job_title} {profile.cohort_name} {profile.campus_name}
                        
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ResultsContainer;