import {Component, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Store } from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import * as fromShoppingList from './shopping-list.reducers';
import * as ShoppingListActions from './shopping-list.actions';
import * as fromApp from '../store/app.reducer';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    shoppingListstate: Observable<fromShoppingList.State>;


  constructor(private shopping:ShoppingService, private store: Store<fromApp.AppState> ) {

  }



  ngOnInit() {
      this.shoppingListstate = this.store.select('shoppingList');

  }




  onEditItem(index: number){
      console.log(index);
       this.store.dispatch(new ShoppingListActions.StarEdit(index));
  }


}
