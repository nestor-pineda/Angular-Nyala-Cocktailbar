import { HttpRequestService } from './../../shared/services/http-request.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoreCocktailsRoutingModule } from './more-cocktails-routing.module';
import { MoreCocktailsContentComponent } from './components/more-cocktails-content/more-cocktails-content.component';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [MoreCocktailsContentComponent],
  imports: [
    CommonModule,
    MoreCocktailsRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [HttpRequestService],
})
export class MoreCocktailsModule {}
