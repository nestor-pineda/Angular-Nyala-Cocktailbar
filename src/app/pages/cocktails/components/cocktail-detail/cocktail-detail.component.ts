import { ICocktail } from './../../models/cocktail.interface';
import { HttpRequestService } from './../../../../shared/services/http-request.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.scss'],
})
export class CocktailDetailComponent implements OnInit {
  private URL: string =
    'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
  public dataCocktail: ICocktail = {
    idDrink: '',
    strDrink: '',
    strInstructions: '',
    strDrinkThumb: '',
  };
  public cocktailId?: any;

  constructor(
    private httpRequestService: HttpRequestService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.cocktailId = params.idCocktail;
    });
    this.RecoverCocktailData(this.cocktailId);
  }

  public RecoverCocktailData(idCocktail: any) {
    this.httpRequestService
      .getData(this.URL + idCocktail)
      .subscribe((data: any) => {
        this.dataCocktail = data.drinks[0];
        console.log(data.drinks);
      });
  }
}
