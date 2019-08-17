import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CollectionRussiaPage } from './collection-russia.page';

const routes: Routes = [
  {
    path: '',
    component: CollectionRussiaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CollectionRussiaPage]
})
export class CollectionRussiaPageModule {}
