import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {Subject} from "rxjs/Subject";
export class ShoppingService {

ingredientsChanged = new Subject<Ingredient[]>();

 private ingredients: Ingredient[] =[
        new Ingredient( 'Apples',10 ),
        new Ingredient( 'Potatoes',5 ),
    ];

 startedEditing = new Subject<number>();

  constructor() { }



getIngredient( index: number ){

  return this.ingredients.slice()[index];

}





  updateIngredient(index:number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());

  }

  deleteIngredient(index:number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
