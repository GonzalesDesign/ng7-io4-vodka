import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GiftsPage } from './gifts.page';
import { SharedModule } from 'src/app/shared.module';

const routes: Routes = [
	{
		path: '', component: GiftsPage,
		// children: [{
		// 	path: '', loadChildren: ''
		// }]
	}
];

@NgModule({
	imports: [
		// CommonModule,
		// FormsModule,
		// IonicModule,
		RouterModule.forChild(routes),
		SharedModule
	],
	declarations: [GiftsPage]
})
export class GiftsPageModule {}
