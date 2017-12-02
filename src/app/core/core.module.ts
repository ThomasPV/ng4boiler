import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import {AuthService} from "../auth/auth.service";
import {AuthInterceptor} from "../shared/auth.interceptor";
import { ShoppingService } from '../shopping-list/shopping.service';
import {RecipieService} from "../recipies/recipie.service";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations:[
    HomeComponent,
    HeaderComponent ],
  imports:[
    CommonModule,
    SharedModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    SharedModule,
    HeaderComponent,
    AppRoutingModule
  ],
  providers:[ShoppingService, RecipieService , AuthService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true} ]
})
export class CoreModule {}
