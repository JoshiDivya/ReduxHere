const isLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case "isLoggedIn":
      return !state;
    default:
      return state;
  }
};

export default isLoggedReducer;
