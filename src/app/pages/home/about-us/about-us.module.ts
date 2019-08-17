import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AboutUsPage } from './about-us.page';
import { AboutusCarouselPage } from './aboutus-carousel/aboutus-carousel.page';
import { SharedModule } from 'src/app/shared.module';

const routes: Routes = [
	{
		path: '',
		component: AboutUsPage
	}
];

// const routes: Routes = [
// 	{ path: '', component: AboutUsPage, children: [
			
// 			{ path: 'about-us', children: [
// 				{ path: '', loadChildren: './about-us/about-us.module#AboutUsPageModule' },
// 			]}
// 		]
// 	},
// 	{ path: '', redirectTo: 'about-us', pathMatch: 'full' }
// ];

@NgModule({
	imports: [
		// CommonModule,
		// FormsModule,
		// IonicModule,
		RouterModule.forChild(routes),
		SharedModule
	],
	declarations: [
		AboutUsPage,
		AboutusCarouselPage
	],
	// schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutUsPageModule {}
