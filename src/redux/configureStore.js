import { createStore, combineReducers, applyMiddleware } from "redux";
import {combineEpics, createEpicMiddleware} from 'redux-observable'
import {of} from 'rxjs'
import {compose} from 'redux'

import { fetchChekins, postChekin, deleteChekin, updateChekin } from "./epics/chekins";
import { fetchUsers, postUser, deleteUser, updateUser } from "./epics/users";
import { chekinsReducer } from "./ducks/chekins";
import { usersReducer } from "./ducks/users";
import { reducer as formReducer } from 'redux-form'
import { authReducer } from "./ducks/auth";
import { getUser,logoutUser, loginUser } from "./epics/auth";



export const configureStore=()=>{

    const rootEpic = combineEpics(        
        fetchChekins,
        postChekin,
        deleteChekin,
        updateChekin,
        fetchUsers,
        postUser,
        deleteUser,
        updateUser,
        getUser,
        logoutUser,
        loginUser

        )

    const epicMiddleware = createEpicMiddleware()

    const rootReducer = combineReducers({        
                
        auth:authReducer,
        chekins:chekinsReducer,
        users:usersReducer,
        form:formReducer
    })

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(epicMiddleware)
        )
    )

    epicMiddleware.run(rootEpic)

    return store
}
