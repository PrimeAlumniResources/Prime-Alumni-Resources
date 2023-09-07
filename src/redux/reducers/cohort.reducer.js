const cohort = (state = [], action) => {
    switch (action.type) {
        case 'SET_MY_COHORT' : return action.payload[0]
        default: return state;
    }
}

export default cohort;