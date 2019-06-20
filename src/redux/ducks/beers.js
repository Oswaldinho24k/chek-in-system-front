/*Actions*/
export const FETCH_FULFILLED = 'runa-chekin/beers/FETCH_FULFILLED';
export const SET_STATUS = 'runa-chekin/beers/SET_STATUS';
export const FETCH_DATA = 'runa-chekin/beers/FETCH_DATA';
export const SEARCH_DATA = 'runa-chekin/beers/SEARCH_DATA';
export const FETCH_FAILED = 'runa-chekin/beers/FETCH_FAILED';
export const FETCH_CANCEL = 'runa-chekin/beers/FETCH_CANCEL';

/*initial state*/
const initialState = {
    data: [],
    status:'idle'
}

/*reducer*/
export const beersReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_STATUS:{
            return{
                ...state,
                status:action.payload,
            }
        }
        case FETCH_FULFILLED:{
            return{
                ...state,
                status:"success",
                data:action.payload
            }
        }
        case FETCH_FAILED:{
            return{
                ...state,
                status:"failure",
                messages:[{
                    type:'error',
                    text:action.payload
                }]
            }
        }

        default: return state
    }
}

/*action creators*/
export const fetchFulfilled=(beers)=>{
    return{
        type: FETCH_FULFILLED,
        payload: beers,
        message:[]
    }
}

export const setStatus=(status)=>{
    return{
        type: SET_STATUS,
        payload: status
    }
}

export const fetchData=()=>{
    return{
        type: FETCH_DATA        
    }
}

export const searchData=(search)=>{
    return{
        type: SEARCH_DATA,
        payload:search   
    }
}

export const fetchFailed=(message)=>{
    return{
        type: FETCH_FAILED,
        payload:message   
    }
}

export const fetchCancel=()=>{
    return{
        type: FETCH_CANCEL,        
    }
}