import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-aboutus-carousel',
	templateUrl: './aboutus-carousel.page.html',
	styleUrls: ['./aboutus-carousel.page.scss']
})

export class AboutusCarouselPage implements OnInit {

	@Input() titleFontSize: number;
	@Input() subTitleFontSize: number;
 
	/*--=| Use ionic slides in the template |=--*/
	public aCarousel = [
		{
			id: 's0',
			slide: 'Carousel Container',
			slideTitle: '• VODKA •',
			slideSubTitle: '• OUR ELEGANT SIGNATURE BRANDS •',
			slideLinkUrl: '/side-menu/collection/collection-mexico',
			slideImageUrl: './../../../../../assets/images/CarouselImages/RussianVodkas.jpg'
		}
	];

	constructor() {}

	ngOnInit() {
		console.log('aCaroßusel: ', this.aCarousel);
	}
}
