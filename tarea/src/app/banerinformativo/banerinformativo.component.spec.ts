import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanerinformativoComponent } from './banerinformativo.component';

describe('BanerinformativoComponent', () => {
  let component: BanerinformativoComponent;
  let fixture: ComponentFixture<BanerinformativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanerinformativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanerinformativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
