/**
* This file acts as the redux reducer for the specific known tech stack
* @author elijahlawson
* @version 6/28/2023
*/


const specificKnownTech = (state=[], action) => {
    switch (action.type) {
        case 'SET_SPECIFIC_KNOWN_TECH':
            return action.payload;
        default:
            return state;
    }
}

export default specificKnownTech;