import { combineReducers } from "redux";
import listMovies from './postReducers.js'

const rootReducer = combineReducers ({
    listMovies,
})

export default rootReducer