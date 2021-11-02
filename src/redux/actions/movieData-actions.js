import { SET_MOVIES } from "../action-types/movieData-action-types"


export const setMovieData = (data) => {
    return {
        type: SET_MOVIES,
        payload: data
    }
}