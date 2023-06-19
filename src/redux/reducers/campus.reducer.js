
const campus = (state = {} , action) => {
    switch (action.type) {
        case 'MODIFY_CAMPUS_NAME' : return {name: action.payload}
        break;
        case 'MODIFY_CAMPUS_CITY' : return {city: action.payload}
        break; 
        case 'MODIFY_CAMPUS_STATE' : return {states: action.payload}
        break;
        default: return state;
    }
}

export default campus;