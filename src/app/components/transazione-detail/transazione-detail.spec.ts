import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransazioneDetail } from './transazione-detail';

describe('TransazioneDetail', () => {
  let component: TransazioneDetail;
  let fixture: ComponentFixture<TransazioneDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransazioneDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransazioneDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
