import {CanLoad, Route} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import { Store } from '@ngrx/store';
import * as fromAuth from './store/auth.reducers';
import * as fromApp from '../store/app.reducer';
import { Observable } from 'rxjs/Observable'


@Injectable()
export class AuthLoad implements CanLoad {

  constructor(private store: Store<fromApp.AppState>){}

  canLoad(route: Route ){
        return this.store.select('auth')
        .take(1)
        .map((authState: fromAuth.State)=>{
        return authState.authenticated;
        });

  }
}
