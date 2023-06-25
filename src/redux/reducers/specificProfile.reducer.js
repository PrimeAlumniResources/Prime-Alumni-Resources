const specificProfile = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SPECIFIC_PROFILE':
            return action.payload;
        default:
            return state;
    }
}

export default specificProfile