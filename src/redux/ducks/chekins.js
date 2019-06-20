/*Actions*/
export const FETCH_SUCCESS = 'runa-chekin/chekins/FETCH_SUCCESS';
export const SET_STATUS = 'runa-chekin/chekins/SET_STATUS';
export const FETCH_DATA = 'runa-chekin/chekins/FETCH_DATA';
export const SEARCH_DATA = 'runa-chekin/chekins/SEARCH_DATA';
export const FETCH_FAILED = 'runa-chekin/chekins/FETCH_FAILED';


/*initial state*/
const initialState = {
    data: [],
    status:'idle'
}

/*reducer*/
export const chekinsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_STATUS:{
            return{
                ...state,
                status:action.payload,
            }
        }
        case FETCH_SUCCESS:{
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
export const fetchChekinsSuccess=(chekins)=>{
    return{
        type: FETCH_SUCCESS,
        payload: chekins,
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
