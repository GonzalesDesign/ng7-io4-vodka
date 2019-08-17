import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { AboutUsInterface } from './about-us.model';
import { Subscription } from 'rxjs';
import { AboutUsService } from 'src/services/aboutus.service';
import { MediaQueriesService } from 'src/services/media-queries.service';
import { AnimationsService } from 'src/services/animations.service';

@Component({
	selector: 'app-about-us',
	templateUrl: './about-us.page.html',
	styleUrls: ['./about-us.page.scss']
})
export class AboutUsPage implements OnInit, OnDestroy {

	@ViewChild('rowMultiCardsContainer') rowMultiCardsContainer: any;

	public screenWidth: number;
	// public carouselTitleFontSize: number;
	public sm = 540;
	public md = 720;
	public lg = 960;
	public xl = 1140;
	public xl2 = 1600;

	public multiCardsKontainerId = '#row-multi-cards-container';
	/*--= multiCardsKontainerId: NOT USED!
	Animating the multi cards container. Kept it for codes sample
	=-------------------------------------------------------------=*/

	public aAboutFeatured: AboutUsInterface[];
	public aAboutContent: AboutUsInterface[];
	public oAboutUs = {
		aboutGridYPos: 0,
		fontSizeFirstCard: 0,
		fontSizeCards: 0,
		carouselTitleFontSize: 0,
		carouselSubTitleFontSize: 0
	};
	// public aAboutFirstContent: AboutUsInterface [];
	public aAboutFirstContent = [];
	public contentImageUrl = '';
	public subsCollection: Subscription;
	private _url = './../../../../assets/data/about-us.json';

	public yPos: string;

	public aboutMediaQuery = {
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
			private _aboutUsService: AboutUsService,
			private _mediaQueries: MediaQueriesService,
			private _gsapAnimation: AnimationsService
			) {}

	ngOnInit() {
		this.fGatherData();
		// this.fResizeMe();
		this._mediaQueries.fMediaQueries();
		this.aboutMediaQuery = this._mediaQueries.mediaQueries;
		// this.fAnimateVerticalPos(this.multiCardsKontainerId, this.aboutMediaQuery.aboutMultiCardsYPos);

		// Get the height of the element
		const height = this.rowMultiCardsContainer.nativeElement.offsetHeight;
		const h1 = document.getElementById('row-multi-cards-container2').clientHeight;
		const h2 = document.getElementById('row-multi-cards-container2').offsetHeight;
		const h3 = document.getElementById('row-multi-cards-container2').scrollHeight;
		console.log('height: ', height, h1, h2, h3);
	}

	/*-==================================
		Unsubscribe to avoid memory leaks
	=====================================-*/
	ngOnDestroy() {
		this.subsCollection.unsubscribe();
	}

	public fGatherData() {
		/*-=================================
        =-----=|••• OBSERVABLE •••|=-----=
        ====================================-*/
		this.subsCollection = this._aboutUsService
			.fGetAllAboutUsData(this._url)
			.subscribe(data => {
				this.aAboutFeatured = data;
				// console.log('aAboutFeatured: ', this.aAboutFeatured);
				for (const about of this.aAboutFeatured) {
					this.aAboutContent = about.content;
					// console.log('aAboutContent: ', this.aAboutContent);
					this.aAboutFirstContent = about.content;
					// console.log('aAboutFirstContent: ', this.aAboutFirstContent);
				}
			});
	}

	public fAnimateVerticalPos(elem, yp) {
	/*=--------------------------------------------------------------------=|=--------------------------------------------------------------------=/
	this.mainKontainerId: Main Container, center kontent kontainer.
    =----------------------------------------------------------------------------------------------------------------------------------------------=
	this._mondrianAnim.fTranslateAnim2            (elem,    tym,  xp,     yp,    zp,        w,        h,  fontSize, alfa); =---*/
	// this._mondrianAnim.fTranslateAnim(this.mainKontainerId,       tym,   0,      0,   100,   '100vw',  '100vh',    'null',    1);
	// this._gsapAnimation.fTranslateAnim(elem, 1000, 0, yp, 110, null, null, null, null);
	this._gsapAnimation.fAnimYPos(elem, yp);
	console.log('animation: ', elem, yp);
	
	}
	/*-================================
		Viewport Resize: media queries
	===================================-*/
	// @HostListener('window:resize', ['$event'])
	// //  @HostListener(this._windowRef._window(), ['$event'])
	// onResize(event) {
	// 	this.fResizeMe();
	// }
	
	/*-================================
		Viewport Resize: media queries
	===================================-*/
	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this._mediaQueries.fMediaQueries();
		this.aboutMediaQuery = this._mediaQueries.mediaQueries;
		// console.log('this.aboutMediaQuery: ', this.aboutMediaQuery);
		// this.fAnimateVerticalPos(this.multiCardsKontainerId, this.aboutMediaQuery.aboutMultiCardsYPos);
	}

	/*-=========================================================================
		fResizeMe() = screen resize based on ionic4 screen sizes:

		Name		Value		Description
		xs			100%		Don't set the grid width for xs screens
		sm			540px		Set grid width to 540px when (min-width: 576px)
		md			720px		Set grid width to 720px when (min-width: 768px)
		lg			960px		Set grid width to 960px when (min-width: 992px)
		xl			1140px		Set grid width to 1140px when (min-width: 1200px)
		xl2			1600px		
	===========================================================================-*/

	// public fResizeMe() {
	// 	this.screenWidth = window.innerWidth;
	// 	if (this.screenWidth <= this.sm) {
	// 		this.oAboutUs = {
	// 			aboutGridYPos: this.screenWidth / 2,
	// 			fontSizeFirstCard: 20,
	// 			fontSizeCards: 26,
	// 			carouselTitleFontSize: this.sm / 60, // Data sharing via Parent to Child @Input()
	// 			carouselSubTitleFontSize: this.sm / 200 // Data sharing via Parent to Child @Input()
	// 		};
	// 		console.log('this.oAboutUs.carouselTitleFontSize: ', this.oAboutUs.carouselTitleFontSize);
	// 	} else if (this.screenWidth <= this.md) {
	// 		this.oAboutUs = {
	// 			aboutGridYPos: this.screenWidth / 2,
	// 			fontSizeFirstCard: 26,
	// 			fontSizeCards: 26,
	// 			carouselTitleFontSize: this.sm / 60,
	// 			carouselSubTitleFontSize: this.sm / 180
	// 		};
	// 	} else if (this.screenWidth <= this.lg) {
	// 		this.oAboutUs = {
	// 			aboutGridYPos: this.screenWidth / 2,
	// 			fontSizeFirstCard: 30,
	// 			fontSizeCards: 26,
	// 			carouselTitleFontSize: this.sm / 80,
	// 			carouselSubTitleFontSize: this.sm / 200
	// 		};
	// 	} else if (this.screenWidth <= this.xl) {
	// 		this.oAboutUs = {
	// 			aboutGridYPos: this.screenWidth / 3,
	// 			fontSizeFirstCard: 34,
	// 			fontSizeCards: 26,
	// 			carouselTitleFontSize: this.sm / 80,
	// 			carouselSubTitleFontSize: this.sm / 260
	// 		};
	// 	} else if (this.screenWidth <= this.xl2) {
	// 		this.oAboutUs = {
	// 			aboutGridYPos: this.screenWidth / 3,
	// 			fontSizeFirstCard: 34,
	// 			fontSizeCards: 26,
	// 			carouselTitleFontSize: this.sm / 80,
	// 			carouselSubTitleFontSize: this.sm / 260
	// 		};
	// 	}
	// }
}
