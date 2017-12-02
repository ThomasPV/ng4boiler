import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {RecipieModule} from './recipies/recipie-module';
import {ShoppingModule} from './shopping-list/shopping.module';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { shoppingListReducer } from './shopping-list/shopping-list.reducers';
import { reducers } from './store/app.reducer';
import { AuthEffects } from './store/auth.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RecipieModule,
    ShoppingModule,
    AuthModule,
    CoreModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
