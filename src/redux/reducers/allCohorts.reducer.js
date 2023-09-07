/**
* This file acts as the redux reducer for all cohorts
* @author elijahlawson
* @version 6/28/2023
*/


const allCohorts = (state = [], action) => {
    switch (action.type) {
        case 'SET_COHORTS' : return [...state,action.payload]
        default: return state;
    }
}

export default allCohorts;