import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as fromAuthActions from '../auth/store/auth.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import { fromPromise } from 'rxjs/observable/fromPromise';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()

export class AuthEffects {

  @Effect()
  authSignUp = this.actions$
    .ofType(fromAuthActions.TRY_SIGNUP)
    .map((action: fromAuthActions.TrySignup)=>{
      return action.payload;
    })
    .switchMap((authData: {username:string, password:string})=>{
      return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
    })
    .switchMap(()=>{
      return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token: string)=>{
        this.router.navigate(['/recipie']);
        return [
          {
            type: fromAuthActions.SIGNUP
          },
          {
            type: fromAuthActions.SET_TOKEN,
            payload: token
          }
        ];

    });
  @Effect()
  authSignin = this.actions$
      .ofType(fromAuthActions.TRY_SIGNIN)
      .map((action: fromAuthActions.TrySignin)=>{
        return action.payload;
      })
      .switchMap((authData: {username:string, password:string})=>{
        return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));

      })
      .switchMap(()=>{
        return fromPromise(firebase.auth().currentUser.getIdToken());
      })
      .mergeMap((token: string)=>{
          this.router.navigate(['/recipie']);
          console.log(token);
          return [
            {
              type: fromAuthActions.SIGNIN
            },
            {
              type: fromAuthActions.SET_TOKEN,
              payload: token
            }
          ];

      });
    @Effect({dispatch:false})
    authLogout = this.actions$
      .ofType(fromAuthActions.LOGOUT)
      .do(()=>{
        firebase.auth().signOut();
        this.router.navigate(['/']);

      });

  constructor(private actions$: Actions, private router: Router){}
}
