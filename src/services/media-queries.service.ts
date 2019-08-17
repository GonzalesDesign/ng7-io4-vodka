import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MediaQueriesService {
	private screenWidth: number;
	// private carouselTitleFontSize: number;
	private sm = 540;
	private md = 720;
	private lg = 960;
	private xl = 1140;
	private xl2 = 1600;
	private minWidth = 350; // Triggers at <350px
	private menuShow = 991; // Triggers at 992px

	// public windowWidthDivider = 2;
	public vw: number; // = Math.round(this.screenWidth / windowWidthDivider);

	public mediaQueries = {
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
		cardParagFontSize: 0,
	};

	public fontSizeFrService = 0;

	constructor() {}

	/*-=====================================================================================
		fMediaQueries() = screen resize based on ionic4 screen sizes:

		Name		Value		Description
		xs			100%		Don't set the grid width for xs screens
		sm			540px		Set grid width to 540px when (min-width: 576px)
		md			720px		Set grid width to 720px when (min-width: 768px)
		lg			960px		Set grid width to 960px when (min-width: 992px)
		xl			1140px		Set grid width to 1140px when (min-width: 1200px)
		xl2			1600px
		menuShow	992px		Screensize = 992px shows side menu. Compresses content area
	=======================================================================================-*/

	public fMediaQueries() {

		this.screenWidth = window.innerWidth;
		let windowWidthDivider: number;
		/*--============================================================================
		windowWidthDivider: Holds an assigned value for dividing the current screenwidth
		which value is assign to vw(view width) that's used for vertically positioning
		the Home main grid container for the cards.
		================================================================================--*/
		console.log('this.screenWidth: ', this.screenWidth);


		if (this.screenWidth <= this.minWidth - 1 ) {
			this.vw = 190; // Math.round(this.screenWidth / windowWidthDivider);
			console.log('< 350: this.vw: ', this.vw);
			this.fontSizeFrService = 16;
			this.mediaQueries = {
				hideOnSmallScreen: false,
				aboutGridYPos: this.vw,
				aboutMultiCardsYPos: -220, // ------===
				fontSizeFirstCard: 20,
				fontSizeCards: 14,  // ------===
				carouselTitleFontSize: this.sm / 60, // Data sharing via Parent to Child @Input()
				carouselSubTitleFontSize: this.sm / 200, // Data sharing via Parent to Child @Input() // ------===
				introCardTitleFontSize: 22,
				introCardSubTitleFontSize: 12,
				introCardParagFontSize: 14,
				cardTitleFontSize: 22,
				cardSubTitleFontSize: 12,
				cardParagFontSize: 14  // ------===
			};
		} else if (this.screenWidth >= this.minWidth &&  this.screenWidth <= this.sm - 1 ) { // < sm
			windowWidthDivider = 1.9;
			this.vw = Math.round(this.screenWidth / windowWidthDivider);
			// console.log('this.sm : ', this.sm, ' | ', this.screenWidth);
			console.log('<sm: this.vw: ', this.vw);
			this.fontSizeFrService = 16;
			this.mediaQueries = {
				hideOnSmallScreen: false,
				aboutGridYPos: this.vw, // 270, // this.screenWidth / 2,
				aboutMultiCardsYPos: -220,
				fontSizeFirstCard: 20,
				fontSizeCards: 14,
				carouselTitleFontSize: this.sm / 60, // Data sharing via Parent to Child @Input()
				carouselSubTitleFontSize: this.sm / 200, // Data sharing via Parent to Child @Input()
				introCardTitleFontSize: 22,
				introCardSubTitleFontSize: 12,
				introCardParagFontSize: 14,
				cardTitleFontSize: 22,
				cardSubTitleFontSize: 12,
				cardParagFontSize: 14
			};
		} else if (this.screenWidth >= this.sm &&  this.screenWidth <= this.md - 1 ) { // sm
			windowWidthDivider = 1.9;
			this.vw = Math.round(this.screenWidth / windowWidthDivider);
			// console.log('this.sm + 1: ', this.sm + 1, ' x ', this.md, ' | ', this.screenWidth);
			console.log('sm: this.vw: ', this.vw);
			this.fontSizeFrService = 16;
			this.mediaQueries = {
				hideOnSmallScreen: false,
				aboutGridYPos: this.vw, // 350, // this.screenWidth / 2,
				aboutMultiCardsYPos: -220,
				fontSizeFirstCard: 20,
				fontSizeCards: 14,
				carouselTitleFontSize: this.sm / 60, // Data sharing via Parent to Child @Input()
				carouselSubTitleFontSize: this.sm / 200, // Data sharing via Parent to Child @Input()
				introCardTitleFontSize: 22,
				introCardSubTitleFontSize: 14,
				introCardParagFontSize: 16,
				cardTitleFontSize: 22,
				cardSubTitleFontSize: 12,
				cardParagFontSize: 16
			};
			// console.log('this.mediaQueries.fontSizeCards: ', this.mediaQueries.fontSizeCards);
			// console.log('this.mediaQueries.carouselTitleFontSize: ', this.mediaQueries.carouselTitleFontSize);
		} else if (this.screenWidth >= this.md  &&  this.screenWidth <= this.lg - 1) { // md
			windowWidthDivider = 1.9;
			this.vw = Math.round(this.screenWidth / windowWidthDivider);
			// console.log('this.md + 1: ', this.md + 1, ' x ', this.lg, ' | ', this.screenWidth);
			console.log('md: this.vw: ', this.vw);
			this.fontSizeFrService = 22;
			this.mediaQueries = {
				hideOnSmallScreen: true,
				aboutGridYPos: this.vw, // 460, // this.screenWidth / 2,
				aboutMultiCardsYPos: -220,
				fontSizeFirstCard: 26,
				fontSizeCards: 26,
				carouselTitleFontSize: this.md / 100,
				carouselSubTitleFontSize: this.md / 400,
				introCardTitleFontSize: 26,
				introCardSubTitleFontSize: 12,
				introCardParagFontSize: 17,
				cardTitleFontSize: 26,
				cardSubTitleFontSize: 12,
				cardParagFontSize: 18
			};
		} else if ( this.screenWidth >= this.lg && this.screenWidth <= this.menuShow - 1 ) { // lg
			windowWidthDivider = 1.9;
			this.vw = Math.round(this.screenWidth / windowWidthDivider);
			console.log('lg: this.vw: ', this.vw);
			this.mediaQueries = {
				hideOnSmallScreen: true,
				aboutGridYPos: this.vw, // 400, // this.screenWidth / 2,
				aboutMultiCardsYPos: -220,
				fontSizeFirstCard: 30,
				fontSizeCards: 46,
				carouselTitleFontSize: this.sm / 80,
				carouselSubTitleFontSize: this.sm / 200,
				introCardTitleFontSize: 30,
				introCardSubTitleFontSize: 14,
				introCardParagFontSize: 16,
				cardTitleFontSize: 30,
				cardSubTitleFontSize: 14,
				cardParagFontSize: 20
			};
		} else if ( this.screenWidth >= this.menuShow && this.screenWidth <= this.xl - 1 ) { // menuShow
			windowWidthDivider = 2.6;
			this.vw = Math.round(this.screenWidth / windowWidthDivider);
			console.log('menuShow: this.vw: ', this.vw);
			this.mediaQueries = {
				hideOnSmallScreen: true,
				aboutGridYPos: this.vw, // 400, // this.screenWidth / 2,
				aboutMultiCardsYPos: -220,
				fontSizeFirstCard: 30,
				fontSizeCards: 46,
				carouselTitleFontSize: this.sm / 80,
				carouselSubTitleFontSize: this.sm / 320,
				introCardTitleFontSize: 30,
				introCardSubTitleFontSize: 14,
				introCardParagFontSize: 18,
				cardTitleFontSize: 30,
				cardSubTitleFontSize: 14,
				cardParagFontSize: 20
			};
		} else if ( this.screenWidth >= this.xl && this.screenWidth <= this.xl2 - 1 ) { // xl
			windowWidthDivider = 2.6;
			this.vw = Math.round(this.screenWidth / windowWidthDivider);
			console.log('xl: this.vw: ', this.vw);
			this.mediaQueries = {
				hideOnSmallScreen: true,
				aboutGridYPos: this.vw, // 550, // 400, // this.screenWidth / 3,
				aboutMultiCardsYPos: -220,
				fontSizeFirstCard: 34,
				fontSizeCards: 26,
				carouselTitleFontSize: this.sm / 80,
				carouselSubTitleFontSize: this.sm / 260,
				introCardTitleFontSize: 20,
				introCardSubTitleFontSize: 14,
				introCardParagFontSize: 18,
				cardTitleFontSize: 30,
				cardSubTitleFontSize: 14,
				cardParagFontSize: 20
			};
		} else if ( this.screenWidth >= this.xl2 + 1 ) { // xl2 >
			windowWidthDivider = 5;
			this.vw = 640; // Math.round(this.screenWidth / windowWidthDivider);
			console.log('xl2: this.vw: ', this.vw);
			this.mediaQueries = {
				hideOnSmallScreen: true,
				aboutGridYPos: this.vw, // this.screenWidth / 3,
				aboutMultiCardsYPos: -220,
				fontSizeFirstCard: 34,
				fontSizeCards: 26,
				carouselTitleFontSize: this.sm / 80,
				carouselSubTitleFontSize: this.sm / 260,
				introCardTitleFontSize: 30,
				introCardSubTitleFontSize: 14,
				introCardParagFontSize: 18,
				cardTitleFontSize: 30,
				cardSubTitleFontSize: 14,
				cardParagFontSize: 20
			};
		}
	}
}
