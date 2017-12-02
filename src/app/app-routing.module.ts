import {NgModule} from '@angular/core';
import { RouterModule , Routes, PreloadAllModules} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {HomeComponent} from './core/home/home.component';
import {AuthLoad} from './auth/auth-load.service';



const appRoutes: Routes = [
  {path: '', component: HomeComponent , pathMatch: 'full' },
  {path: 'shopping-list', component: ShoppingListComponent },
  {path: 'recipie', loadChildren: './recipies/recipie-module#RecipieModule', canLoad:[AuthLoad] },
  {path: 'signup', component: SignupComponent },
  {path: 'signin', component: SigninComponent }


  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers:[AuthLoad]
})
export class AppRoutingModule{}
