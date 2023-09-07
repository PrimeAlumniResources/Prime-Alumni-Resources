const resourceTags = ( state = [], action) => {
    switch (action.type) {
        case 'SET_RESOURCE_TAGS' : return action.payload
        default: return state;
    }
}


export default resourceTags;