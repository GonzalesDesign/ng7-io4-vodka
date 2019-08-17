import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CollectionPage } from './collection.page';
import { SharedModule } from 'src/app/shared.module';

const routes: Routes = [
  {
	path: '', component: CollectionPage,
	children: [
		{ path: 'collection-mexico', children: [
			{ path: '', loadChildren: './collection-mexico/collection-mexico.module#CollectionMexicoPageModule' },
				{ path: ':cocktailId', children: [
					{ path: '', loadChildren: './../collection/collection-mexico/cocktails/cocktails.module#CocktailsPageModule' },
					{ path: ':detailId', loadChildren: './../collection/collection-mexico/cocktails/cocktail-detail/cocktail-detail.module#CocktailDetailPageModule' }
				]}
		]},
		// { path: 'collection-mexico', children: [
		// 	{ path: '', loadChildren: './collection-mexico/collection-mexico.module#CollectionMexicoPageModule' },
		// 		{ path: ':cocktailId', children: [
		// 			{ path: '', loadChildren: './../collection/collection-mexico/cocktails/cocktails.module#CocktailsPageModule' },
		// 				{ path: ':detailId', children: [
		// 					{ path: '', loadChildren: './../collection/collection-mexico/cocktails/cocktail-detail/cocktail-detail.module#CocktailDetailPageModule' }
		// 				]}
		// 		]}
		// ]},

		{ path: 'collection-russia', children: [
			{ path: '',  loadChildren: './collection-russia/collection-russia.module#CollectionRussiaPageModule' },
			{ path: ':customId', children: [
				{ path: '', loadChildren: './../collection/collection-russia/collection-russia-detail/collection-russia-detail.module#CollectionRussiaDetailPageModule' },
				{ path: ':customId', loadChildren: './../collection/collection-russia/collection-russia-detail/russian-drinks/russian-drinks.module#RussianDrinksPageModule' }
			]}
		]},

		{ path: 'collection-finland', loadChildren: './collection-finland/collection-finland.module#CollectionFinlandPageModule' },
		{ path: 'collection-usa', loadChildren: './collection-usa/collection-usa.module#CollectionUsaPageModule' }
	]
  },
  { path: '', redirectTo: 'collection-mexico', pathMatch: 'full' }
];

@NgModule({
  imports: [
	// CommonModule,
	// FormsModule,
	// IonicModule,
	RouterModule.forChild(routes),
	SharedModule
  ],
  declarations: [CollectionPage]
})
export class CollectionPageModule {}
