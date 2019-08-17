import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionInterface } from '../../collection.model';
import { CollectionService } from 'src/services/collection.service';
import { RussianCocktailsService } from 'src/services/russian-cocktails.service';
import { CocktailsInterface } from 'src/services/cocktails.model';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-collection-russia-detail',
	templateUrl: './collection-russia-detail.page.html',
	styleUrls: ['./collection-russia-detail.page.scss']
})
export class CollectionRussiaDetailPage implements OnInit {
	// public loadedDetailOrig: CollectionInterface;
	public loadedDetailX2: CocktailsInterface[]; // Observable<CocktailsInterface[]>;
	public loadedDetail = []; // : Observable<CocktailsInterface[]>;
	public id = null;
	public information = null;
	public aCocktailsData = null;
	public titolo: string;

	public cocktail: CocktailsInterface = {
		id: 'string',
		brand: 'string',
		title: 'string',
		imageUrl: 'string',
		description: 'string',
		aCollection: [],
		aCocktails: [],
		cocktail: 'string',
		cocktailImage: 'string',
		recipe: [],
		ingredient: 'string',
		part: 'string',
		instruction: 'string'
	};

	constructor(
		private _activatedRoute: ActivatedRoute,
		// private _collectionService: CollectionService,
		private _russianCocktailsService: RussianCocktailsService
	) {}

	ngOnInit() {
		// this._activatedRoute.paramMap.subscribe(paramMap => {
		//   const idCustom = paramMap.get('customId');
		//   this.loadedDetail = this._collectionService.fGetCustom(idCustom);
		// });

		// this._activatedRoute.paramMap.subscribe(paramMap => {
		// 	const idCustom = paramMap.get('customId');
		// 	const detailData = this._russianCocktailsService.fGetCocktailDetail(
		// 		idCustom
		// 	);
		// 	this.loadedDetail.push(detailData);
		// 	console.log('this.loadedDetail: ', this.loadedDetail);
		// });

		// this.id = this.cocktail.findIndex(this._activatedRoute.snapshot.paramMap.get('customId'));
		this.id = this._activatedRoute.snapshot.paramMap.get('customId');
		// console.log('this.id: ', this.id);
		// const result = this.information.id;
		// console.log('result: ', result);
		// console.log('result.indexOf(this.id): ', result.indexOf(this.cocktail.id));

		// this._russianCocktailsService
		// 	.fGetCocktailDetail(this.id)
		// 	.subscribe(result => {
		// 		this.information = result;
		// 		console.log('result: ', result);
		// 		console.log('result.title: ', result[0].title);
		// 		console.log('aCocktailsData: ', result[0].aCocktailsData[0].cocktail);
		// 	});

		// console.log('this.information: ', this.information);

		// if (this.id) {
		// 	this._russianCocktailsService
		// 		.fGetCocktailDetail(this.id)
		// 		.subscribe(cocktail => {
		// 			this.cocktail = cocktail;
		// 		});
		// }

		// this._russianCocktailsService.fetchUsers();

		// this.fGetDetail();
	}

	ionViewWillEnter() {
		this._russianCocktailsService
			.fGetCocktailDetail(this.id)
			.subscribe(result => {
				this.aCocktailsData = result;
				const index = this.aCocktailsData.findIndex( x => x.id === this.id);
				
				// console.log('this.aCocktailsData: ', this.aCocktailsData);
				// console.log('index: ', index);
				
				// this.information = result;
				// console.log('this.information: ', this.information);

				// const idNum = result[0].id;
				// console.log('idNum: ', idNum);
				// console.log('this.id: ', this.id);

				// const indx = this.information.findIndex( x => { x.id == this.id
				// 	// console.log('x: ', x);
				// 	console.log( 'x.id: ', x.id );
				// 	console.log( 'this.id: ', this.id );
				// } );
				// console.log('indx: ', indx);

				// const index = this.information.findIndex( x => x.id === this.id);
				// console.log('index: ', index);

				this.titolo = this.aCocktailsData[index].title;
				// console.log('this.titolo: ', this.titolo);

				// this.loadedDetail = result[index];
				// console.log('this.loadedDetail: ', this.loadedDetail);

				// console.log('result: ', result, this.id);
				// console.log('result.title: ', result[this.id].title);
				// console.log('aCocktailsData: ', result[0].aCocktailsData[0].cocktail);
				// // const indx = this.id.findIndex(result => result.id == this.id);
				// // const indx = result.findIndex(x => { x.id } )
				// // console.log('indx: ', indx);
				// console.log('indexOf: ', this.information.indexOf(this.titolo));
			});

		// // Get the information from the API
		// this._russianCocktailsService
		// 	.fGetCocktailDetail(this.id)
		// 	.subscribe(result => {
		// 		// this.loadedDetail = result;
		// 		// this.loadedDetail[this.loadedDetail.length] = result;
		// 		// this.loadedDetail.push(result);
		// 		// console.log('this.loadedDetail: ', this.loadedDetail);
		// 		// console.log('result.title: ', result[0].title);
		// 		// this.titolo = result[0].title;
		// 		// for (const dataRussian of result) {
		// 		// 	console.log('dataRussian: ', dataRussian);
		// 		// }
		// 		// console.log('this.information: ', this.information);
		// 	});
	}

	public fGetDetail() {
		this._activatedRoute.paramMap.subscribe(paramMap => {
			const idCustom = paramMap.get('customId');
			// console.log('idCustom: ', idCustom);
			// console.log('fGetDetail: ', this._russianCocktailsService.fGetDetail(idCustom));
			// this.loadedDetailX =
			this._russianCocktailsService.fGetCocktailDetail(idCustom);
			// console.log('this.loadedDetailX: ', this.loadedDetailX);
		});
	}
}
