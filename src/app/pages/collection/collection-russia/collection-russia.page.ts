import { Component, OnInit, HostListener } from '@angular/core';
import { CollectionInterface } from '../collection.model';
import { CollectionService } from 'src/services/collection.service';
import { CocktailsInterface } from 'src/services/cocktails.model';
import { RussianCocktailsService } from 'src/services/russian-cocktails.service';
import { Subscription } from 'rxjs';
import { MediaQueriesService } from 'src/services/media-queries.service';

/*--=| INTERFACE |=--*/
export interface RussianIntroInterface {
	headerTitle: string;
	headerSubTitle: string;
	headerDescription: string;
	headerImageUrl: string;
	giftBasket: {
		id: string;
		basketTitle: string;
		basketSubTitle: string;
		basketImageUrl: string;
		basketDescription: string;
		basketPrice: string;
	}[];
}

@Component({
	selector: 'app-collection-russia',
	templateUrl: './collection-russia.page.html',
	styleUrls: ['./collection-russia.page.scss']
})
export class CollectionRussiaPage implements OnInit {
	
	/*--=| PUBLIC DATA ARRAY |=--*/
	public aRussianIntroData = [];
	/*--=| PRIVATE DATA |=--*/
	private pRussianIntroData: RussianIntroInterface[] = [
		{
			headerTitle: 'Russian Collections',
			headerSubTitle: 'From Russia With Love',
			headerDescription: 'Vodka brand Russian Standard has joined the circus after inking a multi-year sponsorship deal with Cirque du Soleil to become the official vodka partner of touring shows across North America.',
			headerImageUrl: './../../../assets/images/Russian/RussianStandard.jpg',
			giftBasket: [
				{
					id: 'g0',
					basketTitle: 'Grey Goose VX',
					basketSubTitle: 'Awesome Vodka',
					basketImageUrl:
						'./../../../assets/images/Vodka-Baskets/GreyGoose.jpg',
					basketDescription:
						'Make your next occasion truly special with this beautifully presented gift basket featuring Grey Goose VX Vodka.',
					basketPrice: '$189.00'
				}
			]
		}
	];


	public aCollectionRussia: CollectionInterface[];

	/*--=| JSON DATA |=--*/
	public aCocktailsRussia: CocktailsInterface[];
	/*--===| rxjs: subscription |===--*/
	public subsCollection: Subscription;
	public aCocktailsData = [];

	/*--===| Media Queries |===--*/
	public collectionMediaQuery = {
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
		private _collectionService: CollectionService,
		private _russianCocktailsService: RussianCocktailsService,
		private _mediaQueries: MediaQueriesService
	) {}

	ngOnInit() {
		/*--=| RUSSIAN INTRO DATA: PUBLIC ARRAY POPULATION |=--*/
		this.aRussianIntroData = this.fGetRussianIntroData();
		/*--===| Media Queries |===--*/
		this._mediaQueries.fMediaQueries();
		this.collectionMediaQuery = this._mediaQueries.mediaQueries;
		console.log('this.collectionMediaQuery.hideOnSmallScreen: ', this.collectionMediaQuery.hideOnSmallScreen);

		/*--=| RUSSIAN COLLECTION DATA: PUBLIC ARRAY POPULATION |=--*/
		this.aCollectionRussia = this._collectionService.fGetAllCustoms();

		/*-===============================================================
        =---------------=|••• OBSERVABLE •••|=---------------------------=
        ================================================================-*/
		this.subsCollection = this._russianCocktailsService
			.fGetAllCocktailData()
			.subscribe(data => {
				const ruskovaData: any = data[0];
				// console.log('data.length: ', data.length);
				// console.log('ruskovaData: ', ruskovaData);
				// console.log('ruskovaData.title: ', ruskovaData.title);
				// console.log('ruskovaData.description: ', ruskovaData.description);
				this.aCocktailsRussia = data;
				// console.log('aCocktailsRussia: ', this.aCocktailsRussia);
				/**********************************************************************
                Ruskova: Collect data and populate array
            	**********************************************************************/
				// for (let l = 0; l < ruskovaData.aCocktails.length; l++)
				for (const dataRuskova of ruskovaData.aCocktails) {
					// this.aCocktailsData[this.aCocktailsData.length] = dataRuskova;

					// this.aCocktailsData[this.aCocktailsData.length] = ruskovaData.aCocktails[l];
					// console.log('ruskovaData.aCocktails[l]: ', ruskovaData.aCocktails[l]);
					// console.log('cocktail name: ', ruskovaData.aCocktails.cocktail);
					// console.log('aCocktailsData: ', this.aCocktailsData);
					// console.log('dataRuskova: ', dataRuskova);
				}

				for (const dataRussian of this.aCocktailsRussia) {
					// console.log('dataRussian: ', dataRussian);
				}
			});
	}

	/*--=| PROCESSING |=--*/
	public fGetRussianIntroData() {
		console.log('this.pRussianIntroData: ', this.pRussianIntroData);
		return [...this.pRussianIntroData]; // spread, makes copy of the private version and return a new array
	}
	/*-================================
		Viewport Resize: media queries
	===================================-*/
	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this._mediaQueries.fMediaQueries();
		this.collectionMediaQuery = this._mediaQueries.mediaQueries;
		// console.log('this.aboutMediaQuery: ', this.aboutMediaQuery);
		// this.fAnimateVerticalPos(this.multiCardsKontainerId, this.aboutMediaQuery.aboutMultiCardsYPos);
	}
}



