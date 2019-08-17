import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'side-menu/home/about-us', pathMatch: 'full' },
  { path: 'side-menu', loadChildren: './pages/side-menu/side-menu.module#SideMenuPageModule' },
  // { path: 'aboutus-carousel', loadChildren: './pages/home/about-us/aboutus-carousel/aboutus-carousel.module#AboutusCarouselPageModule' },
  // { path: 'basket-detail', loadChildren: './pages/gifts/basket-detail/basket-detail.module#BasketDetailPageModule' },
  // { path: 'gifts', loadChildren: './pages/gifts/gifts.module#GiftsPageModule' },

  // { path: 'collection-detail', loadChildren: './pages/collection/collection-detail/collection-detail.module#CollectionDetailPageModule' },
  // { path: 'collection-russia-detail', loadChildren: './pages/collection/collection-russia/collection-russia-detail/collection-russia-detail.module#CollectionRussiaDetailPageModule' },
  // { path: 'russian-drinks', loadChildren: './pages/collection/collection-russia/collection-russia-detail/russian-drinks/russian-drinks.module#RussianDrinksPageModule' },
  
  // { path: 'collection-mexico', loadChildren: './pages/collection/collection-mexico/collection-mexico.module#CollectionMexicoPageModule' },
  // { path: 'cocktails', loadChildren: './pages/collection/collection-mexico/cocktails/cocktails.module#CocktailsPageModule' },
  // { path: 'cocktail-detail', loadChildren: './pages/collection/collection-mexico/cocktails/cocktail-detail/cocktail-detail.module#CocktailDetailPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
