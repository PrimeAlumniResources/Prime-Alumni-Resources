/**
* This file acts as the redux reducer for the all profile
* @author elijahlawson
* @version 6/28/2023
*/


const allProfiles = (state=[], action) => {
    switch (action.type) {
        case 'SET_ALL_PROFILES':
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}

export default allProfiles;