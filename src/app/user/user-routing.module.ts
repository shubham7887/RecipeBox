import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { RbUserdetailComponent } from './rb-userdetail/rb-userdetail.component';
import { RecipeboxUserlistComponent } from './recipebox-userlist/recipebox-userlist.component';

export const routes: Routes = [
  {
  path: '',
  children: [
    {
      path: 'userList',
      data: {
        title: "userList",
        urls: [{ title: "userList", url: "/userList" }, { title: "userList" }],
      },
      component: AdminUserListComponent
    },
    {
      path: 'rbuserList',
      data: {
        title: "rbuserList",
        urls: [{ title: "rbuserList", url: "/rbuserList" }, { title: "rbuserList" }],
      },
      component: RecipeboxUserlistComponent
    }
    ,
    {
      path: 'rbuserDetail',
      data: {
        title: "rbuserDetail",
        urls: [{ title: "rbuserDetail", url: "/rbuserDetail/:userId" }, { title: "rbuserDetail" }],
      },
      component: RbUserdetailComponent
    }
    
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
