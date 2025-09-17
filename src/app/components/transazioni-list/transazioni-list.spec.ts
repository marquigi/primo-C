import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransazioniList } from './transazioni-list';

describe('TransazioniList', () => {
  let component: TransazioniList;
  let fixture: ComponentFixture<TransazioniList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransazioniList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransazioniList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
