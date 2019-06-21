import {ajax} from 'rxjs/ajax'
import {map, catchError,switchMap } from 'rxjs/operators'
import { ofType} from 'redux-observable';
import { concat, of } from 'rxjs';
import {fetchChekinsSuccess, postSuccess, fetchFailed, setStatus,POST, UPDATE, DELETE, updateSuccess, deleteSuccess} from '../ducks/chekins'
import {message} from 'antd'

//let baseUrl = 'https://runa-chekin.herokuapp.com/chekins/'
let baseUrl = 'http://localhost:3000/chekins/'


export const fetchChekins=(action$, state$)=>{           
        return ajax.getJSON(baseUrl).pipe(
            map(resp => fetchChekinsSuccess(resp))
        )        
}

export const postChekin=(action$, {getState, dispatch})=>{    
    return action$.pipe(
        ofType(POST),        
        switchMap(({payload})=>{        
            const ajax$ = ajax({
                url: baseUrl,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'rxjs-custom-header': 'Rxjs'
                },
                body:payload
            }).pipe(                
                map(resp => {
                    message.success(`Added successfully`)
                    return postSuccess(resp.response[0])
                }),
                catchError(err=>{
                    console.log(err)
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

//update
export const updateChekin=(action$, {getState, dispatch})=>{
    return action$.pipe(
        ofType(UPDATE),        
        switchMap(({payload})=>{
            console.log(payload)   
            const ajax$ = ajax({
                url: `${baseUrl}${payload.id}`,
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'rxjs-custom-header': 'Rxjs'
                },
                body:payload
            }).pipe(                
                map(resp => {
                    message.success(`Updated successfully`)
                    return updateSuccess(resp.response[0])
                }),
                catchError(err=>{
                    console.log(err)
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
//delete
export const deleteChekin=(action$, {getState, dispatch})=>{    
    return action$.pipe(
        ofType(DELETE),        
        switchMap(({payload})=>{                   
            const ajax$ = ajax({
                url: `${baseUrl}${payload}`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'rxjs-custom-header': 'Rxjs'
                }                
            }).pipe(                
                map(resp => {
                    message.success(`Deleted successfully`)
                    return deleteSuccess(payload)
                }),
                catchError(err=>{
                    console.log(err)
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