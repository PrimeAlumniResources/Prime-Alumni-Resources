/**
* This file acts as the redux reducer for the specific profile
* @author elijahlawson
* @version 6/28/2023
*/

const specificProfile = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SPECIFIC_PROFILE':
            return action.payload[0];
        default:
            return state;
    }
}

export default specificProfile;