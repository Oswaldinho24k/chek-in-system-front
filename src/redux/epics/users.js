import {ajax} from 'rxjs/ajax'
import {map, catchError, } from 'rxjs/operators'
import { ofType } from 'redux-observable';
import { concat, of } from 'rxjs';
import {fetchUsersSuccess} from '../ducks/users'


export const fetchUsers=(action$, state$)=>{           
        return ajax.getJSON('https://runa-chekin.herokuapp.com/users').pipe(
            map(resp => fetchUsersSuccess(resp))
        )        
}