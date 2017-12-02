import { Action } from '@ngrx/store';
import { Recipie } from '../recipie.model';

export const SET_RECIPES = 'SET_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';
export const UPDATE_RECIPIE = 'UPDATE_RECIPIE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

export class SetRecipes implements Action {
  readonly type  = SET_RECIPES;
  constructor(public payload: Recipie[]){}
}
export class AddRecipie implements Action {
  readonly type = ADD_RECIPE ;
  constructor(public payload: Recipie){}
}
export class UpdateRecipie implements Action {
  readonly type = UPDATE_RECIPIE ;
  constructor(public payload: { index:number , recipie:Recipie }){}
}
export class DeleteRecipie implements Action {
  readonly type = DELETE_RECIPE ;
  constructor(public payload: number){}

}

export type RecipieActions = SetRecipes  | AddRecipie | UpdateRecipie | DeleteRecipie ;
