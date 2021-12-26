import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from './../../../../shared/services/http-request.service';

@Component({
  selector: 'app-more-cocktails-content',
  templateUrl: './more-cocktails-content.component.html',
  styleUrls: ['./more-cocktails-content.component.scss'],
})
export class MoreCocktailsContentComponent implements OnInit {
  private URL: string =
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';
  public dataInfo: any = []; // aquí meteremos los resultados
  public title: string = 'Best Cocktails';
  constructor(private httpRequestService: HttpRequestService) {}

  ngOnInit(): void {
    this.RecoverCocktailData();
  }

  public RecoverCocktailData() {
    this.httpRequestService.getData(this.URL).subscribe((data: any) => {
      console.log(data);
      this.dataInfo = data.drinks;
    });
  }
}
