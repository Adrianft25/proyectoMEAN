import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPaypalComponent } from './btn-paypal.component';

describe('BtnPaypalComponent', () => {
  let component: BtnPaypalComponent;
  let fixture: ComponentFixture<BtnPaypalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnPaypalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnPaypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
