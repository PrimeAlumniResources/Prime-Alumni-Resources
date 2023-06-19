const KnownStack = (state = [], action) => {
    switch (action.type) {
      case 'SET_KNOWN_STACK': 
        return [ ...state, action.payload ]
        
      case 'SET_KNOWN_TECHS':
        return action.payload;
        
        
       {/* -----USED TO DELETE PARTICULAR ARRAY IN CURRENT STACK----- */}

      case 'DELETE_KNOWN_TECH': let copyOfState = [...state]
          const index = copyOfState.indexOf(action.payload);
          const x = copyOfState.splice(index, 1);
          return copyOfState
      default:
        return state;
    }
  };

export default KnownStack;
