import{ADD_MOVIE,EDIT_MOVIE,DELETE_MOVIE} from '../constants/action_type'
import {movieList} from '../../components/data'

const initialState = {
movieList
}

const movieReducer = (state = initialState, {type, payload}) =>{
switch (type) {

    case ADD_MOVIE:
        return{
            ...state,
            movieList:[...state.movieList,payload]
        }
    case EDIT_MOVIE:
        
        return {
            ...state,
            movieList:(state.movieList.map(el=> el.id === payload.id?payload:el))
        
        }
    case DELETE_MOVIE:
        return {
            ...state,
            movieList:(state.movieList.filter(el => el.id!==payload))
        };
        default : 
        return state
}
}
export default movieReducer