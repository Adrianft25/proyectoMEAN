import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLogoutComponent } from './btn-logout.component';

describe('BtnLogoutComponent', () => {
  let component: BtnLogoutComponent;
  let fixture: ComponentFixture<BtnLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
