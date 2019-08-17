import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CocktailDetailPage } from './cocktail-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CocktailDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CocktailDetailPage]
})
export class CocktailDetailPageModule {}
