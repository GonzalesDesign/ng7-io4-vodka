import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailsService } from 'src/services/cocktails.service';
import { CocktailsInterface } from 'src/services/cocktails.model';
import { CollectionInterface } from '../../collection.model';
import { MediaQueriesService } from 'src/services/media-queries.service';

@Component({
	selector: 'app-cocktails',
	templateUrl: './cocktails.page.html',
	styleUrls: ['./cocktails.page.scss']
})
export class CocktailsPage implements OnInit {
	public collectionMotto = '';
	public collectionBrand = '';
	public collectionDescription = '';

	public id = null;
	public idx = null;
	public collectionData = null; // : CollectionInterface[]; // = null;
	public aCollection = null; // []; // : CocktailsInterface[]; // []; // null;
	// public aCollection: CocktailsInterface[];
	public cocktailTitle = '';
	public aCocktailImage = [];
	public aLoadedDetail = [];
	// public aCollection: CollectionInterface[];
	public aCocktails = []; // : CocktailsInterface[];
	private _url = './../../../../../assets/data/cocktails-mexico.json';

	public cocktailsMediaQuery = {
		hideOnSmallScreen: false,
		aboutGridYPos: 0,
		aboutMultiCardsYPos: 0,
		fontSizeFirstCard: 0,
		fontSizeCards: 0,
		carouselTitleFontSize: 0,
		carouselSubTitleFontSize: 0,
		introCardTitleFontSize: 0,
		introCardSubTitleFontSize: 0,
		introCardParagFontSize: 0,
		cardTitleFontSize: 0,
		cardSubTitleFontSize: 0,
		cardParagFontSize: 0
	};
	
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _router: Router,
		private _cocktailsService: CocktailsService,
		private _mediaQueries: MediaQueriesService
	) {}

	ngOnInit() {
		// this._cocktailsService.fGetAllCocktailData(this._url).subscribe(data => {
		// 	this.collectionDescription = data[0].description;
		// });

		this.id = this._activatedRoute.snapshot.paramMap.get('cocktailId');
		this.idx = this._activatedRoute.snapshot.paramMap.get('detailId');
		// const prevId = parseInt(this._activatedRoute.snapshot.paramMap.get('cocktailId'), 10); // error:NaN
		// this.id = this._activatedRoute.snapshot.paramMap.get('detailId');
		// this.idx = this._activatedRoute.snapshot.paramMap.get('detailId');
		console.log('COCKTAILS.PAGE: this.id: this.idx: ', this.id, this.idx);
		this._cocktailsService
			.fGetCocktailDetail(this._url, this.id)
			.subscribe(res => {
				// this.aCollection = res; // this.id data
				this.collectionData = res; // this.id datas // cocktailId datas // detail page
				console.log('this.collectionData: ', this.collectionData);
				const index = this.collectionData.findIndex(x => x.id === this.id);
				// const index2 = this.collectionData.findIndex(x => x.id === this.idx);
				// console.log('index2: ', index2);
				// const index = res.findIndex(x => x.id === this.id);
				console.log('x.id:index: ', index); // this.id array position : number

				this.aCollection = this.collectionData; // [index]; // res[index];
				// // this.aCollection = res[index];
				console.log('this.aCollection: ', this.aCollection);
				// console.log('this.aCollection.aCocktails: ', this.aCollection.aCocktails);
				// this.aCocktails = res[index].aCocktails;
				// console.log('this.aCocktails: ', this.aCocktails); // need to get the id from the clicked item from aCocktails array

				this.cocktailTitle = this.collectionData[index].title;
				this.collectionMotto = this.collectionData[index].motto;
				this.collectionBrand = this.collectionData[index].brand;
				this.collectionDescription = this.collectionData[index].description;
				// console.log('this.cocktailTitle: ', this.cocktailTitle);

				// for (const kollection of this.collectionData) {
				// 	this.aCollection = kollection.id;
				// 	console.log('this.aCollection: ', this.aCollection);
				// }

				this.aCocktails = res[index].aCocktails;
				console.log('this.aCocktails: ', this.aCocktails);
				// this.aCocktailImage = this.aCocktails[index].cocktailImage;
				// console.log('this.aCocktailImage: ', this.aCocktailImage);

				for (const cocktails of this.aCocktails) {
					this.aCocktailImage[this.aCocktailImage.length] =
						cocktails.cocktailImage;
					// this.cocktailImage = cocktails.cocktailImage;
					console.log('this.aCocktailImage: ', this.aCocktailImage);
				}

				// for (let i=0; i<this.aCocktails.length; i++) {
				// 	console.log('this.aCocktails[i].cocktailImage: ', this.aCocktails[i].cocktailImage);
				// }

				this.aLoadedDetail = res[index];
				// console.log('this.aLoadedDetail: ', this.aLoadedDetail);

				// this.idx = this._activatedRoute.snapshot.paramMap.get('cocktailId');
				// console.log('this.idx: ', this.idx);
				// console.log('this.aLoadedDetail.id: ', this.aLoadedDetail.indexOf(index));
			});
		this._mediaQueries.fMediaQueries();
		this.cocktailsMediaQuery = this._mediaQueries.mediaQueries;
	}

	/*-================================
		Viewport Resize: media queries
	===================================-*/
	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this._mediaQueries.fMediaQueries();
		this.cocktailsMediaQuery = this._mediaQueries.mediaQueries;
		console.log('this.cocktailsMediaQuery: ', this.cocktailsMediaQuery);
	}
}
