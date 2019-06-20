/*Actions*/
export const FETCH_SUCCESS = 'runa-chekin/users/FETCH_SUCCESS';
export const SET_STATUS = 'runa-chekin/users/SET_STATUS';
export const FETCH_DATA = 'runa-chekin/users/FETCH_DATA';
export const SEARCH_DATA = 'runa-chekin/users/SEARCH_DATA';
export const FETCH_FAILED = 'runa-chekin/users/FETCH_FAILED';


/*initial state*/
const initialState = {
    data: [],
    status:'idle'
}

/*reducer*/
export const usersReducer = (state = initialState, action) => {
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
export const fetchUsersSuccess=(users)=>{
    return{
        type: FETCH_SUCCESS,
        payload: users,
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
