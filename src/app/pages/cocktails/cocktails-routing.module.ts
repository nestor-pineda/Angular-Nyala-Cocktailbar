// import { CocktailDetailComponent } from './components/cocktail-detail/cocktail-detail.component';
import { CocktailsContentComponent } from './components/cocktails-content/cocktails-content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CocktailsContentComponent },
  // { path: 'detail/:idCocktail', component: CocktailDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocktailsRoutingModule {}
