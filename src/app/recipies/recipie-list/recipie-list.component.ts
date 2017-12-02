import {Component, OnInit} from '@angular/core';
import { RecipieService } from "../recipie.service";
import { Recipie } from '../recipie.model';
import {Subscription} from "rxjs/Subscription";
import {AuthService} from "../../auth/auth.service";
import { Store } from '@ngrx/store';
import * as fromRecipie from '../store/recipie.reducers';
import * as fromRecipieActions from '../store/recipie.actions';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {


  recipes: Recipie[];
  recipieState:Observable<fromRecipie.State>;


  constructor(private recipieService: RecipieService, private authService: AuthService, private store:Store<fromRecipie.FeatureState>) { }

  ngOnInit() {

      this.recipieState = this.store.select('recipes');
      this.recipieService.getRecipies();




  }





}
