import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
	declarations: [],

	imports: [CommonModule, IonicModule, ReactiveFormsModule],

	exports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class SharedModule {}
