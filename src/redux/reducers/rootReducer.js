import { combineReducers } from "redux"
import { movieData } from "./movieDataReducer"



const rootReducer = combineReducers({
    movieData,
})

export default rootReducer