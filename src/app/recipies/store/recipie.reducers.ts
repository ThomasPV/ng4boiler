import { Recipie } from '../recipie.model';
import * as fromRecipieActions from './recipie.actions';



export interface State {
  recipes: Recipie[];

}

export interface FeatureState {
  recipes: State;
}

const initialState: State = {

 recipes: []

};

export function recipieReducer(state = initialState ,action: fromRecipieActions.RecipieActions){
  switch(action.type){
    case fromRecipieActions.SET_RECIPES:
    {return {
      ...state,
      recipes:[...action.payload]
    }}
    case fromRecipieActions.ADD_RECIPE:
    { return {
      ...state,
      recipes:[...state.recipes,action.payload]
    }}
    case fromRecipieActions.UPDATE_RECIPIE:
    {
      const recipie = state.recipes[action.payload.index];
      const updatedRecipie = {...recipie, ...action.payload.recipie};
      const newRecipes = [...state.recipes];
      newRecipes[action.payload.index] = updatedRecipie;

      return {
      ...state,
      recipes: newRecipes
    }}
    case fromRecipieActions.DELETE_RECIPE:
    {
      const oldRecipies = [...state.recipes];
      oldRecipies.splice(action.payload, 1);
      return {
      ...state,
      recipes: oldRecipies
    }}
    default: return state;


  }

}
