import { HttpRequestService } from './../../shared/services/http-request.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailDetailRoutingModule } from './cocktail-detail-routing.module';
import { DetailContentComponent } from './components/detail-content/detail-content.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DetailContentComponent],
  imports: [
    CommonModule,
    CocktailDetailRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [HttpRequestService],
})
export class CocktailDetailModule {}
