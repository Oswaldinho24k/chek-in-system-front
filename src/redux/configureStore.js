import { createStore, combineReducers, applyMiddleware } from "redux";
import { appReducer } from "./reducers/appReducer";
import {combineEpics, createEpicMiddleware} from 'redux-observable'
import {of} from 'rxjs'
import {compose} from 'redux'
import { fetchBeersEpic } from "./epics/fetchBeers";


//const epic1 = () => of({type: "SET_NAME", payload:"Oswaldao"})

export const configureStore=()=>{

    const rootEpic = combineEpics(fetchBeersEpic)

    const epicMiddleware = createEpicMiddleware()

    const rootReducer = combineReducers({
        app:appReducer
    })

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(epicMiddleware)
        )
    )

    epicMiddleware.run(rootEpic)

    return store
}
