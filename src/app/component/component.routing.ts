import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { AdminUserListComponent } from '../user/admin-user-list/admin-user-list.component';
import { RecipeboxUserlistComponent } from '../user/recipebox-userlist/recipebox-userlist.component';
import { RbUserdetailComponent } from '../user/rb-userdetail/rb-userdetail.component';
import { RecipeListComponent } from '../../app/recipe/recipe-list/recipe-list.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'userList',
				component: AdminUserListComponent
			},
			{
				path: 'rbuserList',
				component: RecipeboxUserlistComponent
			},
			{
				path: 'rbuserDetail/:userId',
				component: RbUserdetailComponent
			},
			{
				path: 'recipesList',
				component: RecipeListComponent
			},
			// {
			// 	path: 'packages',
			// 	component: NgbdpaginationBasicComponent
			// },
			// {
			// 	path: 'recipes',
			// 	component: BadgeComponent
			// },
			// {
			// 	path: 'kpidashboard',
			// 	component: NgbdAlertBasicComponent
			// }			
		]
	}
];
