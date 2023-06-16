const currentStacks = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_STACK':
      return [...state, action.payload]
      break;
    case 'DELETE_CURRENT_TECH': let copyOfState = [...state]
      const index = copyOfState.indexOf(action.payload);
      const x = copyOfState.splice(index, 1);
      return copyOfState
      break;
    default:
      return state;
  }


}
  ;

export default currentStacks;