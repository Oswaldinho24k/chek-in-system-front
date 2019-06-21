/*Actions*/
export const FETCH_SUCCESS = 'runa-chekin/chekins/FETCH_SUCCESS';
export const SET_STATUS = 'runa-chekin/chekins/SET_STATUS';

export const FETCH_FAILED = 'runa-chekin/chekins/FETCH_FAILED';

export const POST_SUCCESS = 'runa-chekin/chekins/POST_SUCCESS';
export const POST = 'runa-chekin/chekins/POST';

export const UPDATE_SUCCESS = 'runa-chekin/chekins/UPDATE_SUCCESS';
export const UPDATE = 'runa-chekin/chekins/UPDATE';

export const DELETE_SUCCESS = 'runa-chekin/chekins/DELETE_SUCCESS';
export const DELETE = 'runa-chekin/chekins/DELETE';

//For filters and searches
// export const FETCH_DATA = 'runa-chekin/chekins/FETCH_DATA';
// export const SEARCH_DATA = 'runa-chekin/chekins/SEARCH_DATA';




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
        case POST_SUCCESS:{            
            return{
                ...state,
                status:"success",
                data:[action.payload, ...state.data]
            }
        }
        case UPDATE_SUCCESS:{            
            return{
                ...state,
                status:"success",
                data:[...state.data.map((el)=>{ 
                    if(el.id==action.payload.id)return action.payload
                    return el
                })]
            }
        }
        case DELETE_SUCCESS:{   
            console.log(action.payload, state.data)         
            return{
                ...state,
                status:"success",
                data:[...state.data.filter((el)=>el.id!= action.payload)]
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
//fetch 
export const fetchChekinsSuccess=(chekins)=>{
    return{
        type: FETCH_SUCCESS,
        payload: chekins,
        message:[]
    }
}   
//post
export const postChekin=(chekin)=>{        
    return{
        type:POST,
        payload:chekin
    }
}
export const postSuccess=(chekin)=>{
    return{
        type:POST_SUCCESS,
        payload:chekin
    }
}
//update
export const updateChekin=(chekin)=>{    
    return{
        type:UPDATE,
        payload:chekin
    }
}
export const updateSuccess=(chekin)=>{    
    return{
        type:UPDATE_SUCCESS,
        payload:chekin
    }
}

//delete
export const deleteChekin=(chekin)=>{        
    return{
        type:DELETE,
        payload:chekin
    }
}
export const deleteSuccess=(chekin)=>{       
    return{
        type:DELETE_SUCCESS,
        payload:chekin
    }
}

export const setStatus=(status)=>{
    return{
        type: SET_STATUS,
        payload: status
    }
}

// export const fetchData=()=>{
//     return{
//         type: FETCH_DATA        
//     }
// }

// export const searchData=(search)=>{
//     return{
//         type: SEARCH_DATA,
//         payload:search   
//     }
// }

export const fetchFailed=(message)=>{
    return{
        type: FETCH_FAILED,
        payload:message   
    }
}
