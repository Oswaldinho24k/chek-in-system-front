/*Actions*/
export const FETCH_SUCCESS = 'runa-user/users/FETCH_SUCCESS';
export const SET_STATUS = 'runa-user/users/SET_STATUS';

export const FETCH_FAILED = 'runa-user/users/FETCH_FAILED';

export const POST_SUCCESS = 'runa-user/users/POST_SUCCESS';
export const POST = 'runa-user/users/POST';

export const UPDATE_SUCCESS = 'runa-user/users/UPDATE_SUCCESS';
export const UPDATE = 'runa-user/users/UPDATE';

export const DELETE_SUCCESS = 'runa-user/users/DELETE_SUCCESS';
export const DELETE = 'runa-user/users/DELETE';



//For filters or searches or each user chekins
//export const FETCH_DATA = 'runa-user/users/FETCH_DATA';
// export const SEARCH_DATA = 'runa-user/users/SEARCH_DATA';




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
        case POST_SUCCESS:{            
            return{
                ...state,
                status:"success",
                data:[...state.data, action.payload]
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
export const fetchUsersSuccess=(users)=>{
    return{
        type: FETCH_SUCCESS,
        payload: users,
        message:[]
    }
}   
//post
export const postUser=(user)=>{        
    return{
        type:POST,
        payload:user
    }
}
export const postSuccess=(user)=>{
    return{
        type:POST_SUCCESS,
        payload:user
    }
}
//update
export const updateUser=(user)=>{        
    return{
        type:UPDATE,
        payload:user
    }
}
export const updateSuccess=(user)=>{    
    return{
        type:UPDATE_SUCCESS,
        payload:user
    }
}

//delete
export const deleteUser=(user)=>{        
    return{
        type:DELETE,
        payload:user
    }
}
export const deleteSuccess=(user)=>{       
    return{
        type:DELETE_SUCCESS,
        payload:user
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
