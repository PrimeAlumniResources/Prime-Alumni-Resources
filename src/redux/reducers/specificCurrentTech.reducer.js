/**
* This file acts as the redux reducer for the specific profile current tech stack
* @author elijahlawson
* @version 6/28/2023
*/


const specificCurrentTech = (state=[], action) => {
    switch (action.type) {
        case 'SET_SPECIFIC_CURRENT_TECH':
            return action.payload;
        default:
            return state;
    }
}

export default specificCurrentTech;