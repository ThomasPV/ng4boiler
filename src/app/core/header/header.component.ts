import { Component , EventEmitter, Output, OnInit } from '@angular/core';
import {RecipieService} from "../../recipies/recipie.service";
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as fromAuth from '../../auth/store/auth.reducers';
import { Observable } from 'rxjs/Observable';
import * as fromAuthActions from '../../auth/store/auth.actions';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent implements OnInit {

  authState : Observable<fromAuth.State>;

  constructor(
    private recipieService: RecipieService ,
    public authService: AuthService ,
    private router: Router,
    public store: Store<fromApp.AppState>
      ){}

  onPutRecipies(){

    this.recipieService.putRecipies().subscribe((response) =>{

      console.log(response);

    });

  }
  onLogout(){

    this.store.dispatch(new fromAuthActions.LogOut());

  }

test(){

this.router.navigate(['/recipie']);

}
  ngOnInit(){
      this.authState = this.store.select('auth');
  }



}
