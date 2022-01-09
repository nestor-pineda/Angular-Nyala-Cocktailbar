import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [HomeComponentComponent, CardComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
