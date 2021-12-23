import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ListComponent],
})
export class SharedModule {}
