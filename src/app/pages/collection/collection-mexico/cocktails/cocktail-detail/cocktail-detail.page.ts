import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailsService } from 'src/services/cocktails.service';
import { CocktailsInterface } from 'src/services/cocktails.model';
import { MediaQueriesService } from 'src/services/media-queries.service';

@Component({
	selector: 'app-cocktail-detail',
	templateUrl: './cocktail-detail.page.html',
	styleUrls: ['./cocktail-detail.page.scss']
})
export class CocktailDetailPage implements OnInit {
	public id = null;
	public id2 = null;
	public details = null;
	public details2 = null;
	public cocktailTitle = '';
	public cocktailImage = '';
	public aCocktails: CocktailsInterface[];
	public aRecipes = [];
	public cocktailRecipeInstruction = '';
	private _url = './../../../../../../assets/data/cocktails-mexico.json';

	public detailMediaQuery = {
		hideOnSmallScreen: false,
		aboutGridYPos: 0,
		aboutMultiCardsYPos: 0,
		fontSizeFirstCard: 0,
		fontSizeCards: 0,
		carouselTitleFontSize: 0,
		carouselSubTitleFontSize: 0,
		cardTitleFontSize: 0,
		cardSubTitleFontSize: 0,
		cardParagFontSize: 0,
	};

	// public cardParagFontSize: number;

	constructor(	private _activatedRoute: ActivatedRoute,
					private _cocktailsService: CocktailsService,
					private _mediaQueries: MediaQueriesService 
					) {}

	ngOnInit() {

		// const serviceTest = this._mediaQueries.fMediaQueries();
		// console.log('serviceTest: ', serviceTest);
		

		this.id = this._activatedRoute.snapshot.paramMap.get('cocktailId');
		this.id2 = this._activatedRoute.snapshot.paramMap.get('detailId');
		console.log('\n\n', 'COCKTAIL.DETAIL.PAGE: this.id: ', this.id, this.id2);
		this._cocktailsService
			.fGetCocktailDetail(this._url, this.id)
			.subscribe(result => {
				this.details = result;

				const index = this.details.findIndex(x => x.id === this.id);
				console.log('index: ', index);

				this.details2 = this.details[index].aCocktails;
				const index2 = this.details2.findIndex(z => z.cId === this.id2);
				console.log('index2: ', index2);

				this.aCocktails = result[index].aCocktails;
				this.cocktailTitle = result[index].aCocktails[index2].cocktail;
				this.cocktailImage = result[index].aCocktails[index2].cocktailImage;
				this.aRecipes = result[index].aCocktails[index2].recipe;
				console.log('this.aRecipes: ', this.aRecipes);
				// const garnish = (this.aRecipes[3].ingredient.indexOf('Garnish:') > -1);
				// console.log('garnish: ', garnish);
				// for (garnito of )
				for (const i of this.aRecipes) {
					// console.log('i: ', this.aRecipes[i]);
					const garnish = (i.ingredient.indexOf('Garnish:') > -1);
					console.log('garnish: ', garnish);
					// if(garnish){
					// 	garnish.style.color = "blue";
					// }
					// for (let j = 0; j < this.aRecipes[i].ingredient.length; j++) {
					// 	console.log('j: ', j);
					// }
				}
				
				// var arraycontainsturtles = (myarr.indexOf("turtles") > -1);

				this.cocktailRecipeInstruction =
					result[index].aCocktails[index2].instruction;
			});

		this._mediaQueries.fMediaQueries();
		this.detailMediaQuery = this._mediaQueries.mediaQueries;
	}

	/*-================================
		Viewport Resize: media queries
	===================================-*/
	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this._mediaQueries.fMediaQueries();
		// this.cardParagFontSize = this._mediaQueries.fontSizeFrService;
		// console.log('this.cardParagFontSize: ', this.cardParagFontSize);
		this.detailMediaQuery = this._mediaQueries.mediaQueries;
		console.log('this.detailMediaQuery.fontSizeFirstCardXXX: ', this.detailMediaQuery.fontSizeFirstCard);
	}
}
