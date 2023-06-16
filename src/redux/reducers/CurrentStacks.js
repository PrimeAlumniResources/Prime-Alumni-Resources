

const CurrentStacks = (state = [], action) => {
    switch (action.type) {
      case 'SET__CURRENT_TECHS':
        return action.payload;
      default:
        return state;
    }
  };

  export default CurrentStacks;