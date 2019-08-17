import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from 'src/services/collection.service';
import { CollectionInterface } from '../../../collection.model';

@Component({
	selector: 'app-russian-drinks',
	templateUrl: './russian-drinks.page.html',
	styleUrls: ['./russian-drinks.page.scss']
})
export class RussianDrinksPage implements OnInit {
	public loadedDetail2: CollectionInterface;
	public cocktailTitle = '';

	constructor(
		private _activatedRoute: ActivatedRoute,
		private _collectionService: CollectionService
	) {}

	ngOnInit() {
		this._activatedRoute.paramMap.subscribe(paramMap => {
			const idCustom = paramMap.get('customId');
			console.log('idCustom: ', idCustom);
			// this.loadedDetail2 = this._collectionService.fGetCustom(idCustom);
			// console.log('this.loadedDetail2: ', this.loadedDetail2);
			// const getCustomId = this._collectionService.fGetCustom(idCustom);
			// console.log('getCustomId: ', getCustomId);
			// this.loadedDetail2 = 
			
			// this._collectionService.fGetCustom(idCustom)
			// 	.subscribe(result => {
			// 		this.loadedDetail2 = result;
			// 	});



		});
	}
}
