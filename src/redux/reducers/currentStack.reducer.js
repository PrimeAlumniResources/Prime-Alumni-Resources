const currentStacks = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_STACK':
      return [...state, action.payload]
    case 'SET_CURRENT_TECHS': 
      return action.payload;

      
  {/* -----USED TO DELETE PARTICULAR ARRAY IN CURRENT STACK----- */}

    case 'DELETE_CURRENT_TECH': let copyOfState = [...state]
      const index = copyOfState.indexOf(action.payload);
      const x = copyOfState.splice(index, 1);
      return copyOfState
    default:
      return state;
  }


}
  ;

export default currentStacks;