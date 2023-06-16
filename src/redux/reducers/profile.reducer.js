
const profile = ( state = {}, action) => {
    switch (action.type) {
        case 'SET_PROFILE' : return action.payload
        break;
        case 'MODIFY_USERNAME' : return {...state,username:action.payload}
        break;
        case 'MODIFY_FIRST_NAME' : return {...state,first_name:action.payload}
        break;
        case 'MODIFY_LAST_NAME' : return {...state,last_name:action.payload}
        break;
        case 'MODIFY_PRONOUNS' : return {...state,pronouns:action.payload}
        break;
        case 'MODIFY_COHORT' : return {...state,cohort:action.payload}
        break;
        case 'MODIFY_CURRENT_WORK' : return {...state,current_work:action.payload}
        break; 
        case 'MODIFY_BIO' : return {...state,bio:action.payload}
        break;
        case 'MODIFY_UPLOADED_FILE' : return {...state, uploaded_file: action.payload}
        break;
        case 'MODIFY_LINKED_IN' : return {...state, linked_in: action.payload}
        break ;
        case 'MODIFY_GITHUB' : return {...state, github:action.payload}
        break;
        case 'MODIFY_PORTFOLIO' : return {...state, portfolio:action.payload}
        break ;
        case 'MODIFY_START_DATE' : return {...state, start_date:action.payload}
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