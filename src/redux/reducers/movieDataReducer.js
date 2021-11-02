import { SET_MOVIES } from "../action-types/movieData-action-types";


const initialState = []

export const movieData = (state = initialState, action) => {
    switch(action.type) {
        case SET_MOVIES:
            return state = [...state, action.payload]
        default:
            return state;
    }
}