import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
	selector: 'app-side-menu',
	templateUrl: './side-menu.page.html',
	styleUrls: ['./side-menu.page.scss']
})
export class SideMenuPage implements OnInit {

	public selectedPath = '';

	public aSideMenu = [
		{
			menu: 'HOME',
			icon: 'home',
			url: '/side-menu/home/about-us',
			subMenu: [
				{
					menu: 'CONTACT US',
					icon: 'face',
					url: '/side-menu/home/contact'
				}
			]
		},
		{
			menu: 'COLLECTION',
			icon: 'wine',
			url: '/side-menu/collection/collection-mexico',
			subMenu: [
				{
					menu: 'MEXICO',
					icon: 'wine',
					url: '/side-menu/collection/collection-mexico'
				},
				{
					menu: 'RUSSIA',
					icon: 'wine',
					url: '/side-menu/collection/collection-russia'
				},
				{
					menu: 'FINLAND',
					icon: 'wine',
					url: '/side-menu/collection/collection-finland'
				},
				{
					menu: 'AMERICA',
					icon: 'wine',
					url: '/side-menu/collection/collection-usa'
				}
			]
		}
		
	];

	public sideMenuLogo = {
		title: 'Vodka Basket Gifts',
		imgUrl: './../../../assets/images/Vodka-Baskets/Basket-Ketel.png',
		info: 'Quick info about the company'
	};

	// constructor() {}

	constructor(private router: Router) {
		this.router.events.subscribe((event: RouterEvent) => {
			if (event && event.url) {
				this.selectedPath = event.url;
				// console.log('this.selectedPath: ', this.selectedPath);
			}
		});
	}

	ngOnInit() {}

}
