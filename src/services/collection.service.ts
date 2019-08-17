import { Injectable } from '@angular/core';
import { CollectionInterface } from 'src/app/pages/collection/collection.model';

@Injectable({
	providedIn: 'root'
})
export class CollectionService {
	private aCollectionRussia: CollectionInterface[] = [
		{
			id: 'p0',
			title: 'Ruskova',
			brand: '',
			imageUrl: './../../../assets/images/ruskova.jpg',
			description:
				'Produced and bottled in a state of the art distillery in Nizhny Novgorod. This vodka is made from only the finest grains grown by the distillery and distilled for ultimate clarity and Russian character.'
			// aCocktails: [
			// 	{ cocktailName: 'Screw Driver',
			// 		cocktailIngredients: {}

			// 	}
			// ]
		},
		{
			id: 'p1',
			title: 'Stolichnaya',
			brand: '',
			imageUrl: './../../../assets/images/stolichnaya.jpg',
			description:
				'Stoli® Group prides itself as one of the few vertically-integrated vodka producers left in the world, as well as a rising force offering the production, marketing, sales and distribution of high-quality premium spirits to today’s savvy global consumer. We are proud of our top-quality production team and facilities across Russia, Latvia, Spain, Italy, Mexico, Argentina and the United States – some of which are steeped in history as early as the 1900s.'
			// aCocktails: [
			// 	{ cocktailName: 'Screw Driver'

			// 	}
			// ]
		}
	];

	constructor() {}

	public fGetAllCustoms() {
		return [...this.aCollectionRussia]; // spread, makes copy of the private version and return a new array
	}

	public fGetCustom(id: string) {
		return {
			...this.aCollectionRussia.find(custom => {
				return custom.id === id;
			})
		}; // spread, make copy and makes an object
	}
}
