const specificProfile = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SPECIFIC_PROFILE':
            console.log(action.payload)
            return action.payload[0];
        default:
            return state;
    }
}

export default specificProfile;