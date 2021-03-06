import { HttpRequestService } from './../../shared/services/http-request.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailsRoutingModule } from './cocktails-routing.module';
import { CocktailsContentComponent } from './components/cocktails-content/cocktails-content.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CocktailsContentComponent],
  imports: [
    CommonModule,
    CocktailsRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [HttpRequestService],
})
export class CocktailsModule {}
