import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import { Store } from '@ngrx/store';
import * as fromAuth from '../store/auth.reducers';
import * as fromApp from '../../store/app.reducer';
import * as fromAuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService , private store: Store<fromApp.AppState> ) { }

  ngOnInit() {
  }

  onSubmitForm(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new fromAuthActions.TrySignup({username:email, password:password}));
  }

}
