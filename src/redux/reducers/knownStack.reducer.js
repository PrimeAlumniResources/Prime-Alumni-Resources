const KnownStack = (state = [], action) => {
    switch (action.type) {
      case 'SET_KNOWN_STACK': return [ ...state, action.payload ]
        break;
      case 'SET_KNOWN_TECHS':return action.payload;
        break;
      case 'DELETE_KNOWN_TECH': let copyOfState = [...state]
          const index = copyOfState.indexOf(action.payload);
          const x = copyOfState.splice(index, 1);
          return copyOfState
        break;
      default:
        return state;
    }
  };

export default KnownStack;
