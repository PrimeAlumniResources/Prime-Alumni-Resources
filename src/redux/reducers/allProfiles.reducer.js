const allProfiles = (state=[], action) => {
    switch (action.type) {
        case 'SET_ALL_PROFILES':
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}

export default allProfiles;