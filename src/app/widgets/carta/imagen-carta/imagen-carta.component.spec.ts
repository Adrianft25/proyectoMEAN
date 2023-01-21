import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenCartaComponent } from './imagen-carta.component';

describe('ImagenCartaComponent', () => {
  let component: ImagenCartaComponent;
  let fixture: ComponentFixture<ImagenCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenCartaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
