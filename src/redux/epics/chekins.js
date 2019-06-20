import {ajax} from 'rxjs/ajax'
import {map, catchError, } from 'rxjs/operators'
import { ofType } from 'redux-observable';
import { concat, of } from 'rxjs';
import {fetchChekinsSuccess} from '../ducks/chekins'


export const fetchChekins=(action$, state$)=>{           
        return ajax.getJSON('https://runa-chekin.herokuapp.com/chekins').pipe(
            map(resp => fetchChekinsSuccess(resp))
        )        
}