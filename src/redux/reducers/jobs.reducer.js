const jobs = (state = [], action) => {
  switch (action.type) {
    case "REDUX/GET_JOBS":
      return action.payload;
    default:
      return state;
  }
};

export default jobs;
