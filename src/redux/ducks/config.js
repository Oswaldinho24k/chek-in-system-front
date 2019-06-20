/*actions*/
export const SET_CONFIG = 'SET_CONFIG'

/*initial state*/
const initialState = {
    apiBase: 'https://api.punkapi.com/v2/beers',
    perPage:10
};

/*reducer*/
export function configReducer(state = initialState, action) {    
    return state;
}

/*action creators*/
export const setConfig = (partialObject) => {
    return {
        type: SET_CONFIG,
        payload: partialObject
    }
}
