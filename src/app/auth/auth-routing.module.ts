import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/helpers/AuthGuard';
import { RBLoginComponent } from './rblogin/rblogin.component';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "rblogin",
      urls: [{ title: "rblogin", url: "/rblogin" }, { title: "rblogin" }],
    },
    component: RBLoginComponent,
  
  },
];

@NgModule({
    imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule1 { }
