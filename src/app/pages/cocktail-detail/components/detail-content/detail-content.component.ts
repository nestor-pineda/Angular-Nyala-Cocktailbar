import { HttpRequestService } from './../../../../shared/services/http-request.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ICocktail } from './../../models/cocktail.interface';

@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.component.html',
  styleUrls: ['./detail-content.component.scss'],
})
export class DetailContentComponent implements OnInit {
  private URL: string =
    'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
  public dataCocktail: ICocktail = {
    idDrink: '',
    strDrink: '',
    strInstructions: '',
    strDrinkThumb: '',
    strIngredient1: '',
    strIngredient2: '',
    strIngredient3: '',
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
