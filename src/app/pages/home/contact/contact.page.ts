import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController, PopoverController } from '@ionic/angular';
import { PopoverPage } from './popover/popover.page';

export interface EmailInterface {
	email: string;
	name: string;
	message: string;
	phone: string;
	company: string;
	endpoint: string;
}

export interface AddressInterface {
	address: string;
	city: string;
	state: string;
	zip: string;
	phone: string;
}

@Component({
	selector: 'app-contact',
	templateUrl: './contact.page.html',
	styleUrls: ['./contact.page.scss']
})
export class ContactPage implements OnInit {

	public address: AddressInterface = {
		address: '123 Main Street',
		city: 'Somerdale',
		state: 'New Jersey',
		zip: '08083',
		phone: '(856)123-3456'
	};
	

	public emailInterface: EmailInterface = {
		email: '',
		name: '',
		message: '',
		phone: '',
		company: '',
		endpoint: ''
	};

	public value = 0;

	constructor(
		private _modalController: ModalController,
		private _popoverController: PopoverController
	) {}

	ngOnInit() {
		// this.fGetAddress();
	}

	// public fGetAddress() {
	// 	console.log('fGetAddress', {...this.address});
	// 	return {...this.address};

	// }

	/*-------=| OPEN MODAL: SIMPLE |=-------*/
	// async fOpenModal() {
	// 	const modal = await this._modalController.create({
	// 		component: ModalPage,
	// 		componentProps: {
	// 			id: this.value
	// 		}
	// 	});
	// 	modal.present();
	// }

	/*-------=| OPEN POPOVER: SIMPLE |=-------*/
	async fOpenPopover(ev: any) {
		const popover = await this._popoverController.create({
			component: PopoverPage,
			event: ev,
			translucent: true,
			componentProps: {
				id: this.value,
				props: [
					{
						custom_prop: this.emailInterface,
						custom_prop1: this.emailInterface.email,
						custom_prop2: this.emailInterface.name,
						custom_prop3: this.emailInterface.message
					}
				]
			}
		});
		// popover.onDidDismiss().then(selectedData => {
		// 	//   const avatar = data['x'];
		// 	//   console.log('data: ', data);
		// 	const dataObj = selectedData.data;
		// 	console.log('dataObj: ', dataObj);
		// 	//   console.log('dataObj.avatarName: ', dataObj.avatarName);
		// 	//   console.log('dataObj.avatarUrl: ', dataObj.avatarUrl);
		// 	//   console.log('dataObj.avatarDescription: ', dataObj.avatarDescription);

		// 	this.emailInterface.email = dataObj.email;
		// 	this.emailInterface.name = dataObj.name;
		// 	this.emailInterface.message = dataObj.message;
		// });
		
		// return await popover.present();
		popover.present();
	}

	/*-------=| OPEN MODAL: MORE COMPLEX |=-------*/
	// async fOpenModalPassingData() {
	// 	const modal = await this._modalController.create({
	// 		component: ModalPage,
	// 		componentProps: {
	// 			props: [
	// 				{
	// 					custom_prop: this.emailInterface,
	// 					custom_prop1: this.emailInterface.email,
	// 					custom_prop2: this.emailInterface.name,
	// 					custom_prop3: this.emailInterface.message
	// 				}
	// 			]
	// 		}
	// 	});
	// 	modal.onDidDismiss().then(selectedData => {
	// 		//   const avatar = data['x'];
	// 		//   console.log('data: ', data);
	// 		const dataObj = selectedData.data;
	// 		console.log('dataObj: ', dataObj);
	// 		//   console.log('dataObj.avatarName: ', dataObj.avatarName);
	// 		//   console.log('dataObj.avatarUrl: ', dataObj.avatarUrl);
	// 		//   console.log('dataObj.avatarDescription: ', dataObj.avatarDescription);

	// 		this.emailInterface.email = dataObj.email;
	// 		this.emailInterface.name = dataObj.name;
	// 		this.emailInterface.message = dataObj.message;
	// 	});
	// 	return await modal.present();
	// }
}
