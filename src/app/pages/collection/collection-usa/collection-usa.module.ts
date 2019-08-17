import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CollectionUsaPage } from './collection-usa.page';

const routes: Routes = [
  {
    path: '',
    component: CollectionUsaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CollectionUsaPage]
})
export class CollectionUsaPageModule {}
