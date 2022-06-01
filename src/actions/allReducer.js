import booksReducer from "../reducers/bookReducer";
import isLoggedReducer from "../reducers/loginReducer";

import {combineReducers} from 'redux';

const allReducer = combineReducers({
    bookList: booksReducer,
    isloggin: isLoggedReducer
});

export default allReducer;