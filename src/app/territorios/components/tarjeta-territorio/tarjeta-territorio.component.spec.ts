import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaTerritorioComponent } from './tarjeta-territorio.component';

describe('TarjetaTerritorioComponent', () => {
  let component: TarjetaTerritorioComponent;
  let fixture: ComponentFixture<TarjetaTerritorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TarjetaTerritorioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarjetaTerritorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
