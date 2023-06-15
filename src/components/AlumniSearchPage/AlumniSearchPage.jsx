import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResultsContainer from "./ResultsContainer";
import { join } from "redux-saga/effects";

function AlumniSearchPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_ALL_PROFILES",
    });

    dispatch({
        type: "FETCH_ALL_CAMPUSES"
    })
  }, []);

  //React State
  const [searchType, setSearchType] = useState("Name");
  const [searchInput, setSearchInput] = useState("");
  const [campusBrowse, setCampusBrowse] = useState("")
  const [isSearching, setIsSearching] = useState(false);
  const [isBrowsing, setIsBrowsing] = useState(false)

  //Redux Stores
  const profiles = useSelector((store) => store.allProfiles);
  const campuses = useSelector((store) => store.campus)

  //searchChange sets the state as the input changes and then sets isSearching in order to conditionally render the ResultsContainer
  const searchChange = (event) => {
    setSearchInput(event.target.value);
    if (searchInput.length < 2) {
      return setIsSearching(false);
    } else {
      setIsSearching(true);
    }
  };

  //filterProfiles takes in a type argument (either workplace, cohort, or name) and filters out matches from the allProfiles 
  //Redux store
  const filterProfiles = (type) => {
    const data = profiles.map((profile) => profile[type]);
    const preFilterData = data.filter((item) =>
      item.toLowerCase().includes(searchInput.toLowerCase())
    );
    const filteredData = profiles.filter((profile) =>
      preFilterData.includes(profile[type])
    );

    return filteredData;
  };

  //dynamicSearch routes the filterProfiles dependent on radio button selected,
  // or executes browseProfiles if the person wants to browse by campus instead
  const dynamicSearch = () => {
    if (isBrowsing) {
        return browseProfiles(campusBrowse);
    }
    switch (searchType) {
      case "Name":
        return filterProfiles("profile_name");
      case "Workplace":
        return filterProfiles("company_name");
      case "Cohort":
        return filterProfiles("cohort_name");
    }
  };

  //handleBrowse sets the browsing type (campus_name) and sets isBrowsing to true
  const handleBrowse = (type) => {
    event.preventDefault();
    setIsBrowsing(true);
    setCampusBrowse(type)
  }

  //browseProfiles takes the campus_name and filters out all profiles based off that
  const browseProfiles = (campus_name) => {
    return profiles.filter((profile) => {
        return profile.campus_name === campus_name
    })
  }

  return (
    <div className="grid grid-cols-2 place-items-center mt-12">
      <div className="grid grid-cols-1 place-items-center">
        <form>
          <p className="text-center">Search</p>
          <div>
            <input
              className="border w-64"
              type="text"
              name="searchInput"
              value={searchInput}
              required
              onChange={searchChange}
            />
          </div>
          <div>
            <div
              className="grid grid-cols-1"
              onChange={(e) => setSearchType(e.target.value)}
            >
              <label>
                <input type="radio" name="search" value="Name" defaultChecked />
                <span> By Name</span>
              </label>
              <label>
                <input type="radio" name="search" value="Workplace" />
                <span> By Workplace</span>
              </label>
              <label>
                <input type="radio" name="search" value="Cohort" />
                <span> By Cohort</span>
              </label>
            </div>
          </div>
        </form>
      </div>
      {isSearching || isBrowsing ? (
        <ResultsContainer
          setIsSearching={() => setIsSearching()}
          setIsBrowsing={() => setIsBrowsing()}
          profiles={dynamicSearch()}
        />
      ) : (
        <div>
          <p className="text-center">Browse</p>
          <ul>
            {campuses.map(campus => {
                return(
                    <li className="underline" onClick={(event) => handleBrowse(campus.name)}>{campus.name}</li>
                )
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AlumniSearchPage;
