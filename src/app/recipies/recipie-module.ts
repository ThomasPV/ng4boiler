import {NgModule} from "@angular/core";
import {RecipieEditComponent} from "./recipie-edit/recipie-edit.component";
import {RecipieItemComponent} from "./recipie-list/recipie-item/recipie-item.component";
import {RecipieDetailComponent} from "./recipie-detail/recipie-detail.component";
import {RecipieListComponent} from "./recipie-list/recipie-list.component";
import {RecipiesComponent} from "./recipies.component";
import {SelectRecipieComponent} from "./select-recipie/select-recipie.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from '@angular/router';
import {TruncateDirective} from "./truncate.directive";
import {SharedModule} from "../shared/shared.module";
import { RecipieRoutingModule } from "./recipie-routing.module";
import { StoreModule } from '@ngrx/store';
import { recipieReducer } from './store/recipie.reducers';

@NgModule({
  declarations:[
    RecipiesComponent,
    RecipieListComponent,
    RecipieDetailComponent,
    RecipieItemComponent,
    RecipieEditComponent,
    SelectRecipieComponent,
    TruncateDirective
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    RecipieRoutingModule,
    StoreModule.forFeature('recipes',recipieReducer)
  ],
})

export class RecipieModule{}
