import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnewsComponent } from './technews.component';

describe('TechnewsComponent', () => {
  let component: TechnewsComponent;
  let fixture: ComponentFixture<TechnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
