import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../auth/auth-guard.service";
import {RecipieEditComponent} from "./recipie-edit/recipie-edit.component";
import {RecipieDetailComponent} from "./recipie-detail/recipie-detail.component";
import {SelectRecipieComponent} from "./select-recipie/select-recipie.component";
import {RecipiesComponent} from "./recipies.component";

const recipieRoutes: Routes = [
  {path: '' , component: RecipiesComponent, children: [
    {path: 'new', component: RecipieEditComponent, canActivate:[AuthGuard] },
    {path: '', component: SelectRecipieComponent, pathMatch: 'full' },
    {path: ':id', component: RecipieDetailComponent},
    {path: ':id/edit', component: RecipieEditComponent,  canActivate:[AuthGuard] }
  ]}
];


@NgModule({
  imports:[RouterModule.forChild(recipieRoutes)],
  exports:[RouterModule],
  providers:[AuthGuard]
})
export class RecipieRoutingModule {}
