import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SideMenuPage } from './side-menu.page';
import { SharedModule } from 'src/app/shared.module';
import { PopoverPage } from '../home/contact/popover/popover.page';

const routes: Routes = [
	{ path: '', component: SideMenuPage, children: [

			{ path: 'home', children: [
				{path: '', loadChildren: './../home/home.module#HomePageModule' },
				// { path: 'contact', loadChildren: './../home/contact/contact.module#ContactPageModule' }
			]},
			{ path: 'collection', children: [
				{path: '', loadChildren: './../collection/collection.module#CollectionPageModule' },
				// { path: 'contact', loadChildren: './../home/contact/contact.module#ContactPageModule' }
			]},
			{ path: 'gifts', children: [
				{path: '', loadChildren: './../gifts/gifts.module#GiftsPageModule' },
				// { path: 'contact', loadChildren: './../home/contact/contact.module#ContactPageModule' }
			]},
			// { path: 'collection', loadChildren: './../collection/collection.module#CollectionPageModule' },
			// { path: 'gifts', loadChildren: './../gifts/gifts.module#GiftsPageModule' }
		]
	},
	{ path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
	imports: [
		// CommonModule,
		// FormsModule,
		// IonicModule,
		RouterModule.forChild(routes),
		SharedModule
	],
	declarations: [
		SideMenuPage,
		// PopoverPage
	]
})
export class SideMenuPageModule {}
