import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouteMeComponent } from './aboute-me.component';

describe('AbouteMeComponent', () => {
  let component: AbouteMeComponent;
  let fixture: ComponentFixture<AbouteMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbouteMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbouteMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
