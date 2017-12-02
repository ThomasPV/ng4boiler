import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Subject} from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as fromAuthActions from './store/auth.actions';


@Injectable()
export class AuthService {

  tokenChanged = new Subject<string>();

  signUpUser(email: string, password: string){

    console.log(email);


    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .then(
    //     (user) => {
    //         this.store.dispatch(new fromAuthActions.SignUp());
    //         firebase.auth().currentUser.getToken()
    //           .then((token: string) => {
    //               this.store.dispatch(new fromAuthActions.SetToken(token));
    //
    //           });
    //     }
    //   )
    //   .catch(
    //     error => console.log(error)
    //   );

  }

  signInUser(email: string, password: string ){
    this.store.dispatch(new fromAuthActions.TrySignin({username:email, password:password}));

  }


logout(){
    firebase.auth().signOut();
    this.store.dispatch(new fromAuthActions.LogOut());
  }

  constructor(private store: Store<fromApp.AppState>){}

}
