import {ajax} from 'rxjs/ajax'
import {ignoreElements, tap, map, catchError, switchMap, debounceTime, filter, takeUntil, delay, withLatestFrom, pluck} from 'rxjs/operators'
import { fetchFulfilled, FETCH_DATA, setStatus, SEARCH_DATA, fetchFailed, FETCH_CANCEL } from '../ducks/beers';
import { ofType } from 'redux-observable';
import { concat, of } from 'rxjs';

const API = 'https://api.punkapi.com/v2/beers'
//const search = (term) => `${API}?beer_name=${encodeURIComponent(term)}`;
const search = (apiBase, perPage, term) => `${apiBase}?beer_name=${encodeURIComponent(term)}&per_page=${perPage}`;

export const fetchBeersEpic=(action$, state$)=>{

    return action$.pipe(
        ofType(SEARCH_DATA),
        debounceTime(500),
        filter(({payload})=>payload.trim() != ""),
        withLatestFrom(state$.pipe(pluck("config"))),
        switchMap(([{payload}, config])=>{
            const ajax$ = ajax.getJSON((search(config.apiBase, config.perPage, payload))).pipe(
                delay(5000),
                takeUntil(action$.pipe(ofType(FETCH_CANCEL))),
                map(resp => fetchFulfilled(resp)),
                catchError(err=>{
                    console.log(err)
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



