import { CocktailDetailComponent } from './pages/cocktails/components/cocktail-detail/cocktail-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ``,
    loadChildren: () =>
      import('./pages/home/home.module').then((module) => module.HomeModule),
  },
  {
    path: `cocktails`,
    loadChildren: () =>
      import('./pages/cocktails/cocktails.module').then(
        (module) => module.CocktailsModule
      ),
  },

  /*   {
    path: `cockail-detail`,
    loadChildren: () =>
      import('./pages/cocktail-detail/cocktail-detail.module').then(
        (module) => module.CocktailDetailModule
      ),
  }, */
  {
    path: `cocktails/:idCocktail`,
    loadChildren: () =>
      import('./pages/cocktail-detail/cocktail-detail.module').then(
        (module) => module.CocktailDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
