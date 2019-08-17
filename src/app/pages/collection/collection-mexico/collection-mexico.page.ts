import { Component, OnInit, HostListener } from '@angular/core';
import { CollectionInterface } from '../collection.model';
import { CocktailsInterface } from 'src/services/cocktails.model';
import { Subscription } from 'rxjs';
import { CocktailsService } from 'src/services/cocktails.service';
import { MediaQueriesService } from 'src/services/media-queries.service';

/*--=| INTERFACE |=--*/
export interface MexicanIntroInterface {
	headerTitle: string;
	headerSubTitle: string;
	headerDescription: string;
	headerImageUrl: string;
}

@Component({
	selector: 'app-collection-mexico',
	templateUrl: './collection-mexico.page.html',
	styleUrls: ['./collection-mexico.page.scss']
})
export class CollectionMexicoPage implements OnInit {
	/*--=| PUBLIC DATA ARRAY |=--*/
	public aMexicanIntroData = [];
	/*--=| PRIVATE DATA |=--*/
	private pMexicanIntroData: MexicanIntroInterface[] = [
		{
			headerTitle: 'Mexican Collections',
			headerSubTitle: 'Our Hearts Beat For A Revolution',
			headerDescription: 'We use old-fashioned pot stills and taste-test every batch. Our process, similar to that used to make fine single malt scotches and high-end French cognacs, requires more skill and effort, but we think it’s well worth it.',
			headerImageUrl: './../../../assets/images/mexico/ShrimpCocktail.png'
		}
	];

	// public aCollection: CollectionInterface[];
	public aCocktails: CocktailsInterface[];
	// public collectionDescription = '';
	public subsCollection: Subscription;
	private _url = './../../../../assets/data/cocktails-mexico.json';
	// private _url = './../../../../assets/data/collections-vodka.json';

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
			private _cocktailsService: CocktailsService,
			private _mediaQueries: MediaQueriesService
			) {}

	ngOnInit() {
		/*--=| RUSSIAN INTRO DATA: PUBLIC ARRAY POPULATION |=--*/
		this.aMexicanIntroData = this.fGetMexicanIntroData();
		/*-=================================
        =-----=|••• OBSERVABLE •••|=-----=
        ====================================-*/
		this.subsCollection = this._cocktailsService
			.fGetAllCocktailData(this._url)
			.subscribe(data => {
				this.aCocktails = data;
				console.log('aCocktails: ', this.aCocktails);

				// this.collectionDescription = this.aCocktails[0].description;

				// for (const dataCocktails of this.aCocktails) {
				// 	console.log('dataCocktails: ', dataCocktails);
				// }
			});

		/*--===| Media Queries |===--*/
		this._mediaQueries.fMediaQueries();
		this.collectionMediaQuery = this._mediaQueries.mediaQueries;
	}

	/*--=| PROCESSING |=--*/
	public fGetMexicanIntroData() {
		console.log('this.pMexicanIntroData: ', this.pMexicanIntroData);
		return [...this.pMexicanIntroData]; // spread, makes copy of the private version and return a new array
	}

	/*-================================
		Viewport Resize: media queries
	===================================-*/
	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this._mediaQueries.fMediaQueries();
		this.collectionMediaQuery = this._mediaQueries.mediaQueries;
		console.log('this.collectionMediaQuery: ', this.collectionMediaQuery);
	}
}
