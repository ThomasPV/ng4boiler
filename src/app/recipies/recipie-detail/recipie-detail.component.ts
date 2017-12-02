import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipie.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/shopping-list.actions';
import * as fromShoppingList from '../../shopping-list/shopping-list.reducers';
import * as fromApp from '../../store/app.reducer';
import { Observable } from 'rxjs/Observable';
import * as fromRecipie  from '../store/recipie.reducers';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {

recipieDetailMain: Observable<fromRecipie.State>;
recipie: Recipie;
id: number;
  constructor(private router:Router, private recipieService: RecipieService, private routes : ActivatedRoute , private store: Store<fromRecipie.FeatureState> ) { }

  ngOnInit() {



    this.routes.params
      .subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipieDetailMain = this.store.select('recipes');
      });

  }

 onAddToShoppingList(){

this.store.select('recipes')
 .take(1)
 .subscribe((recipes : fromRecipie.State)=>{
    this.store.dispatch(new ShoppingListActions.AddIngredients(recipes.recipes[this.id].ingredients));
 });



 }
 onDeleteRecipie(){

   this.recipieService.deleteRecipie(this.id);
   this.router.navigate(['/recipie']);

 }


}
