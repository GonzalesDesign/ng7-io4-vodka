import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopoverPage } from './popover.page';
import { SharedModule } from 'src/app/shared.module';

const routes: Routes = [{ path: '', component: PopoverPage }];

@NgModule({
	imports: [
		// CommonModule,
		// FormsModule,
		// IonicModule,
		RouterModule.forChild(routes),
		SharedModule
	],
	declarations: [
		// PopoverPage
	]
})
export class PopoverPageModule {}
