import { Action } from "rxjs/internal/scheduler/Action";

export const appReducer=(state={name:'OSwaldinho'}, action)=>{
    switch(action.type){
        case "SET_NAME":{
            return {
                ...state, 
                name: action.payload
            }
        }
        default: return state        
    }
}