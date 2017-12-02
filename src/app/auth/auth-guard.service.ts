import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as fromAuth from './store/auth.reducers';

@Injectable()
export class AuthGuard implements CanActivate {



  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot) {
    return this.store.select('auth').take(1).map((authState: fromAuth.State) =>{
      return authState.authenticated;
    });
  }

  constructor(private store: Store<fromApp.AppState>){}

}
