import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreCocktailsContentComponent } from './more-cocktails-content.component';

describe('MoreCocktailsContentComponent', () => {
  let component: MoreCocktailsContentComponent;
  let fixture: ComponentFixture<MoreCocktailsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreCocktailsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreCocktailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
