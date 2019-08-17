import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { SharedModule } from 'src/app/shared.module';
import { PopoverPage } from './contact/popover/popover.page';


/*--=| BOTTOM TABS ROUTES |=--*/
const routes: Routes = [
	{ path: '', component: HomePage, children: [
			
			{ path: 'about-us', children: [
				{ path: '', loadChildren: './about-us/about-us.module#AboutUsPageModule' },
			]},

			{ path: 'contact', children: [
				{ path: '', loadChildren: './contact/contact.module#ContactPageModule' },
			]},
		]
	},
	{ path: '', redirectTo: 'about-us', pathMatch: 'full' }
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
		HomePage
		// PopoverPage
	]
})
export class HomePageModule {}
