const campus = (state=[], action) => {
    switch (action.type) {
        case 'SET_ALL_CAMPUS':
            return action.payload;
        default:
            return state;
    }
}

export default campus;