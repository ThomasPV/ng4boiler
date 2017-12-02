import {EventEmitter, Injectable, OnInit} from '@angular/core';
import { Recipie } from './recipie.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {AuthService} from "../auth/auth.service";
import { Store } from '@ngrx/store';
import * as fromRecipie from './store/recipie.reducers';
import * as fromRecipieActions from './store/recipie.actions';

@Injectable()
export class RecipieService implements OnInit{
  recipiesChanged = new Subject<Recipie[]>();

  recipieSelected = new EventEmitter<Recipie>();

    token:string = null;



    private recipies: Recipie[] = [];

    ngOnInit(){


    }

    updateRecipies(token:string){

      this.http.get<Recipie[]>('https://angular5-54155.firebaseio.com/data.json')
        .subscribe((recipes) => {

          this.recipies = recipes;

          this.recipiesChanged.next(this.recipies.slice());


        });

    }


    putRecipies(){


      return this.http.put('https://angular5-54155.firebaseio.com/data.json', this.recipies);

    }

    getRecipies(){

        this.http.get<Recipie[]>('https://angular5-54155.firebaseio.com/data.json')
          .subscribe((recipes) => {

          this.recipies = recipes;
          this.store.dispatch(new fromRecipieActions.SetRecipes(this.recipies));



          });

        return this.recipies.slice();


    }




    getRecipie(id: number){

      return this.recipies[id];
    }



    addRecipie(recipie: Recipie){

      this.recipies.push(recipie);
      this.recipiesChanged.next(this.recipies.slice());

    }
    updateRecipie(index: number, newRecipie: Recipie){

      this.recipies[index] = newRecipie;
      this.recipiesChanged.next(this.recipies.slice());


    }
    deleteRecipie(index: number){

      this.recipies.splice(index, 1);
      this.recipiesChanged.next(this.recipies.slice());

    }




  constructor(
    private shoppingService: ShoppingService,
     private http : HttpClient ,
     private authService: AuthService,
    private store: Store<fromRecipie.FeatureState>) {



  }

}
