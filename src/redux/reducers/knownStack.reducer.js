const currentStacks = (state = [], action) => {
    switch (action.type) {
      case 'SET_CURRENT_STACK':
        return [ ...state, action.payload ]
      default:
        return state;
    }
  };

export default currentStacks;
