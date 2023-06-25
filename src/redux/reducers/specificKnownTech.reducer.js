const specificKnownTech = (state=[], action) => {
    switch (action.type) {
        case 'SET_SPECIFIC_KNOWN_TECH':
            return action.payload;
        default:
            return state;
    }
}

export default specificKnownTech;