/*Actions*/
export const FETCH_SUCCESS = 'runa-user/auth/FETCH_SUCCESS';
export const SET_STATUS = 'runa-user/auth/SET_STATUS';
export const FETCH_FAILED = 'runa-chekin/auth/FETCH_FAILED';

export const LOGIN_SUCCESS = 'runa-user/auth/LOGIN_SUCCESS';
export const LOGIN = 'runa-user/auth/LOGIN';

export const LOGOUT_SUCCESS = 'runa-user/auth/LOGOUT_SUCCESS';
export const LOGOUT = 'runa-user/auth/LOGOUT';









/*initial state*/
const initialState = {
    data: {},
    status:'idle'
}

/*reducer*/
export const authReducer = (state = initialState, action) => {
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
        case LOGIN_SUCCESS:{
            return{
                ...state,
                status:"success",
                data:action.payload
            }
        }
        case LOGOUT_SUCCESS:{
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
//fetch 
export const fetchUserSuccess=(user)=>{
    return{
        type: FETCH_SUCCESS,
        payload: user,
        message:[]
    }
}   
//loguin
export const login=(user)=>{        
    return{
        type:LOGIN,
        payload:user
    }
}
export const loginSuccess=(user)=>{
    return{
        type:LOGIN_SUCCESS,
        payload:user
    }
}
//logout
export const logout=()=>{        
    return{
        type:LOGOUT,
        payload:{}
    }
}
export const logoutSuccess=()=>{
    return{
        type:LOGOUT_SUCCESS,
        payload:{}
    }
}

export const fetchFailed=(message)=>{
    return{
        type: FETCH_FAILED,
        payload:message   
    }
}
export const setStatus=(status)=>{
    return{
        type: SET_STATUS,
        payload: status
    }
}
