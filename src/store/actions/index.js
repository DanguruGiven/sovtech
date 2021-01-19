import { GET_CATEGORIES_LIST, GET_ERROR, GET_CATEGORIES_LOADING, JOKE_ERROR, JOKE_LOADING, GET_JOKE } from '../types';

export const getCategories = categories => {
    return {
        type: GET_CATEGORIES_LIST,
        categories
    }
}

export const getError = error => {
    return {
        type: GET_ERROR,
        error
    }
}

export const getLoading = loading => {
    return {
        type: GET_CATEGORIES_LOADING,
        loading
    }
}

export const getJoke = joke => {
    return {
        type: GET_JOKE,
        joke
    }
}

export const getJokeError = error => {
    return {
        type: JOKE_ERROR,
        error
    }
}

export const getJokeLoading = loading => {
    return {
        type: JOKE_LOADING,
        loading
    }
}