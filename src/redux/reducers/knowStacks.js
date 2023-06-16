const knownStacks = (state = [], action) => {
    switch (action.type) {
      case 'SET__KNOWN_TECHS':
        return action.payload;
      default:
        return state;
    }
  };

  export default knownStacks;