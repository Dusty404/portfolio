import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAndFotoComponent } from './title-and-foto.component';

describe('TitleAndFotoComponent', () => {
  let component: TitleAndFotoComponent;
  let fixture: ComponentFixture<TitleAndFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleAndFotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleAndFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
