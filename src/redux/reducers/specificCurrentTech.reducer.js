const specificCurrentTech = (state=[], action) => {
    switch (action.type) {
        case 'SET_SPECIFIC_CURRENT_TECH':
            return action.payload;
        default:
            return state;
    }
}

export default specificCurrentTech;