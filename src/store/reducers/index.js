import { GET_CATEGORIES_LIST, GET_CATEGORIES_LOADING, GET_ERROR, GET_JOKE, JOKE_LOADING, JOKE_ERROR } from '../types';

const initialCategoriesState = {
    categories: [],
    error: null,
    loading: false
}

const initialJokeState = {
    joke: {},
    error: null,
    loading: false
}

export const categoriesReducer = ( state = initialCategoriesState, action ) => {
    switch(action.type) {
        case GET_CATEGORIES_LIST: return {
                ...state,
                categories: state.categories
            }
        case GET_CATEGORIES_LOADING: return {
                ...state,
                loading: state.loading
        }
        case GET_ERROR: return {
                ...state,
                error: state.error
        }
        default: return state
    }
}

export const jokeReducer = ( state = initialJokeState, action ) => {
    switch(action.type) {
        case GET_JOKE:
            return {
                ...state,
                joke: state.joke
            }
        case JOKE_LOADING: 
            return {
                ...state,
                loading: state.loading
            }
        case JOKE_ERROR:
            return {
                ...state,
                error: state.error
            }
        default: return state
    }
} 