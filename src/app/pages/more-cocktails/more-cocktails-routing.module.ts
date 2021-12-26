import { MoreCocktailsContentComponent } from './components/more-cocktails-content/more-cocktails-content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: MoreCocktailsContentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreCocktailsRoutingModule {}
