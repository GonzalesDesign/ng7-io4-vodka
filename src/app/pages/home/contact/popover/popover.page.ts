import { Component, OnInit } from '@angular/core';
// import { EmailInterface } from '../modal-email.page';
import { HttpClient } from '@angular/common/http';
import { EmailInterface } from 'src/services/email.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
	selector: 'app-popover',
	templateUrl: './popover.page.html',
	styleUrls: ['./popover.page.scss']
})
export class PopoverPage implements OnInit {
	public mdf3Form: FormGroup;

	public submitAttemp = false;

	public emailInterface: EmailInterface = {
		email: '',
		name: '',
		message: '',
		phone: '',
		company: '',
		endpoint: ''
	};

	public errorMessages = {
		name: [
			{ type: 'required', message: 'Name is required' },
			{ type: 'minlength', message: 'Name length must be longer or equal than 2 characters.'},
			{ type: 'maxlength', message: 'Name length must be lower or equal to 50 characters.'},
			{ type: 'pattern', message: 'Please enter a valid Name.' }
		],
		email: [
			{ type: 'required', message: 'Email is required' },
			{ type: 'minlength', message: 'Email length must be longer or equal than 6 characters.'},
			// { type: 'maxlength', message: 'Email length must be lower or equal to 50 characters.' },
			{ type: 'pattern', message: 'Please enter a valid email address.' },
			{ type: 'email', message: 'Can\'t validate, please enter a valid email address.'
			}
		],
		phone: [
			{ type: 'required', message: 'Phone is required' },
			{ type: 'minlength', message: 'Phone length must be longer or equal than 10 characters.'},
			// { type: 'maxlength', message: 'Email length must be lower or equal to 50 characters.' },
			{ type: 'pattern', message: 'Please enter a valid telephone number.' },
			{ type: 'email', message: 'Can\'t validate, please enter a valid phone number.'
			}
		],
		message: [{ type: 'required', message: 'Message is required' }]
	};

	constructor(public _formBuilder: FormBuilder, private http: HttpClient) {
		this.mdf3Form = this._formBuilder.group({
			name: [
				'',
				Validators.compose([
					Validators.required,
					Validators.minLength(2),
					// Validators.maxLength(30),
					Validators.pattern('[a-zA-Z ]*')
				])
			],
			phone: [
				'',
				Validators.compose([
					Validators.required,
					Validators.minLength(10),
					// Validators.maxLength(30),
					// Validators.pattern('[a-zA-Z0-9() ]*')
					Validators.pattern('[a-zA-Z0-9()-- ]*')
				])
			],
			email: new FormControl(
				'',
				Validators.compose([
					Validators.required,
					Validators.minLength(6),
					Validators.maxLength(30),
					Validators.email
				])
			),
			message: ['', Validators.required]
		});
	}

	ngOnInit() {
		// this.emailInterface.endpoint = 'http://speedwaymessenger.net/sendEmail.php';
		this.emailInterface.endpoint = 'https://rlloydgonzales.com/sendEmail.php';
		// this.emailInterface.endpoint = './../../../sendEmail.php';
	}

	public onSubmit() {
		this.submitAttemp = true;

		// console.log('Name: ', this.mdf3Form.value.name);
		// console.log('Email: ', this.mdf3Form.value.email);
		// console.log('Message: ', this.mdf3Form.value.message);

		const postVars = {
			email: this.mdf3Form.value.email,
			name: this.mdf3Form.value.name,
			phone: this.mdf3Form.value.phone,
			company: this.mdf3Form.value.company,
			message: this.mdf3Form.value.message
		};
		this.http.post(this.emailInterface.endpoint, postVars).subscribe();
		this.mdf3Form.reset();

		// console.log('Name: ', this.mdf3Form.value.name);
		// console.log('Email: ', this.mdf3Form.value.email);
		// console.log('Message: ', this.mdf3Form.value.message);
	}
}
