import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMesAnnoncesComponent } from './detail-mes-annonces.component';

describe('DetailMesAnnoncesComponent', () => {
  let component: DetailMesAnnoncesComponent;
  let fixture: ComponentFixture<DetailMesAnnoncesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMesAnnoncesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMesAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
