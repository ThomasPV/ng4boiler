import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import { Store } from '@ngrx/store';
import * as fromAuth from '../store/auth.reducers';
import * as fromApp from '../../store/app.reducer';
import * as fromAuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private  authService: AuthService, private router: Router, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm){

    const email= form.value.email;
    const password = form.value.password;
    this.store.dispatch(new fromAuthActions.TrySignin({username:email, password:password}));

  }


}
