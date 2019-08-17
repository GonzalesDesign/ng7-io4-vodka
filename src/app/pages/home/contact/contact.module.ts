import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactPage } from './contact.page';
import { PopoverPage } from './popover/popover.page';
import { SharedModule } from 'src/app/shared.module';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

const routes: Routes = [{ path: '', component: ContactPage }];

@NgModule({
	entryComponents: [PopoverPage],

	imports: [
		// CommonModule,
		// FormsModule,
		// IonicModule,
		RouterModule.forChild(routes),
		SharedModule
	],

	declarations: [ContactPage, PopoverPage],

	schemas: [CUSTOM_ELEMENTS_SCHEMA] // *
})
export class ContactPageModule {}
