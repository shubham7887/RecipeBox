import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

const routes: Routes = [
  {
    path: 'recipeList',
    data: {
      title: "recipeList",
      urls: [{ title: "recipeList", url: "/recipeList" }, { title: "recipeList" }],
    },
    component: RecipeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
