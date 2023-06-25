const allCohorts = (state = [], action) => {
    switch (action.type) {
        case 'SET_COHORTS' : return [...state,action.payload]
        default: return state;
    }
}

export default allCohorts;