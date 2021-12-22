import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsContentComponent } from './cocktails-content.component';

describe('CocktailsContentComponent', () => {
  let component: CocktailsContentComponent;
  let fixture: ComponentFixture<CocktailsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
