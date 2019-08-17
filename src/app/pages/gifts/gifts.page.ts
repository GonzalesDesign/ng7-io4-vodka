/*****************************************
* Project: n7-i5-vodka
* Component: gifts
* Copyright © 2019 GonzalesDesign
* Version: 19.08.06
* Note: Simplyfied all in one. Interface,
		Service, Data and Processing.
		NOT BEST PRACTICE!
*****************************************/

import { Component, OnInit, AfterViewInit } from '@angular/core';

/*--=| INTERFACE |=--*/
export interface GiftBasketsInterface {
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
	selector: 'app-gifts',
	templateUrl: './gifts.page.html',
	styleUrls: ['./gifts.page.scss']
})

export class GiftsPage implements OnInit, AfterViewInit {

	/*--=| PUBLIC DATA ARRAY |=--*/
	public aGiftBasketsData = [];

	/*--=| PRIVATE DATA |=--*/
	private pGiftBasketsData: GiftBasketsInterface[] = [
		{
			headerTitle: 'Gift Baskets',
			headerSubTitle: 'Special Gift for that Special Someone',
			headerDescription: 'On iOS devices using the Safari browser, you are able to add a shortcut to your home screen to any site online. By default, these shortcuts will display as a ...',
			headerImageUrl: './../../../assets/images/Vodka-Baskets/Basket-Ketel.png',
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
				},
				{
					id: 'g1',
					basketTitle: 'Skull Vodka',
					basketSubTitle: 'Awesome Vodka',
					basketImageUrl: './../../../assets/images/Vodka-Baskets/Skull.jpg',
					basketDescription:
						'Make your next occasion truly special with this beautifully presented gift basket featuring Grey Goose VX Vodka.',
					basketPrice: '$150.00'
				},
				{
					id: 'g2',
					basketTitle: 'Absolut Elyx',
					basketSubTitle: 'Awesome Vodka',
					basketImageUrl: './../../../assets/images/Vodka-Baskets/AbsElyx.jpg',
					basketDescription:
						'Make your next occasion truly special with this beautifully presented gift basket featuring Grey Goose VX Vodka.',
					basketPrice: '$250.00'
				},
				{
					id: 'g3',
					basketTitle: 'Ciroc',
					basketSubTitle: 'Awesome Vodka',
					basketImageUrl: './../../../assets/images/Vodka-Baskets/Ciroc.jpg',
					basketDescription:
						'Make your next occasion truly special with this beautifully presented gift basket featuring Grey Goose VX Vodka.',
					basketPrice: '$300.00'
				}
			]
		}
	];

	constructor() {}

	ngOnInit() {
		/*--=| PUBLIC ARRAY POPULATION |=--*/
		this.aGiftBasketsData = this.fGetAllGiftsData();
		// console.log('aGiftBasketsData: ', this.aGiftBasketsData);
		// console.log('aGiftBasketsData.headerTitle: ', this.aGiftBasketsData[0].headerTitle);
	}

	ngAfterViewInit(): void {
		//Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
		//Add 'implements AfterViewInit' to the class.
		/*--=| PUBLIC ARRAY POPULATION |=--*/
		// this.aGiftBasketsData = this.fGetAllGiftsData();
	}

	/*--=| PROCESSING |=--*/
	public fGetAllGiftsData() {
		console.log('this.pGiftBasketsData: ', this.pGiftBasketsData);
		return [...this.pGiftBasketsData]; // spread, makes copy of the private version and return a new array
	}
}
/*---------------------------------------------------------------------------------------------------------------------*/
/*----------------------| orig using service
import { Component, OnInit } from '@angular/core';
import { GiftBasketsService } from 'src/services/gift-baskets.service';
import { GiftBasketsInterface } from 'src/services/gift-baskets.model';

@Component({
	selector: 'app-gifts',
	templateUrl: './gifts.page.html',
	styleUrls: ['./gifts.page.scss']
})
export class GiftsPage implements OnInit {
	public aGiftBasketsData: GiftBasketsInterface[];
	
	constructor(private _giftBasketService: GiftBasketsService) {}
	
	ngOnInit() {
		this.aGiftBasketsData = this._giftBasketService.fGetAllCustoms();
		// console.log('aGiftBasketsData: ', this.aGiftBasketsData);
		// console.log('aGiftBasketsData.headerTitle: ', this.aGiftBasketsData[0].headerTitle);
	}
}
=---------------------------------------------------------------------------------------------------------------------*/
