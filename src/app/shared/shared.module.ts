import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { RouterModule } from '@angular/router';

// Prine
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    CardModule,
    ButtonModule,
    NgxPaginationModule,
  ],
  exports: [ListComponent],
})
export class SharedModule {}
