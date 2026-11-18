import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RBLoginComponent } from './rblogin/rblogin.component';
import { RouterModule, Routes } from '@angular/router';

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
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations:[RBLoginComponent]
})
export class AuthModule { }
