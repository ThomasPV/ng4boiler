import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {NgForm} from '@angular/forms';
import { Store } from '@ngrx/store';
import {Subscription} from 'rxjs/Subscription';
import * as ShoppingListActions from '../shopping-list.actions';
import * as fromShoppingList from '../shopping-list.reducers';
import * as fromApp from '../../store/app.reducer';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy{
  @ViewChild('f') form : NgForm;
  name: string;
  amount: number;
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;


ingredient: Ingredient;

  constructor( private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscription =   this.store.select('shoppingList')
        .subscribe(
          data => {
              if(data.editedIngredientIndex > -1){
                console.log(data);
                this.editedItem = data.editedIngredient;
                this.editMode = true;
                this.form.setValue({
                  name : this.editedItem.name,
                  amount : this.editedItem.amount
                });
              }else{
                this.editMode = false;
              }
           }
        );

  }

    addIngredient(form: NgForm){

          const value = form.value;
          if(this.editMode){

            this.store.dispatch(new ShoppingListActions.UpdateIngredient({ingredient: new Ingredient(value.name, value.amount)}));

          }else{
            this.store.dispatch(new ShoppingListActions.AddIngredient(new Ingredient(value.name, value.amount)));

          }
          this.editMode = false;
          this.form.reset();
      }

      onClear(){

      this.form.reset();
      this.editMode = false;

      }

      onDelete(){

        this.store.dispatch(new ShoppingListActions.DeleteIngredient());
        this.onClear();

      }



  ngOnDestroy(){
      this.store.dispatch( new ShoppingListActions.StopEdit() );
      this.subscription.unsubscribe();
  }

}
