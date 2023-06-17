
const cohort = (state = [], action) => {
    switch (action.type) {
        case 'SET_COHORTS' : return [...state,action.payload]
        break;
        case 'SET_MY_COHORT' : return action.payload[0]
        default: return state;
    }
}

export default cohort;