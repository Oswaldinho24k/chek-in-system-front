import {ajax} from 'rxjs/ajax'
import {map, catchError, switchMap} from 'rxjs/operators'
import { ofType } from 'redux-observable';
import { concat, of } from 'rxjs';

import {message} from 'antd'
import { LOGIN, LOGOUT, fetchUserSuccess, loginSuccess, logoutSuccess, fetchFailed, setStatus } from '../ducks/auth';

//let baseUrl = 'https://runa-chekin.herokuapp.com/users/'
let baseUrl = 'http://localhost:3000/users/'

export const getUser=(action$, state$)=>{           
    const loguedUser = JSON.parse(localStorage.getItem('loguedUser'))
    return [fetchUserSuccess(loguedUser)]
        // return ajax.getJSON(baseUrl).pipe(
        //     map(resp => fetchUsersSuccess(resp))
        // )        
}

export const loginUser=(action$, {getState, dispatch})=>{    
    return action$.pipe(
        ofType(LOGIN),        
        switchMap(({payload})=>{        
            const ajax$ = ajax({
                url: `${baseUrl}login`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'rxjs-custom-header': 'Rxjs'
                },
                body:payload
            }).pipe(                
                map(resp => {
                    message.success(`Welcome ${resp.response.username}`)
                    localStorage.setItem('loguedUser', JSON.stringify(resp.response))
                    return loginSuccess(resp.response)
                }),
                catchError(err=>{                    
                    message.error(err.response.detail || err.response.message)
                    return of(fetchFailed(err.response.message))
                })
            )
            return concat(
                of(setStatus("pending")),
                ajax$
            )
        })
    )      
}

export const logoutUser=(action$, {getState, dispatch})=>{    
    return action$.pipe(
        ofType(LOGOUT),        
        switchMap(({payload})=>{        
            const ajax$ = ajax({
                url: `${baseUrl}loguin`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'rxjs-custom-header': 'Rxjs'
                },
                body:payload
            }).pipe(                
                map(resp => {
                    message.success(`Good Bye ${getState().data.username}`)
                    localStorage.removeItem('loguedUser')
                    return logoutSuccess()
                }),
                catchError(err=>{                    
                    message.error(err.response.detail || err.response.message)
                    return of(fetchFailed(err.response.message))
                })
            )
            return concat(
                of(setStatus("pending")),
                ajax$
            )
        })
    )      
}

