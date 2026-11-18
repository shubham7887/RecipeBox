import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { RecipeRoutingModule } from "./recipe-routing.module";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RecipeManagementFilterComponent } from './recipe-management-filter/recipe-management-filter.component';

@NgModule({
  declarations: [RecipeListComponent, RecipeManagementFilterComponent],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class RecipeModule {}
