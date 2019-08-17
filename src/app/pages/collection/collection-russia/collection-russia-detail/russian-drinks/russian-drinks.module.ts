import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RussianDrinksPage } from './russian-drinks.page';

const routes: Routes = [
  {
    path: '',
    component: RussianDrinksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RussianDrinksPage]
})
export class RussianDrinksPageModule {}
