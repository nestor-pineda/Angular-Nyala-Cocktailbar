import { HttpRequestService } from './../../../../shared/services/http-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktails-content',
  templateUrl: './cocktails-content.component.html',
  styleUrls: ['./cocktails-content.component.scss'],
})
export class CocktailsContentComponent implements OnInit {
  private URL: string =
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=o';
  public dataInfo: any = []; // aquí meteremos los resultados
  public totalRecords: number = 0;
  public page: number = 1;
  public title: string = 'Best Cocktails';

  constructor(private httpRequestService: HttpRequestService) {}

  ngOnInit(): void {
    this.RecoverCocktailData();
  }

  public RecoverCocktailData() {
    this.httpRequestService.getData(this.URL).subscribe((data: any) => {
      console.log(data);
      this.dataInfo = data.drinks;
      this.totalRecords = data.drinks.lenght;
    });
  }
}
