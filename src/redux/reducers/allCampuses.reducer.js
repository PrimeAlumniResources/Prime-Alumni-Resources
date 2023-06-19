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