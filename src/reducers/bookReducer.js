const INITIAL_STATE = {
  name: "",
  book: [],
};

function booksReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        ...action.content,
      };
    default:
      return state;
  }
}
export default booksReducer;
