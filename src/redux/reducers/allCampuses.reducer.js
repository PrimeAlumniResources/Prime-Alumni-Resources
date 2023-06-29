/**
* This file acts as the redux reducer for all campuses
* @author elijahlawson
* @version 6/28/2023
*/


const allCampuses = (state=[], action) => {
    switch (action.type) {
        case 'SET_ALL_CAMPUS':
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}

export default allCampuses;