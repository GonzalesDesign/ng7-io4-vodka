import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CollectionRussiaDetailPage } from './collection-russia-detail.page';

const routes: Routes = [
	{
		path: '',
		component: CollectionRussiaDetailPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [CollectionRussiaDetailPage]
})
export class CollectionRussiaDetailPageModule {}
