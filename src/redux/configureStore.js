import { createStore, combineReducers, applyMiddleware } from "redux";
import {combineEpics, createEpicMiddleware} from 'redux-observable'
import {of} from 'rxjs'
import {compose} from 'redux'
import { beersReducer } from "./ducks/beers";
import {configReducer} from "./ducks/config";
import { fetchBeersEpic } from "./epics/fetchBeers";
import { fetchChekins } from "./epics/chekins";
import { fetchUsers } from "./epics/users";
import { chekinsReducer } from "./ducks/chekins";
import { usersReducer } from "./ducks/users";



export const configureStore=()=>{

    const rootEpic = combineEpics(
        fetchBeersEpic,
        fetchChekins,
        fetchUsers
        )

    const epicMiddleware = createEpicMiddleware()

    const rootReducer = combineReducers({        
        beers:beersReducer,
        config:configReducer,
        chekins:chekinsReducer,
        users:usersReducer
    })

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(epicMiddleware)
        )
    )

    epicMiddleware.run(rootEpic)

    return store
}
