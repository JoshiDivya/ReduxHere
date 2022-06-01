

import { configureStore } from "@reduxjs/toolkit";
import allReducer from "./actions/allReducer";


const store = configureStore({reducer:allReducer}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;