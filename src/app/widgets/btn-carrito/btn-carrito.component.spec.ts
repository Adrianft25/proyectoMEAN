import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCarritoComponent } from './btn-carrito.component';

describe('BtnCarritoComponent', () => {
  let component: BtnCarritoComponent;
  let fixture: ComponentFixture<BtnCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnCarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
