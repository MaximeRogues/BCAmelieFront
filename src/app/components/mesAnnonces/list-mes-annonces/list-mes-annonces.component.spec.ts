import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMesAnnoncesComponent } from './list-mes-annonces.component';

describe('ListMesAnnoncesComponent', () => {
  let component: ListMesAnnoncesComponent;
  let fixture: ComponentFixture<ListMesAnnoncesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMesAnnoncesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMesAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
