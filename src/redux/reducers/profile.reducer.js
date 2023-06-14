
const profile = ( state = {}, action) => {
    switch (action.type) {
        case 'SET_PROFILE' : return [...state]
        break;
        case 'MODIFY_USERNAME' : return {...state,username:action.payload}
        break;
        case 'MODIFY_FIRST_NAME' : return {...state,firstName:action.payload}
        break;
        case 'MODIFY_LAST_NAME' : return {...state,lastName:action.payload}
        break;
        case 'MODIFY_PRONOUNS' : return {...state,pronouns:action.payload}
        break;
        case 'MODIFY_COHORT' : return {...state,cohort:action.payload}
        break;
        case 'MODIFY_CURRENT_WORK' : return {...state,currentWork:action.payload}
        break; 
        case 'MODIFY_BIO' : return {...state,bio:action.payload}
        break;
        case 'MODIFY_UPLOADED_FILE' : return {...state, uploadedFile: action.payload}
        break;
        case 'MODIFY_LINKED_IN' : return {...state, linkedIn: action.payload}
        break ;
        case 'MODIFY_GITHUB' : return {...state, github:action.payload}
        break;
        case 'MODIFY_PORTFOLIO' : return {...state, portfolio:action.payload}
        break ;
        case 'MODIFY_START_DATE' : return {...state, startDate:action.payload}
        break ;
        case 'MODIFY_POSITION' : return {...state,position:action.payload}
        break ;
        // case 'SET_CURRENT_STACK':  return [...state]  
        // break ;
        // case 'SET_KNOWN_STACK': return [ ...state]
        default: return state;
    } 
}


export default profile;