import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CollectionMexicoPage } from './collection-mexico.page';

const routes: Routes = [
	{
		path: '',
		component: CollectionMexicoPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		CollectionMexicoPage
	]
})

export class CollectionMexicoPageModule {}
