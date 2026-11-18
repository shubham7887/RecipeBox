import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserRoutingModule } from "./user-routing.module";
import { AdminUserListComponent } from "./admin-user-list/admin-user-list.component";
import { RecipeboxUserlistComponent } from "./recipebox-userlist/recipebox-userlist.component";
import { RbUserdetailComponent } from "./rb-userdetail/rb-userdetail.component";
import { NgbdpaginationBasicComponent } from "../../app/component/pagination/pagination.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UserManagementFilterComponent } from "./user-management-filter/user-management-filter.component";

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule  
    ],
  declarations: [
    AdminUserListComponent,
    RecipeboxUserlistComponent,
    RbUserdetailComponent,
    UserManagementFilterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class UserModule {}
